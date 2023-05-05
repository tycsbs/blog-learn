import { defineConfig } from 'vitepress'
import { generateSidebarConfig } from './loadPage.mjs'
import * as path from 'path'

export default defineConfig({
    title: '白米饭的前端小册子',
    ignoreDeadLinks: true,
    themeConfig: {
        nav: nav(),
        sidebar: sidebar(),
        footer: {
            message: '网站备案号 <a href="https://beian.miit.gov.cn/">蜀ICP备2022027412号-1</a>.',
            copyright: 'Copyright © 2023-present <a href="https://github.com/tycsbs/">Sunny Bai</a>'
        }
    }
})


function nav() {
    return [
        { text: 'NodeJS', link: '/NodeJS/section0' },
        { text: 'Vue构建开发', link: '/vueBuild/section0' },
        { text: 'github', link: 'https://github.com/tycsbs/', target: '_blank' }
    ]
}

function sidebar() {
    const _sidebar = generateSidebarConfig(path.resolve(__dirname, '../pages'))
    console.log(_sidebar)
    return _sidebar
}
