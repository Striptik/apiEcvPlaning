module.exports = {
    url: 'mongodb://admin:admin1234@ds135574.mlab.com:35574/ecvplanning',
    options: {
        server: {socketOptions: {keepAlive: 300000, connectTimeoutMS: 30000}},
        replset: {socketOptions: {keepAlive: 300000, connectTimeoutMS: 30000}}
    },
    port: 3000
}
