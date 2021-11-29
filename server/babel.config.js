module.exports={
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@controllers': './src/controllers',
        '@models': './src/models',
        '@config': './src/config',
      },
    }],
    'babel-plugin-transform-typescript-metadata',
    ['@babel/plugin-proposal-decorators', {'legacy': true}],
    ['@babel/plugin-proposal-class-properties', {'loose': true}],
    ['@babel/plugin-proposal-private-property-in-object', {'loose': true}],

  ],
  ignore: [
    '**/*.spec.ts',
  ],
};
