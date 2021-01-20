const gulp = require('gulp'),
	cp = require('child_process'),
	glob = require('glob'),
	fs = require('fs'),
	path = require('path'),
	p = require('./package.json'),
	csv = require('csv-parser'),
	zip = require('gulp-zip'),
	svgo = require('gulp-svgo'),
	puppeteer = require('puppeteer'),
	outlineStroke = require('svg-outline-stroke'),
	iconfont = require('gulp-iconfont'),
	template = require('lodash.template'),
	sass = require('node-sass'),
	cleanCSS = require('clean-css'),
	argv = require('minimist')(process.argv.slice(2)),
	svgParse = require('parse-svg-path'),
	svgpath = require('svgpath'),
	svgr = require('@svgr/core').default;

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

const generateIconsPreview = function (files, destFile, cb, columnsCount = 17, paddingOuter = 7) {

	const padding = 26,
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

		if (fs.existsSync('./.build/iconfont-unicode.json')) {
			iconfontUnicode = require('./.build/iconfont-unicode');
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
				if (unicode) {
					fs.writeFileSync(`icons-outlined/u${unicode.toUpperCase()}-${name}.svg`, outlined);
				} else {
					fs.writeFileSync(`icons-outlined/${name}.svg`, outlined);
				}
			}).catch(error => console.log(error));
		});

		cb();
	});
});

gulp.task('iconfont-optimize', function() {
	return gulp.src('icons-outlined/*')
		.pipe(svgo())
		.pipe(gulp.dest('icons-outlined'));
});

gulp.task('iconfont-fix-outline', function(cb) {
	// correct svg outline directions in a child process using fontforge
	const generate = cp.spawn("fontforge", ["-lang=py", "-script", "./fix-outline.py"], { stdio: 'inherit' });
	generate.on("close", function (code) {
		console.log(`Correcting svg outline directions exited with code ${code}`);
		if (!code) {
			cb();
		}
	});
});

