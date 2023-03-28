module.exports = {
  future: {
    unstable_tailwind: true,
  },
  ignoredRouteFiles: ["**/.*"],
  server: process.env.NODE_ENV === "development" ? undefined : "./server.js",
  serverBuildPath: "api/index.js",
};
