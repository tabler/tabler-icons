const gulp = require('gulp'),
	glob = require("glob"),
	fs = require("fs"),
	path = require("path"),
	svg2img = require('svg2img');


gulp.task('icons-sprite', function (cb) {
	const columnsCount = 16,
		padding = 30,
		paddingOuter = 24,
		iconSize = 24;

	glob("_site/icons/*.svg", {}, function (er, files) {
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

		const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" style="color: #354052"><rect x="0" y="0" width="${width}" height="${height}" fill="#fafbfc"></rect>\n${svgContentSymbols}\n${svgContentIcons}\n</svg>`;

		fs.writeFileSync('icons.svg', svgContent);
		cb();
	});
});

gulp.task('icons-stroke', function (cb) {

	const icon = "disabled",
		strokes = ['.5', '1', '1.5', '2', '2.75'],
		svgFileContent = fs.readFileSync(`_site/icons/tabler-${icon}.svg`).toString(),
		padding = 32,
		paddingOuter = 32,
		iconSize = 128,
		width = (strokes.length * (iconSize + padding) - padding) + paddingOuter * 2,
		height = iconSize + paddingOuter * 2;

	let svgContentSymbols = '',
		svgContentIcons = '',
		x = paddingOuter;
	
	console.log('width', width);

	strokes.forEach(function (stroke) {
		console.log('stroke', stroke);

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

	const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" style="color: #354052"><rect x="0" y="0" width="${width}" height="${height}" fill="#fafbfc"></rect>\n${svgContentSymbols}\n${svgContentIcons}\n</svg>`;

	fs.writeFileSync('icons-stroke.svg', svgContent);

	cb();
});

gulp.task('optimize', function (cb) {
	glob("_icons/*.svg", {}, function (er, files) {

		files.forEach(function (file, i) {
			let svgFile = fs.readFileSync(file),
				svgFileContent = svgFile.toString();

			svgFileContent = svgFileContent
				.replace(/><\/(polyline|line|rect|circle|path)>/g, '/>')
				.replace(/rx="([^"]+)"\s+ry="\1"/g, 'rx="$1"')
				.replace(/\s?\/>/g, ' />')
				.replace(/\n\s*<(line|circle|path|polyline)/g, "\n  <$1")
				.replace(/polyline points="([0-9.]+)\s([0-9.]+)\s([0-9.]+)\s([0-9.]+)"/g, 'line x1="$1" y1="$2" x2="$3" y2="$4"')
				.replace(/\s+"/g, '"')
				.replace(/\n\n+/g, "\n");

			console.log('file', file);

			fs.writeFileSync(file, svgFileContent);
		});

		cb();
	});
});
