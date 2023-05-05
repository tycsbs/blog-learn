import { defineConfig } from 'vitepress'
import { generateSidebarConfig } from './loadPage.mjs'
import * as path from 'path'

const Nav = []

export default defineConfig({
    title: '白米饭的前端小册子',
    ignoreDeadLinks: true,
    themeConfig: {
        sidebar: sidebar(),
        nav: Nav,
        footer: {
            message: '网站备案号 <a href="https://beian.miit.gov.cn/">蜀ICP备2022027412号-1</a>.',
            copyright: 'Copyright © 2023-present <a href="https://github.com/tycsbs/">Sunny Bai</a>'
        }
    }
})


function sidebar() {
    const {sidebar, nav} = generateSidebarConfig(path.resolve(__dirname, '../pages'))
    Nav.push({
        text: '前端小册子',
        items: nav
    })
    return sidebar
}
