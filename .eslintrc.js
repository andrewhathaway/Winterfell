module.exports = {
  'extends': 'airbnb',
  env: {
    browser: true,
    jest: true
  },
  plugins: [
    'react',
    'jsx-a11y',
    'import'
  ],
  rules: {
    'jsx-a11y/no-static-element-interactions': 'off',
    'no-prototype-builtins': 'off',
    'react/require-extension': 'off',
    'react/no-unused-prop-types': ['error', { skipShapeProps: true }],
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: true
      }
    ],
    'comma-dangle': ['error', 'never'],
    'max-len': ['error', 120],
    'jsx-a11y/label-has-for': 'off',
    'space-before-function-paren': 'off',
    'react/jsx-space-before-closing': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: true,
        peerDependencies: true
      }
    ],
    'no-debugger': ['error'],
    'no-alert': ['error'],
    'newline-after-var': ['error', 'always'],
    'newline-before-return': ['error'],
    'class-methods-use-this': 'off',
    'import/prefer-default-export': 'off'
  },
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  formatter: require('eslint-friendly-formatter')
};
