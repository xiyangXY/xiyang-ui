module.exports = {
    pages: {
        index: {
            entry: 'examples/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
    // 扩展 webpack 配置，使 packages 加入编译
    chainWebpack: config => {
        // babel-loader
        config.module
            .rule('js')
            .include
            .add('/packages')
            .end()
            .use('babel')
            .loader('babel-loader')

        // vue-markdown-loader
        config.module.rule('md')
            .test(/\.md/)
            .use('vue-loader')
            .loader('vue-loader')
            .end()
            .use('vue-markdown-loader')
            .loader('vue-markdown-loader/lib/markdown-compiler')
            .options({
                raw: true
            })
    }
}