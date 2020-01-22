const Webpack = require('webpack')

module.exports = {
    mode: 'production',
    // debug: true,
    entry: './index.js',
    devtool: 'source-map',
    output: {
        filename: '[name].[hash].js',
        path: require('path').resolve(process.cwd(), './dist')
    },
    plugins: [
        new Webpack.DefinePlugin({
            'process.env': {
                name: '"failte"'
            },
            age: () => typeof window,
            flag: true,
            num: 12,
            'typeof window': '"windows97"'
        }),
        // new Webpack.SourceMapDevToolPlugin({
        //     test: /\.js$|\.css$/i,
        //     filename: '[name].[hash].js.map',
        //     module: true,
        //     columns: true
        // })
    ]
}
