// const fs = require('fs')
// const path = require('path')
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
    const sidebar = {};

    const categories = fs.readdirSync(baseDir);
    categories.forEach((category) => {
        const categoryPath = path.join(baseDir, category);
        const categoryStats = fs.statSync(categoryPath);
        if (categoryStats.isDirectory()) {
            const posts = fs.readdirSync(categoryPath);
            sidebar[`/${category}/`] = posts.map((post) => {
                const postPath = path.join(categoryPath, post);
                const { birthtime } = fs.statSync(postPath);
                const title = post.replace('.md', '');
                return {
                    text: `${title} (${birthtime.getFullYear()}-${birthtime.getMonth() + 1}-${birthtime.getDate()})`,
                    link: `/${category}/${title}`,
                };
            });
        }
    });

    return sidebar
}
