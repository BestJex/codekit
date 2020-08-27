module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/airbnb'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'comma-dangle': 'off',
    'import/extensions': 'off',
    'template-curly-spacing': 'off',
    indent: [
      'off',
      2,
      {
        ignoredNodes: ['TemplateLiteral']
      }
    ],
    'arrow-parens': 'off',
    'prefer-destructuring': 'off',
    'no-param-reassign': 'off',
    'no-restricted-syntax': 'off',
    'no-await-in-loop': 'off',
    'camelcase': 'off',
    'no-useless-escape': 'off'
  }
};
