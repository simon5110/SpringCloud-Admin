const baseUrl = process.env.VUE_APP_BASE_API
const api = {
  state: {
    // 注册中心
    nacosServer: 'http://192.168.0.10:8848/nacos',
    sentinelDashboard: 'http://192.168.0.10:8021',
    mossServer: 'http://192.168.0.10:8022',
    // swagger
    swaggerApi: baseUrl + '/swagger-ui.html'
  }
}

export default api
