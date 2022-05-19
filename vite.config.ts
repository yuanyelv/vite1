/*
 * @Author: yuanyelv 287142032@qq.com
 * @Date: 2022-05-19 14:57:05
 * @LastEditors: yuanyelv 287142032@qq.com
 * @LastEditTime: 2022-05-19 23:30:53
 * @FilePath: \vite-project\vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AEim
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslint(
    )
  ]
})
