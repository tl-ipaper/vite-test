/* eslint-disable no-undef */
/** @type {import('vls').VeturConfig} */
module.exports = {
	settings: {
		'vetur.completion.tagCasing': 'initial',
		'vetur.completion.autoImport': true,
		'vetur.format.defaultFormatter.html': 'none',
		'vetur.format.defaultFormatter.css': 'none',
		'vetur.format.defaultFormatter.postcss': 'none',
		'vetur.format.defaultFormatter.less': 'none',
		'vetur.format.defaultFormatter.stylus': 'none',
		'vetur.format.defaultFormatter.scss': 'none',
		'vetur.format.defaultFormatter.js': 'none',
		'vetur.format.defaultFormatter.ts': 'none',
		'vetur.format.enable': false,
		'vetur.format.options.tabSize': 4,
		'vetur.format.options.useTabs': true,
		'vetur.format.scriptInitialIndent': false,
		'vetur.format.styleInitialIndent': false,
		'vetur.validation.script': true,
		'vetur.validation.style': true,
		'vetur.useWorkspaceDependencies': true,
		'vetur.experimental.templateInterpolationService': true
	},
	projects: [
		{
			'root': './packages/core',
			'package': './package.json',
			'tsconfig': './tsconfig.json',
		},
		{
			'root': './packages/evolved',
			'package': './package.json',
			'tsconfig': './tsconfig.json',
		}
	]
}
