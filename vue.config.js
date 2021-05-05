
module.exports = {
  publicPath: process.env.NODE_ENV ===  'production' ? './' : '/' , // 公共路径
    // baseUrl: './',
    // assetsPublicPath:'./',
    assetsDir: 'static', // 相对于outputDir的静态资源(js、css、img、fonts)目录
    configureWebpack: {
      resolve: {
        alias: {
          "assets": '@/assets',
          "common": '@/common',
          "components": '@/components',
          "network": '@/network',
          "view": '@/view',
          "tabbar": 'assets/images/tabbar'
        }
      },
      // module: {
      //   rules: [
      //     {
      //       test: /\.css$/i,
      //       use: ["style-loader", "css-loader"],
      //     },
      //     {
      //       test: /\.(png|jpg|gif)$/,
      //       use: [
      //         {
      //           loader: 'file-loader',
      //           options: {
      //             name: '[name]-[hash].[ext]'
      //           },
      //         },
      //       ],
      //     },
      //     {
      //       test: /\.(png|jpg|gif)$/i,
      //       use: [
      //         {
      //           loader: 'url-loader',
      //           options: {
      //             limit: 8192
      //           }
      //         }
      //       ]
      //     },
      //     {
      //       test: /\.less$/,
      //       use: [{
      //         loader: 'style-loader'
      //       }, {
      //         loader: 'css-loader'
      //       }, {
      //         loader: 'less-loader'
      //       }]
      //     }
      //   ],
      // },
      // publicPath: './',
    },

    devServer: {
            overlay: { // 让浏览器 overlay 同时显示警告和错误
              warnings: true,
              errors: true
            },
            host: "localhost",
            port: 8081, // 端口号
            https: false, // https:{type:Boolean}
            open: true, //配置自动启动浏览器
            hotOnly: true, // 热更新
            // proxy: 'http://localhost:8080'   // 配置跨域处理,只有一个代理

        }
}
