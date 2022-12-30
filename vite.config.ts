import { ConfigEnv, UserConfig, loadEnv } from 'vite'
import { resolve } from 'path';
import dayjs from "dayjs";
import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy';
import vueJsx from "@vitejs/plugin-vue-jsx";
import svgLoader from "vite-svg-loader";
// vite-plugin-compression 开启gzip压缩
import viteCompression from 'vite-plugin-compression';
// unplugin-vue-components 按需导入组件
/* import ViteComponents, { ElementPlusResolver } from 'unplugin-vue-components'; */

// 路径查找
function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

// 当前执行node命令时文件夹的地址（工作目录） 
const CWD = process.cwd();
const __APP_INFO__ = {
  lastBuildTime: dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss")
};

export default ({ mode }: ConfigEnv): UserConfig => {
  const { VITE_APP_BASE } = loadEnv(mode, CWD)
  return {
    // 目录
    base: VITE_APP_BASE,
    resolve: {
      // 设置别名
      alias: [
        // @/ 指向  src
        {
          find: /\/@\//,
          replacement: pathResolve('src') + '/',
        },
        // /#/xxxx => types/xxxx
        {
          find: /\/#\//,
          replacement: pathResolve('types') + '/',
        },
      ],
    },
    plugins: [
      vue(),
      // 浏览器兼容
      legacy({
        targets: ['defaults', 'not IE 11'],
      }),
      // svg组件化支持
      svgLoader(),
      // Jsx 配置
      vueJsx({}),
      // Gzip 压缩
      viteCompression({
        //生成压缩包gz
        verbose: true,
        disable: false,
        threshold: 10240,
        algorithm: 'gzip',
        ext: '.gz',
      }),
      // 可以实现组件库或内部组件的自动按需引入组件,而不需要手动的进行import,可以帮我们省去不少import的代码
      // ViteComponents({
      //   customComponentResolvers: [
      //     ElementPlusResolver()
      //   ],
      // }),
    ],
    server: {
      // 是否开启 https
      https: false,
      // 端口号
      port: 9090,
      host: "localhost",
      proxy: {
        "/api": {
          // 服务器地址
          target: "",
          // 是否允许跨域
          changeOrigin: true,
          // 请求的 URL 进行重写:如 /api/user/login 等同于 /user/login
          rewrite: (path) => path.replace(/^\/api/, ""),
        }
      }
    },
    build: {
      // 打包es版本
      target: "es2015",
      // css 最低版本
      cssTarget: "chrome61",
      terserOptions: {
        // 打包后移除console和注释
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
      // 静态资源分类打包
      rollupOptions: {
        output: {
          chunkFileNames: "static/js/[name]-[hash].js",
          entryFileNames: "static/js/[name]-[hash].js",
          assetFileNames: "static/[ext]/[name]-[hash].[ext]"
        }
      }
    },
    define: {
      __INTLIFY_PROD_DEVTOOLS__: false,
      __APP_INFO__: JSON.stringify(__APP_INFO__)
    }
  };
};