gulp.task('iconfont', function () {
	let maxUnicode = 59905;

	if (fs.existsSync('./.build/iconfont-unicode.json')) {
		const iconfontUnicode = require('./.build/iconfont-unicode');

		for (const name in iconfontUnicode) {
			const unicode = parseInt(iconfontUnicode[name], 16);

			maxUnicode = Math.max(maxUnicode, unicode);
		}
	}

	maxUnicode = maxUnicode + 1;

	return gulp.src(['icons-outlined/*.svg'])
		.pipe(iconfont({
			fontName: 'tabler-icons',
			prependUnicode: true,
			formats: ['ttf', 'eot', 'woff', 'woff2', 'svg'],
			normalize: true,
			startUnicode: maxUnicode,
			fontHeight: 1000,
			descent: 100,
			ascent: 986.5
		}))
		.on('glyphs', function (glyphs, options) {
			//glyphs json
			let glyphsObject = {};

			//sort glypht
			glyphs = glyphs.sort(function (a, b) {
				return ('' + a.name).localeCompare(b.name)
			});

			glyphs.forEach(function (glyph) {
				glyphsObject[glyph.name] = glyph.unicode[0].codePointAt(0).toString(16);
			});

			fs.writeFileSync(`./.build/iconfont-unicode.json`, JSON.stringify(glyphsObject));

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

gulp.task('update-tags-unicode', function(cb) {
	let tags = require('./tags.json'),
		unicodes = require('./.build/iconfont-unicode.json');

	for(let i in tags) {
		tags[i] = {
			...tags[i],
			unicode: unicodes[i],
		}
	}

	console.log('tags', tags);

	fs.writeFileSync(`tags.json`, JSON.stringify(tags, null, 2));

	cb();
});

gulp.task('build-iconfont', gulp.series('iconfont-prepare', 'iconfont-svg-outline', 'iconfont-fix-outline', 'iconfont-optimize', 'iconfont', 'iconfont-css', 'iconfont-clean', 'update-tags-unicode'));

gulp.task('build-zip', function () {
	const version = p.version;

	return gulp.src('{icons/**/*,icons-png/**/*,icons-react/**/*,iconfont/**/*,tabler-sprite.svg,tabler-sprite-nostroke.svg}')
		.pipe(zip(`tabler-icons-${version}.zip`))
		.pipe(gulp.dest('packages'))
});

gulp.task('build-jekyll', function (cb) {
	cp.exec('bundle exec jekyll build', function () {
		cb();
	});
});

gulp.task('build-copy', function (cb) {
	cp.exec('mkdir -p icons/ && rm -fd ./icons/* && cp ./_site/icons/* ./icons && cp ./_site/tags.json .', function () {
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
		paddingOuter = 3,
		iconSize = 32,
		width = 914,
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
	const addFloats = function (n1, n2) {
		return Math.round((parseFloat(n1) + parseFloat(n2)) * 1000) / 1000
	};

	const optimizePath = function(path) {
		let transformed = svgpath(path)
			.rel()
			.round(3)
			.toString();

		return svgParse(transformed).map(function(a){
			return a.join(' ');
		}).join(' ');
	};

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
				.replace(/<path d="([^"]+)"/g, function(f, r1) {
					r1 = optimizePath(r1);

					return `<path d="${r1}"`;
				})
				.replace(/d="m/g, 'd="M')
				.replace(/([Aa])\s?([0-9.]+)\s([0-9.]+)\s([0-9.]+)\s?([0-1])\s?([0-1])\s?(-?[0-9.]+)\s?(-?[0-9.]+)/gi, '$1$2 $3 $4 $5 $6 $7 $8')
				.replace(/\n\n+/g, "\n")

				.replace(/<path d="M([0-9.]*) ([0-9.]*)l\s?([-0-9.]*) ([-0-9.]*)"/g, function (f, r1, r2, r3, r4) {
					return `<line x1="${r1}" y1="${r2}" x2="${addFloats(r1, r3)}" y2="${addFloats(r2, r4)}"`;
				})
				.replace(/<path d="M([0-9.]*) ([0-9.]*)v\s?([-0-9.]*)"/g, function (f, r1, r2, r3) {
					return `<line x1="${r1}" y1="${r2}" x2="${r1}" y2="${addFloats(r2, r3)}"`;
				})
				.replace(/<path d="M([0-9.]*) ([0-9.]*)h\s?([-0-9.]*)"/g, function (f, r1, r2, r3) {
					return `<line x1="${r1}" y1="${r2}" x2="${addFloats(r1, r3)}" y2="${r2}"`;
				})
				.replace(/<path d="([^"]+)"/g, function (f, r1) {
					r1 = r1
						.replace(/ -0\./g, " -.")
						.replace(/ 0\./g, " .")
						.replace(/\s([a-z])/gi, "$1")
						.replace(/([a-z])\s/gi, "$1");
					return `<path d="${r1}"`;
				})
			;

			if (svgFile.toString() !== svgFileContent) {
				fs.writeFileSync(file, svgFileContent);
			}
		});

		cb();
	});
});


