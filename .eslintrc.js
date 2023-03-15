module.exports = {
	extends: [
		"airbnb",
		"plugin:storybook/recommended",
		"plugin:react/recommended",
		"plugin:import/recommended",
		"plugin:import/typescript",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
		"next/core-web-vitals"
	],
	plugins: [
		"@typescript-eslint"
	],
	root: true,
	env: {
		browser: true,
		node: true,
		jest: true,
		es6: true
	},
	parserOptions: {
		project: true,
		tsconfigRootDir: __dirname,
	},
	rules: {
		"no-undef": 0,
		"no-continue": 0,
		"no-plusplus": 0,
		"no-console": 0,
		"no-nested-ternary": 0,
		"no-underscore-dangle": 0,
		"linebreak-style": 0,
		"max-len": [
			2,
			{
				"code": 150,
				"comments": 100
			}
		],
		"comma-dangle": [
			"error",
			"never"
		],
		"curly": 0,
		"object-curly-spacing": 0,
		"object-curly-newline": 0,
		"class-methods-use-this": 0,
		"import/no-unresolved": 0,
		"import/no-extraneous-dependencies": 0,
		"import/prefer-default-export": 0,
		"import/extensions": 0,
		"react/function-component-definition": [
			2,
			{
				"namedComponents": "function-declaration"
			}
		],
		"react/react-in-jsx-scope": 0,
		"react/jsx-curly-spacing": [
			2,
			{
				"when": "never",
				"children": true
			}
		],
		"react/destructuring-assignment": 0,
		"react/jsx-props-no-spreading": 0,
		"react/jsx-tag-spacing": 0,
		"react/jsx-filename-extension": [1, { "extensions": [".tsx", ".jsx"] }],
		"react/prop-types": 0,
		"react/no-unescaped-entities": 0,
		"react/sort-comp": [
			0,
			{}
		],
		"jsx-a11y/click-events-have-key-events": 0,
		"jsx-a11y/no-static-element-interactions": 0,
		"jsx-a11y/anchor-is-valid": [
			"error",
			{
				"components": [
					"next/link"
				],
				"specialLink": [
					"hrefLeft",
					"hrefRight"
				],
				"aspects": [
					"invalidHref",
					"preferButton"
				]
			}
		]
	}
}