import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, 'src'),
      "@r": path.resolve(__dirname, 'src/redux/modules'),
    }
  },
  //配置Scss
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/styles/sassConfig.scss";',
      },
    },
  },
  server: {
    port: 8081,//设置服务启动的端口
    host: "0.0.0.0",
    open: true,
    proxy: {
      // 使用 proxy 实例
      '^/api': {
        target: 'url',
        changeOrigin: true,
        // rewrite: (path) => path.replace('/api', '')
      },
    }
  }
})
