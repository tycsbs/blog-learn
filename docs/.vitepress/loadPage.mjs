export function loadPage(path) {
    const globModule = import.meta.glob(path)
    Object.entries(globModule).forEach(([path, page]) => {
        page().then(({ default: file }) => {
            console.log(`path: ${path}, file: ${file}`)
        })
    })
}
