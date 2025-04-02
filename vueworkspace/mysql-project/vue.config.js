const { defineConfig } = require('@vue/cli-service')
const serverOrigin = 'http://localhost:3000';

module.exports = defineConfig({
  transpileDependencies: true,
  devServer : {
    proxy : {
      '^/api' : {
        target : serverOrigin, // 변경할 origin
        changeOrigin : true, 
        ws : false,
        pathRewrite : {'^/api' : '/'} 
      }
    }
  }
})
