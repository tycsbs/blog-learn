import { defineConfig } from 'vitepress'

export default defineConfig({
    title: '白米饭的前端小册子',
    outDir: '../dist',
    themeConfig: {
        // nav: nav(),
        sidebar: {
            '/NodeJS/': [
                {
                    text: 'NodeJS',
                    collapsed: false,
                    items: [
                        { text: 'Node的10年大跃进与当下在互联网研发中的地位', link: '/NodeJS/section0' },
                        { text: ' Webpack中用到Node的10个核心基础能力', link: '/NodeJS/section1' },
                        { text: 'Node的语言基础 - JS（ES5/6/7/8）', link: '/NodeJS/section2' },
                        { text: 'Node 的模块机制（CommonJS）与包管理', link: '/NodeJS/section3' },
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
        { text: 'Guide1', link: '/NodeJS/section1.md' },
        { text: 'Guide2', link: '/NodeJS/section2.md' }
    ]
}
