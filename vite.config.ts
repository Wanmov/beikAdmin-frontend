import { ConfigEnv, UserConfig, defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import UnoCSS from "unocss/vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import { resolve } from "path";

export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [
      vue(),
      // 创建svg图标插件
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [resolve(process.cwd(), "src/assets/icons")],
        // 指定symbolId格式
        symbolId: "icon-[dir]-[name]",
      }),
      UnoCSS({
        hmrTopLevelAwait: false,
      }),
      AutoImport({
        resolvers: [ElementPlusResolver(), IconsResolver({})],
        dts: "src/types/auto-imports.d.ts",
      }),
      Components({
        resolvers: [
          ElementPlusResolver(),
          IconsResolver({
            enabledCollections: ["ep"], // element-plus图标库
          }),
        ],
        dirs: ["src/components", "src/**/components"],
        dts: "src/types/components.d.ts",
      }),
      Icons({
        // 自动安装图标库
        autoInstall: true,
      }),
    ],
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
      },
    },
    css: {
      // CSS预处理器
      preprocessorOptions: {
        scss: {
          // 定义全局 SCSS 变量
          javaScriptEnabled: true,
          additionalData: `
              @use "@/styles/variables.scss" as *;
            `,
        },
      },
    },
    server: {
      host: "0.0.0.0",
      port: Number(env.VITE_APP_PORT),
      open: true,
      proxy: {
        [env.VITE_APP_BASE_API]: {
          changeOrigin: true,
          // 线上接口地址
          target: "http://vapi.youlai.tech",
          // 开发接口地址
          // target: http://localhost:8989
          rewrite: (path) =>
            path.replace(new RegExp("^" + env.VITE_APP_BASE_API), ""),
        },
      },
    },
  };
});
