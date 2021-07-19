module.exports = {
  pages: {
    app: {
      entry: './example/main.js',
      template: './public/index.html',
      filename: 'index.html'
    }
  },
  devServer: {
    host: 'localhost',
    port: 8888
  },
  transpileDependencies: [
    'element-ui'
  ]
}