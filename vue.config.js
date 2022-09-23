module.exports = {
  devServer: {
    port: 8081
  },
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/project2/2022/t4/',
  transpileDependencies: ['vuetify'],
}