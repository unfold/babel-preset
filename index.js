var path = require('path')

module.exports = {
  plugins: [
    require.resolve('babel-plugin-transform-class-properties'),
    [require.resolve('babel-plugin-transform-object-rest-spread'), { useBuiltins: true }],
    [require.resolve('babel-plugin-transform-react-jsx'), { useBuiltins: true }],
    [require.resolve('babel-plugin-transform-runtime'), {
      helpers: false,
      polyfill: false,
      regenerator: true,
      moduleName: path.dirname(require.resolve('babel-runtime/package')),
    }],
    [require.resolve('babel-plugin-transform-regenerator'), {
      async: false,
    }],
    require.resolve('babel-plugin-syntax-dynamic-import'),
    require.resolve('babel-plugin-lodash'),
  ],

  presets: [
    [require.resolve('babel-preset-env'), {
      targets: {
        browsers: 'last 2 versions',
        node: 'current',
        uglify: true,
      },
      useBuiltIns: false,
      modules: false,
    }],

    require.resolve('babel-preset-react'),
  ],
}
