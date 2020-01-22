const Webpack = require('webpack')
const chalk = require('chalk')

Webpack({
    mode: 'production',
    // debug: true,
    entry: './index.js',
    devtool: 'source-map',
    output: {
        filename: '[name].[hash].js',
        path: require('path').resolve(process.cwd(), './dist')
    },
    plugins: [
        new Webpack.SourceMapDevToolPlugin({
            test: /\.js$|\.css$/i,
            filename: '[name].[hash].js.map',
            module: true,
            columns: true
        })
    ]
}, (err, stat) => {
    if(err) throw new Error(err)
    console.log(stat.toString())
    if (stat.hasErrors()) {
        console.log(chalk.red('  Build failed with errors.\n'));
        process.exit(1);
    }
})
