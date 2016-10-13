module.exports = {
  presets: [
    'babel-preset-es2015',
    'babel-preset-stage-0',
    'babel-preset-react'
  ].map(require.resolve),

  plugins: [
    'babel-plugin-add-module-exports',
    'babel-plugin-lodash'
  ].map(require.resolve)
}
