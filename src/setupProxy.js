const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = app => {
  app.use(
    createProxyMiddleware("/api", {
      target: "https://port-0-node-server-study-r8xoo2mleme9svb.sel3.cloudtype.app",
      //changeOrigin: true,
    })
  );
};
