import * as fs from 'fs'
import * as path from 'path'
// export function loadPage(path) {
//     const globModule = import.meta.glob(path)
//     Object.entries(globModule).forEach(([path, page]) => {
//         page().then(({ default: file }) => {
//             console.log(`path: ${path}, file: ${file}`)
//         })
//     })
// }

export function generateSidebarConfig(baseDir) {
    const sidebar = {}
    const nav = []

    const categories = fs.readdirSync(baseDir)
    categories.forEach((category) => {
        const categoryPath = path.join(baseDir, category)
        const categoryStats = fs.statSync(categoryPath)
        if (categoryStats.isDirectory()) {
            const posts = fs.readdirSync(categoryPath)
            
            // 生成导航栏
            const _category = (`/pages/${category}/`)
            sidebar[_category] = posts.map((post) => {
                if(post === '.DS_Store') return
                const title = post.replace('.md', '')
                const _link = (`/pages/${category}/${title}`)
                return {
                    text: title,
                    link: _link
                }
            }).filter(Boolean)
            // 生成头部导航栏
            nav.push({
                text: category,
                link: sidebar[_category][0].link
            })
        }
    })

    return {
        sidebar,
        nav
    }
}
