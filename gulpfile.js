const gulp = require('gulp'),
	cp = require('child_process'),
	glob = require('glob'),
	fs = require('fs'),
	path = require('path'),
	p = require('./package.json'),
	zip = require('gulp-zip'),
	puppeteer = require('puppeteer'),
	outlineStroke = require('svg-outline-stroke'),
	iconfont = require('gulp-iconfont'),
	template = require('lodash.template'),
	sass = require('node-sass'),
	cleanCSS = require('clean-css'),
	argv = require('minimist')(process.argv.slice(2));

async function asyncForEach(array, callback) {
	for (let index = 0; index < array.length; index++) {
		await callback(array[index], index, array);
	}
}

const svgToPng = async (filePath, destination) => {
	filePath = path.join(__dirname, filePath);

	const htmlFilePath = path.join("file:", filePath);
	const browser = await puppeteer.launch();
	const page = await browser.newPage();

	await page.setViewport({
		height: 24,
		width: 24,
		deviceScaleFactor: 10
	});

	await page.goto(htmlFilePath);

	await page.screenshot({
		path: path.join(__dirname, destination),
		omitBackground: true,
		fullPage: true
	});

	await browser.close();

	return page;
};

const createScreenshot = async (filePath) => {
	try {
		filePath = path.join(__dirname, filePath);

		const fileName = filePath.replace('.svg', '');
		const htmlFilePath = path.join("file:", filePath);
		const browser = await puppeteer.launch();
		const page = await browser.newPage();

		await page.setViewport({
			height: 10,
			width: 10,
			deviceScaleFactor: 2
		});

		await page.goto(htmlFilePath);

		await page.screenshot({
			path: `${fileName}.png`,
			omitBackground: false,
			fullPage: true
		});

		await browser.close();
	} catch (error) {
		console.error(error);
		throw Error(error);
	}
};


const printChangelog = function (newIcons, modifiedIcons, renamedIcons, pretty = false) {
	if (newIcons.length > 0) {
		if (pretty) {
			console.log(`### ${newIcons.length} new icons:`);

			newIcons.forEach(function (icon, i) {
				console.log(`- \`${icon}\``);
			});
		} else {
			let str = '';
			str += `${newIcons.length} new icons: `;

			newIcons.forEach(function (icon, i) {
				str += `\`${icon}\``;

				if ((i + 1) <= newIcons.length - 1) {
					str += ', '
				}
			});

			console.log(str);
		}

		console.log('');
	}

	if (modifiedIcons.length > 0) {
		let str = '';
		str += `Fixed icons: `;

		modifiedIcons.forEach(function (icon, i) {
			str += `\`${icon}\``;

			if ((i + 1) <= modifiedIcons.length - 1) {
				str += ', '
			}
		});

		console.log(str);
		console.log('');
	}

	if (renamedIcons.length > 0) {
		console.log(`Renamed icons: `);

		renamedIcons.forEach(function (icon, i) {
			console.log(`- \`${icon[0]}\` renamed to \`${icon[1]}\``);
		});
	}
};

const generateIconsPreview = function (files, destFile, cb, columnsCount = 17, paddingOuter = 5) {

	const padding = 29,
		iconSize = 24;

	const iconsCount = files.length,
		rowsCount = Math.ceil(iconsCount / columnsCount),
		width = columnsCount * (iconSize + padding) + 2 * paddingOuter - padding,
		height = rowsCount * (iconSize + padding) + 2 * paddingOuter - padding;

	let svgContentSymbols = '',
		svgContentIcons = '',
		x = paddingOuter,
		y = paddingOuter;

	files.forEach(function (file, i) {
		let name = path.basename(file, '.svg');

		let svgFile = fs.readFileSync(file),
			svgFileContent = svgFile.toString();

		svgFileContent = svgFileContent
			.replace('<svg xmlns="http://www.w3.org/2000/svg"', `<symbol id="${name}"`)
			.replace(' width="24" height="24"', '')
			.replace('</svg>', '</symbol>')
			.replace(/\n\s+/g, '');

		svgContentSymbols += `\t${svgFileContent}\n`;
		svgContentIcons += `\t<use xlink:href="#${name}" x="${x}" y="${y}" width="${iconSize}" height="${iconSize}" />\n`;

		x += padding + iconSize;

		if (i % columnsCount === columnsCount - 1) {
			x = paddingOuter;
			y += padding + iconSize;
		}
	});

	const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" style="color: #354052"><rect x="0" y="0" width="${width}" height="${height}" fill="#fff"></rect>\n${svgContentSymbols}\n${svgContentIcons}\n</svg>`;

	fs.writeFileSync(destFile, svgContent);
	createScreenshot(destFile);

	cb();
};

