import { defineConfig, createContentLoader } from 'vitepress'
import { SitemapStream } from 'sitemap'
import { createWriteStream } from 'node:fs'
import { resolve } from 'node:path'

import { generateSidebarConfig } from './loadPage.mjs'
import * as path from 'path'

const Nav = []

export default defineConfig({
    title: '白米饭的前端小册子',
    ignoreDeadLinks: true,
    lastUpdated: true,
    buildEnd: async ({ outDir }) => {
        const sitemap = new SitemapStream({ hostname: 'https://baimifan.vip/' })
        const pages = await createContentLoader('*.md').load()
        const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'))
    
        sitemap.pipe(writeStream)
        pages.forEach((page) => sitemap.write(
          page.url
            // Strip `index.html` from URL
            .replace(/index.html$/g, '')
            // Optional: if Markdown files are located in a subfolder
            .replace(/^\/docs/, '')
          ))
        sitemap.end()
    
        await new Promise((r) => writeStream.on('finish', r))
      },
    themeConfig: {
        sidebar: sidebar(),
        nav: Nav,
        footer: {
            message: '网站备案号 <a href="https://beian.miit.gov.cn/">蜀ICP备2022027412号-1</a>.',
            copyright: 'Copyright © 2023-present <a href="https://github.com/tycsbs/">Sunny Bai</a>'
        }
    }
})

// 123,45,678910,1112
function sidebar() {
    const {sidebar, nav} = generateSidebarConfig(path.resolve(__dirname, '../pages'))
    const _nav = [...nav].map((item) => {
        item.text = item.text.replace(/\d+/, '')
        return item
    })
    Nav.push({
        text: '面试之道',
        items: nav.splice(0, 3)
    })
    Nav.push({
        text: 'Vue之道',
        items: nav.splice(0, 2)
    })
    Nav.push({
        text: '工程之道',
        items: nav.splice(0, 5)
    })
    Nav.push({
        text: '其他',
        items: nav
    })
    return sidebar
}
