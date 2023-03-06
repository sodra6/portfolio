const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = app => {
  app.use(
    createProxyMiddleware("/api", {
      target: "https://node:3000",
      changeOrigin: true,
    })
  );
};
