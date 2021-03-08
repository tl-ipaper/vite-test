module.exports = {	
    'root': true,
    'extends': [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:vue/vue3-recommended'
	],
	'plugins': [
		'vue',
		'@typescript-eslint'
	],
	'rules': {
		'no-case-declarations': [
			'warn'
		],
		'no-prototype-builtins': [
			'warn'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		'no-mixed-spaces-and-tabs': [
			'error',
			'smart-tabs'
		],
		'no-multiple-empty-lines': [
			'error',
			{
				'max': 2
			}
		],
		'keyword-spacing':[
			'error',
			{
				'before': true,
				'after': true
			}
		],
		'vue/v-bind-style': [
			'error',
			'longform'
		],
		'vue/v-on-style': [
			'error',
			'longform'
		],
		'vue/html-indent': [
			'warn',
			'tab',
			{
				'attribute': 1,
				'baseIndent': 1,
				'closeBracket': 0,
				'alignAttributesVertically': true,
				'ignores': []
			}
		],
		'vue/attribute-hyphenation': [
			'error',
			'never'
		],
		'vue/html-closing-bracket-newline': [
			'error',
			{
				'singleline': 'never',
				'multiline': 'never'
			}
		],
		'vue/html-self-closing': [
			'error',
			{
				'html': {
					'void': 'always',
					'normal': 'never',
					'component': 'any'
				},
				'svg': 'always',
				'math': 'always'
			}
		],
		'vue/multiline-html-element-content-newline': [
			'error',
			{
				'ignoreWhenEmpty': true,
				'allowEmptyLines': true,
				'ignores': [
					'pre',
					'textarea',
					'a',
					'abbr',
					'audio',
					'b',
					'bdi',
					'bdo',
					'canvas',
					'cite',
					'code',
					'data',
					'del',
					'dfn',
					'em',
					'i',
					'iframe',
					'ins',
					'kbd',
					'label',
					'map',
					'mark',
					'noscript',
					'object',
					'output',
					'picture',
					'q',
					'ruby',
					's',
					'samp',
					'small',
					'span',
					'strong',
					'sub',
					'sup',
					'svg',
					'time',
					'u',
					'var',
					'video'
				]
			}
		],
		'vue/max-attributes-per-line': [
			'error',
			{
				'singleline': 2,
				'multiline': {
					'max': 1,
					'allowFirstLine': false
				}
			}
		],
		'vue/html-closing-bracket-spacing': [
			'error',
			{
				'startTag': 'never',
				'endTag': 'never',
				'selfClosingTag': 'always'
			}
		]
	}
}