//*********************************************************************************************

gulp.task('iconfont-prepare', function (cb) {
	cp.exec('mkdir -p icons-outlined/ && rm -fd ./icons-outlined/* && mkdir -p && rm -fd ./iconfont/*', function () {
		cb();
	});
});

gulp.task('iconfont-clean', function (cb) {
	cp.exec('rm -rf ./icons-outlined', function () {
		cb();
	});
});

gulp.task('iconfont-svg-outline', function (cb) {

	cp.exec('mkdir -p icons-outlined/ && rm -fd ./icons-outlined/*', async () => {
		let files = glob.sync("./icons/*.svg");

		let iconfontUnicode = {};

		if(fs.existsSync('./iconfont-unicode.json')) {
			iconfontUnicode = require('./iconfont-unicode');
		}

		await asyncForEach(files, async function (file) {
			const name = path.basename(file, '.svg'),
				unicode = iconfontUnicode[name];

			await console.log('Stroke for:', file, unicode);

			let strokedSVG = fs.readFileSync(file).toString();

			strokedSVG = strokedSVG
				.replace('width="24"', 'width="1000"')
				.replace('height="24"', 'height="1000"');

			await outlineStroke(strokedSVG, {
				optCurve: false,
				steps: 4,
				round: 0,
				centerHorizontally: true,
				fixedWidth: true,
				color: 'black'
			}).then(outlined => {
				if(unicode) {
					fs.writeFileSync(`icons-outlined/u${unicode.toUpperCase()}-${name}.svg`, outlined);
				} else {
					fs.writeFileSync(`icons-outlined/${name}.svg`, outlined);
				}
			}).catch(error => console.log(error));
		});

		cb();
	});
});

gulp.task('iconfont', function () {
	let maxUnicode = 59905;

	if(fs.existsSync('./iconfont-unicode.json')) {
		const iconfontUnicode = require('./iconfont-unicode');

		for(const name in iconfontUnicode) {
			const unicode = parseInt(iconfontUnicode[name], 16);

			maxUnicode = Math.max(maxUnicode, unicode);
		}
	}
	
	return gulp.src(['icons-outlined/*.svg'])
		.pipe(iconfont({
			fontName: 'tabler-icons',
			prependUnicode: true,
			formats: ['ttf', 'eot', 'woff', 'woff2'],
			normalize: true,
			startUnicode: maxUnicode
		}))
		.on('glyphs', function (glyphs, options) {
			//glyphs json
			let glyphsObject = {};

			glyphs.forEach(function (glyph) {
				glyphsObject[glyph.name] = glyph.unicode[0].codePointAt(0).toString(16);
			});

			fs.writeFileSync(`iconfont-unicode.json`, JSON.stringify(glyphsObject));

			//css
			options['glyphs'] = glyphs;
			options['v'] = p.version;

			const compiled = template(fs.readFileSync('.build/iconfont.scss').toString());
			const result = compiled(options);

			fs.writeFileSync('iconfont/tabler-icons.scss', result);

			//html
			const compiledHtml = template(fs.readFileSync('.build/iconfont.html').toString());
			const resultHtml = compiledHtml(options);

			fs.writeFileSync('iconfont/tabler-icons.html', resultHtml);
		})
		.pipe(gulp.dest('iconfont/fonts'));
});

gulp.task('iconfont-css', function (cb) {
	sass.render({
		file: 'iconfont/tabler-icons.scss',
		outputStyle: 'expanded'
	}, function (err, result) {
		fs.writeFileSync('iconfont/tabler-icons.css', result.css);

		const cleanOutput = new cleanCSS({}).minify(result.css);
		fs.writeFileSync('iconfont/tabler-icons.min.css', cleanOutput.styles);

		cb();
	});
});

