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

gulp.task('optimize', function(){
	glob("_site/icons/*.svg", {}, function (er, files) {

		files.forEach(function (file, i) {
			let svgFile = fs.readFileSync(file),
				svgFileContent = svgFile.toString();

			svgFileContent = svgFileContent
				.replace(/><\/(polyline|line|rect|circle)>/, '/>')
				.replace(/\n\n+/g, "\n");

			fs.writeFileSync(file, svgFileContent);
		});

		cb();
	});
});
