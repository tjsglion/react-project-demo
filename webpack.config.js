const argv = require('yargs-parser')(process.argv.slice(2)); // 获取当前配置文件中的参数
console.log(argv);
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const _merge = require('webpack-merge');
const _mode = require(`./confi/webpack.${argv.mode}.js`);
const {join, resolve} = require('path');
const config = {
  entry: resolve(__dirname, './src/web/index.tsx'), // 指定文件入口(单面应用)
  output: {
    publicPath: '/',
    path: resolve(__dirname, './dist/assets/') // 指定输出文件的目录
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        include: [resolve(__dirname, 'src')],
        loader: 'babel-loader'
      }
    ]
  },
  // 外部扩展， 配置选项提供了 从输出的 bundle 中排除依赖 的方法。
  // 防止将某些 import 或 require 的包打包到bundle中，而是在运行时 再去从外部获取这些扩展依赖。
  // 如： 从CND中引入jQuery，而不是把它打包
  /** 
    * <script src="xx/jquery.js"></script>
    * externals: { jquery: 'jQuery'}
    * import $ from 'jquery'
  */
  externals: {},
  resolve: { // 设置模块如何被解析
    alias: { // 创建 import 或 require 的别名，来确保模块引入变得简单
      '@': resolve(__dirname, 'src/')
    },
    // 自动解析确定的扩展， 即在引入模块时可以不带扩展(.js|.jsx|.tsx);
    extensions: ['.js', '.jsx', '.tsx'],
    // 告诉 webpack 解析模块时应该搜索的目录
    modules: [resolve(__dirname, 'src'), 'node_modules']
  },
  // 优化 webpack4之后添加的功能，根据 mode 来执行不同的优化
  optimization: {
    runtimeChunk: {
      name: 'runtime'
    }
  },
  // 指定webpack插件
  plugins: []
};
module.exports = _merge(config, _mode);
