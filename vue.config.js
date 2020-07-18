module.exports = {
    publicPath: './',
    pages: {
        index: {
            entry: 'src/pages/index/index.js',
            template: 'src/pages/index/index.html',
            filename: 'index.html'
        },
        user: {
            entry: 'src/pages/user/user.js',
            template: 'src/pages/user/user.html',
            filename: 'user.html'
        },
        admin: {
            entry: 'src/pages/admin/admin.js',
            template: 'src/pages/admin/admin.html',
            filename: 'admin.html'
        }
    }
}
