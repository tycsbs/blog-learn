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

    const categories = fs.readdirSync(baseDir)
    categories.forEach((category) => {
        const categoryPath = path.join(baseDir, category)
        const categoryStats = fs.statSync(categoryPath)
        if (categoryStats.isDirectory()) {
            const posts = fs.readdirSync(categoryPath)
            const _category = (`/${category}/`)
            sidebar[_category] = posts.map((post) => {
                if(post === '.DS_Store') return
                const title = post.replace('.md', '')
                const _link = (`/${category}/${title}`)
                return {
                    text: title,
                    link: _link
                }
            }).filter(Boolean)
        }
    })

    return sidebar
}
