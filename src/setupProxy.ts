import { createProxyMiddleware } from 'http-proxy-middleware';

module.exports = function (app: any) {
    app.use("/", createProxyMiddleware({
        target: "https://bad-api-assignment.reaktor.com/",
        changeOrigin: true
    }))
};