function template(
	{ template },
	opts,
	{ imports, componentName, props, jsx, exports },
) {
	return template.ast`
    ${imports}
    function ${componentName}({ size = 24, color = "currentColor", stroke = 2, ...props }) { return (${jsx}); }
    ${exports}
  `;
}
module.exports = template;
