import { defineConfig } from "umi";

export default defineConfig({
	history: {
		type: "hash",
	},
	hash: true,
	publicPath: process.env.NODE_ENV === "production" ? "/iframe/" : "/iframe/",
	routes: [
		{ path: "/", component: "index" },
		{ path: "/docs", component: "docs" },
	],
	npmClient: "pnpm",
	plugins: ["@umijs/plugins/dist/antd"],
	antd: {},
});
