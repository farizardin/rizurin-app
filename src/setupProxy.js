/**
 * Proxy configuration for development
 * This bypasses CORS issues when calling the API from localhost
 */

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://api.rizurin.my.id',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '', // Remove /api prefix when forwarding to target
            },
            secure: true,
        })
    );
};
