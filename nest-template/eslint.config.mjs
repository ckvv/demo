import antfu from '@antfu/eslint-config';

export default antfu({
  rules: {
    'ts/consistent-type-imports': 0,
    'semi': 'off',
    'style/semi': ['error', 'always'],
  },
});