gulp.task('build-iconfont', gulp.series('iconfont-prepare', 'iconfont-svg-outline', 'iconfont', 'iconfont-css', 'iconfont-clean'));

gulp.task('build-zip', function () {
	const version = p.version;

	return gulp.src('{icons/**/*,icons-png/**/*,iconfont/**/*,tabler-sprite.svg,tabler-sprite-nostroke.svg}')
		.pipe(zip(`tabler-icons-${version}.zip`))
		.pipe(gulp.dest('packages'))
});

gulp.task('build-jekyll', function (cb) {
	cp.exec('bundle exec jekyll build', function () {
		cb();
	});
});

gulp.task('build-copy', function (cb) {
	cp.exec('mkdir -p icons/ && rm -fd ./icons/* && cp ./_site/icons/* ./icons', function () {
		cb();
	});
});

gulp.task('clean-png', function (cb) {
	cp.exec('rm -fd ./icons-png/*', function () {
		cb();
	});
});

gulp.task('icons-sprite', function (cb) {
	glob("_site/icons/*.svg", {}, function (er, files) {

		let svgContent = '';

		files.forEach(function (file, i) {
			let name = path.basename(file, '.svg'),
				svgFile = fs.readFileSync(file),
				svgFileContent = svgFile.toString();

			svgFileContent = svgFileContent
				.replace(/<svg[^>]+>/g, '')
				.replace(/<\/svg>/g, '')
				.replace(/\n+/g, '')
				.replace(/>\s+</g, '><')
				.trim();

			svgContent += `<symbol id="tabler-${name}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${svgFileContent}</symbol>`
		});

		let svg = `<svg xmlns="http://www.w3.org/2000/svg"><defs>${svgContent}</defs></svg>`;

		fs.writeFileSync('tabler-sprite.svg', svg);
		fs.writeFileSync('tabler-sprite-nostroke.svg', svg.replace(/stroke-width="2"\s/g, ''));
		cb();
	});
});

gulp.task('icons-preview', function (cb) {
	glob("icons/*.svg", {}, function (er, files) {
		generateIconsPreview(files, '.github/icons.svg', cb);
	});
});

gulp.task('icons-stroke', gulp.series('build-jekyll', function (cb) {

	const icon = "disabled",
		strokes = ['.5', '1', '1.5', '2', '2.75'],
		svgFileContent = fs.readFileSync(`icons/${icon}.svg`).toString(),
		padding = 16,
		paddingOuter = 5,
		iconSize = 32,
		width = 882,
		height = iconSize + paddingOuter * 2;

	let svgContentSymbols = '',
		svgContentIcons = '',
		x = paddingOuter;

	strokes.forEach(function (stroke) {
		let svgFileContentStroked = svgFileContent
			.replace('<svg xmlns="http://www.w3.org/2000/svg"', `<symbol id="icon-${stroke}"`)
			.replace(' width="24" height="24"', '')
			.replace(' stroke-width="2"', ` stroke-width="${stroke}"`)
			.replace('</svg>', '</symbol>')
			.replace(/\n\s+/g, '');

		svgContentSymbols += `\t${svgFileContentStroked}\n`;
		svgContentIcons += `\t<use xlink:href="#icon-${stroke}" x="${x}" y="${paddingOuter}" width="${iconSize}" height="${iconSize}" />\n`;

		x += padding + iconSize;
	});

	const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" style="color: #354052"><rect x="0" y="0" width="${width}" height="${height}" fill="#fff"></rect>\n${svgContentSymbols}\n${svgContentIcons}\n</svg>`;

	fs.writeFileSync('.github/icons-stroke.svg', svgContent);
	createScreenshot('.github/icons-stroke.svg');
	cb();
}));

