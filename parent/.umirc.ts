import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
  ],
  npmClient: 'pnpm',
  proxy: {
    '/iframe': {
      target: 'http://localhost:8001/iframe',
      changeOrigin: true,
      pathRewrite: { '^/iframe': '' },
    },
  }
});
