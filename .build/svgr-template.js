function template(
	{ template },
	opts,
	{ imports, componentName, props, jsx, exports },
) {
	return template.ast`
    ${imports}
    const ${componentName} = (size = 24, color = "currentColor", stroke = 2, ...props) => ${jsx}
    ${exports}
  `
}
module.exports = template;