gulp.task('changelog-commit', function (cb) {
	cp.exec('git status', function (err, ret) {
		let newIcons = [], modifiedIcons = [], renamedIcons = [];

		ret.replace(/new file:\s+src\/_icons\/([a-z0-9-]+)\.svg/g, function (m, fileName) {
			newIcons.push(fileName);
		});

		ret.replace(/modified:\s+src\/_icons\/([a-z0-9-]+)\.svg/g, function (m, fileName) {
			modifiedIcons.push(fileName);
		});

		ret.replace(/renamed:\s+src\/_icons\/([a-z0-9-]+).svg -> src\/_icons\/([a-z0-9-]+).svg/g, function (m, fileNameBefore, fileNameAfter) {
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

			ret.replace(/A\s+src\/_icons\/([a-z0-9-]+)\.svg/g, function (m, fileName) {
				newIcons.push(fileName);
			});

			ret.replace(/M\s+src\/_icons\/([a-z0-9-]+)\.svg/g, function (m, fileName) {
				modifiedIcons.push(fileName);
			});

			ret.replace(/R[0-9]+\s+src\/_icons\/([a-z0-9-]+)\.svg\s+src\/_icons\/([a-z0-9-]+).svg/g, function (m, fileNameBefore, fileNameAfter) {
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

			ret.replace(/[A]\s+src\/_icons\/([a-z0-9-]+)\.svg/g, function (m, fileName) {
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

gulp.task('clean-react', function (cb) {
	cp.exec('rm -fd ./icons-react/* && mkdir icons-react/icons-js', function () {
		cb();
	});
});

gulp.task('svg-to-react', gulp.series('clean-react', async function (cb) {
	let files = glob.sync("./icons/*.svg");

	const camelize = function (str) {
		str = str.replace(/-/g, ' ');

		return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
			return word.toUpperCase();
		}).replace(/\s+/g, '');
	};

	const componentName = function (file) {
		file = path.basename(file, '.svg');
		file = camelize(`Icon ${file}`);

		return file;
	};

	const optimizeSvgCode = function(svgCode) {
		return svgCode.replace('<path stroke="none" d="M0 0h24v24H0z"/>', '');
	};

	let indexCode = '',
		indexDCode = `import { FC, SVGAttributes } from 'react';\n\ninterface TablerIconProps extends SVGAttributes<SVGElement> { color?: string; size?: string | number; stroke?: string | number; }\n\ntype TablerIcon = FC<TablerIconProps>;\n\n`;

	await asyncForEach(files, async function (file) {
		const svgCode = optimizeSvgCode(fs.readFileSync(file).toString()),
			fileName = path.basename(file, '.svg') + '.js',
			iconComponentName = componentName(file);

		svgr(svgCode, {
			icon: false,
			svgProps: { width: '{size}', height: '{size}', strokeWidth: '{stroke}', stroke: '{color}' },
			template: require('./.build/svgr-template')
		}, { componentName: iconComponentName }).then(jsCode => {
			fs.writeFileSync('icons-react/icons-js/' + fileName, jsCode);
			indexCode += `export { default as ${iconComponentName} } from './icons-js/${fileName}';\n`;
			indexDCode += `export const ${iconComponentName}: TablerIcon;\n`;
		});

		fs.writeFileSync('icons-react/index.js', indexCode);
		fs.writeFileSync('icons-react/index.d.ts', indexDCode);
	});

	cb();
}));

const setVersions = function(version, files) {
	for(const i in files) {
		const file = files[i];

		if (fs.existsSync(`src/_icons/${file}.svg`)) {
			let svgFile = fs.readFileSync(`src/_icons/${file}.svg`).toString();

			if(!svgFile.match(/version: ([0-9.]+)/i)) {
				svgFile = svgFile.replace(/---\n<svg>/i, function(m){
					return `version: ${version}\n${m}`;
				});

				fs.writeFileSync(`src/_icons/${file}.svg`, svgFile);
			} else {
				console.log(`File ${file} already has version`);
			}

		} else {
			console.log(`File ${file} doesn't exists`);
		}
	}
};

gulp.task('update-icons-version', function (cb) {

	const version = argv['latest-version'] || `${p.version}`,
		newVersion = argv['new-version'] || `${p.version}`;

	if (version) {
		cp.exec(`git diff v${version} HEAD --name-status`, function (err, ret) {

			let newIcons = [];

			ret.replace(/[A]\s+src\/_icons\/([a-z0-9-]+)\.svg/g, function (m, fileName) {
				newIcons.push(fileName);
			});

			if(newIcons.length) {
				setVersions(newVersion.replace(/\.0$/, ''), newIcons);
			}
		});
	}

	cb();
});

gulp.task('import-tags', function(cb) {
	fs.createReadStream('./_import.csv')
		.pipe(csv({
			headers: false,
			separator: "\t"
		}))
		.on('data', (row) => {
			console.log(row[0], row[1]);

			const filename = `src/_icons/${row[0]}.svg`;

			let data = fs.readFileSync(filename).toString();
			data = data.replace(/(---[\s\S]+?---)/, function(m, headerContent){

				headerContent = headerContent.replace(/tags: .*\n/, '');
				headerContent = headerContent.replace(/---/, `---\ntags: [${row[1]}]`);

				return headerContent;
			});

			fs.writeFileSync(filename, data);

		})
		.on('end', () => {
			console.log('CSV file successfully processed');
		});
	cb();
});

gulp.task("build-react", function (cb) {
	cp.exec("npm run build-react", function () {
		cb();
	});
});

gulp.task('build', gulp.series('optimize', 'update-icons-version', 'build-jekyll', 'build-copy', 'icons-sprite', 'svg-to-react', 'build-react', 'icons-preview', 'svg-to-png', 'build-iconfont', 'changelog-image', 'build-zip'));
