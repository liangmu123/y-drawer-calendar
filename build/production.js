const path = require('path')

module.exports = {
  pages: {
    index: {
      entry: './src/main.js',
    }
  },
  configureWebpack: config => {
    config.mode = 'development'
    config.output.filename = (chunkData) => {
      return 'index.js'
    }
    config.output.libraryTarget = 'umd'
    config.output.library = 'YDrawerCalenDar'
    config.externals = {
      'vue': 'vue',
      'element-plus/lib/el-drawer': 'element-plus/lib/el-drawer',
      'element-plus/lib/theme-chalk/el-drawer.css': 'element-plus/lib/theme-chalk/el-drawer.css',
      'element-plus/lib/theme-chalk/el-icon.css': 'element-plus/lib/theme-chalk/el-icon.css',
      'element-plus/lib/locale': 'element-plus/lib/locale',
      'element-plus/lib/utils/util': 'element-plus/lib/utils/util',
      'element-plus/packages/theme-chalk/src/date-picker/date-table.scss': 'element-plus/lib/theme-chalk/el-date-picker.css',
      'dayjs': 'dayjs'
    }
  },
  outputDir: path.resolve(__dirname, '../lib'),
  lintOnSave: false,
  chainWebpack: config => {
    config.optimization.delete('splitChunks')
    config.plugins.delete('copy')
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
    config.plugins.delete('html')
    config.plugins.delete('hmr')
    config.entryPoints.delete('app')
  },
  css: {
    sourceMap: true,
    extract: {
      filename: '[name].css'
    }
  }
}