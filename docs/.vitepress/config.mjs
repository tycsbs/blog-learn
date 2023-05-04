import { defineConfig } from 'vitepress'
import { generateSidebarConfig } from './loadPage.mjs'
import * as path from 'path'

export default defineConfig({
    title: '白米饭的前端小册子',
    themeConfig: {
        nav: nav(),

        sidebar: {
            '/NodeJS/': [
                {
                    text: 'NodeJS',
                    collapsible: true,
                    title: 'NodeJS',
                    items: [
                        { text: 'Node的10年大跃进与当下在互联网研发中的地位', link: '/NodeJS/section0' },
                        { text: ' Webpack中用到Node的10个核心基础能力', link: '/NodeJS/section1' },
                        { text: 'Node的语言基础 - JS(ES5/6/7/8)', link: '/NodeJS/section2' },
                        { text: 'Node 的模块机制(CommonJS)与包管理', link: '/NodeJS/section3' },
                        { text: 'Node 的生态利器 - NPM', link: '/NodeJS/section4' },
                        { text: 'Node 的文件操作能力 - fs', link: '/NodeJS/section5' },
                        { text: 'Node 的事件机制 - EventEmitter', link: '/NodeJS/section6' },
                        { text: 'Node 的编码与缓冲 - Buffer', link: '/NodeJS/section7' },
                        { text: 'Node 数据流与管道 - Stream/pipe', link: '/NodeJS/section8' },
                        { text: 'Node 的工具集 - path/util/zlib 等', link: '/NodeJS/section9' },
                        { text: '[实现 N 个 API/网页爬虫] Node 的 HTTP 处理', link: '/NodeJS/section10' },
                        { text: 'Node 的集群 - cluster', link: '/NodeJS/section11' },
                        { text: 'Koa 服务端框架用到了哪些能力', link: '/NodeJS/section12' },
                        { text: 'Node 的程序架构及启动流程', link: '/NodeJS/section13' }
                    ]
                }
            ],
            '/vueBuild/': [
                {
                    text: 'Vue 项目构建与开发入门',
                    collapsible: true,
                    title: 'Vue 项目构建与开发入门',
                    items: [
                        { text: 'Vue CLI 3 项目构建基础', link: '/vueBuild/section0' },
                        { text: '需要了解的包管理工具与配置', link: '/vueBuild/section1' },
                        { text: 'webpack 在 CLI 3 中的应用', link: '/vueBuild/section2' },
                        { text: 'env 文件与环境设置', link: '/vueBuild/section3' },
                        { text: '单页应用的基本配置', link: '/vueBuild/section4' },
                        { text: '使用 pages 构建多页应用', link: '/vueBuild/section5' },
                        { text: '多页路由与模版解析', link: '/vueBuild/section6' },
                        { text: '项目整合与优化', link: '/vueBuild/section7' },
                        { text: '从编码技巧与规范开始', link: '/vueBuild/section8' },
                        { text: '学会编写可复用性模块', link: '/vueBuild/section9' },
                        { text: '合理划分容器组件与展示组件', link: '/vueBuild/section10' },
                        { text: '数据驱动与拼图游戏', link: '/vueBuild/section11' },
                        { text: 'Vue API 盲点解析', link: '/vueBuild/section12' },
                        { text: '扩充你的开发工具', link: '/vueBuild/section13' },
                        { text: '界面交给第三方库', link: '/vueBuild/section14' },
                        { text: '尝试使用外部数据', link: '/vueBuild/section15' },
                        { text: '总结', link: '/vueBuild/section16' },
                    ]
                }
            ]
        },
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

console.log(generateSidebarConfig(path.resolve(__dirname, '../')))