gulp.task('optimize', function (cb) {
	glob("src/_icons/*.svg", {}, function (er, files) {

		files.forEach(function (file, i) {
			let svgFile = fs.readFileSync(file),
				svgFileContent = svgFile.toString();

			svgFileContent = svgFileContent
				.replace(/><\/(polyline|line|rect|circle|path)>/g, '/>')
				.replace(/rx="([^"]+)"\s+ry="\1"/g, 'rx="$1"')
				.replace(/\s?\/>/g, ' />')
				.replace(/\n\s*<(line|circle|path|polyline|rect)/g, "\n  <$1")
				.replace(/polyline points="([0-9.]+)\s([0-9.]+)\s([0-9.]+)\s([0-9.]+)"/g, 'line x1="$1" y1="$2" x2="$3" y2="$4"')
				.replace(/a\s?([0-9.]+)\s([0-9.]+)\s([0-9.]+)\s?([0-1])\s?([0-1])\s?(-?[0-9.]+)\s?(-?[0-9.]+)/g, 'a$1 $2 $3 $4 $5 $6 $7')
				.replace(/\n\n+/g, "\n");

			fs.writeFileSync(file, svgFileContent);
		});

		cb();
	});
});


gulp.task('changelog-commit', function (cb) {
	cp.exec('git status', function (err, ret) {
		let newIcons = [], modifiedIcons = [], renamedIcons = [];

		ret.replace(/new file:\s+src\/_icons\/([a-z1-9-]+)\.svg/g, function (m, fileName) {
			newIcons.push(fileName);
		});

		ret.replace(/modified:\s+src\/_icons\/([a-z1-9-]+)\.svg/g, function (m, fileName) {
			modifiedIcons.push(fileName);
		});

		ret.replace(/renamed:\s+src\/_icons\/([a-z1-9-]+).svg -> src\/_icons\/([a-z1-9-]+).svg/g, function (m, fileNameBefore, fileNameAfter) {
			renamedIcons.push([fileNameBefore, fileNameAfter]);
		});

		modifiedIcons = modifiedIcons.filter(function (el) {
			return newIcons.indexOf(el) < 0;
		});

		printChangelog(newIcons, modifiedIcons, renamedIcons);

		cb();
	});
});

gulp.task('changelog', function (cb) {
	const version = argv['latest-tag'] || `v${p.version}`;

	if (version) {
		cp.exec(`git diff ${version} HEAD --name-status`, function (err, ret) {

			let newIcons = [], modifiedIcons = [], renamedIcons = [];

			ret.replace(/A\s+src\/_icons\/([a-z1-9-]+)\.svg/g, function (m, fileName) {
				newIcons.push(fileName);
			});

			ret.replace(/M\s+src\/_icons\/([a-z1-9-]+)\.svg/g, function (m, fileName) {
				modifiedIcons.push(fileName);
			});

			ret.replace(/R[0-9]+\s+src\/_icons\/([a-z1-9-]+)\.svg\s+src\/_icons\/([a-z1-9-]+).svg/g, function (m, fileNameBefore, fileNameAfter) {
				renamedIcons.push([fileNameBefore, fileNameAfter]);
			});

			modifiedIcons = modifiedIcons.filter(function (el) {
				return newIcons.indexOf(el) < 0;
			});

			printChangelog(newIcons, modifiedIcons, renamedIcons, true);

			cb();
		});
	}
});

gulp.task('changelog-image', function (cb) {
	const version = argv['latest-version'] || `${p.version}`,
		newVersion = argv['new-version'] || `${p.version}`;

	if (version) {
		cp.exec(`git diff v${version} HEAD --name-status`, function (err, ret) {

			let newIcons = [];

			ret.replace(/[AD]\s+src\/_icons\/([a-z1-9-]+)\.svg/g, function (m, fileName) {
				newIcons.push(fileName);
			});

			newIcons = newIcons.map(function (icon) {
				return `./icons/${icon}.svg`;
			});

			if (newIcons.length > 0) {
				generateIconsPreview(newIcons, `.github/tabler-icons-${newVersion}.svg`, cb, 6, 24);
			} else {
				cb();
			}
		});
	} else {
		cb();
	}
});


gulp.task('svg-to-png', gulp.series('build-jekyll', 'clean-png', async (cb) => {
	let files = glob.sync("./icons/*.svg");

	await asyncForEach(files, async function (file, i) {
		let name = path.basename(file, '.svg');

		console.log('name', name);

		await svgToPng(file, `icons-png/${name}.png`);
	});

	cb();
}));

gulp.task('build', gulp.series('optimize', 'build-jekyll', 'build-copy', 'icons-sprite', 'icons-preview', 'svg-to-png', /*'build-iconfont', */ 'changelog-image', 'build-zip'));
