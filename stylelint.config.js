module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier'
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
	'declaration-colon-newline-after': null,
	'declaration-empty-line-before': null,
	'comment-empty-line-before': null,
	'comment-whitespace-inside': null,
	'no-descending-specificity': null,
	'comment-no-empty': null,
	'color-hex-length': null,
  }
}
