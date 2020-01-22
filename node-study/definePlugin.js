const Webpack = require('webpack')
const chalk = require('chalk')

Webpack({
    mode: 'production',
    // debug: true,
    entry: [
        './index.js'
    ],
    devtool: 'source-map',
    output: {
        filename: '[name].js?hash=[hash]',
        path: require('path').resolve(process.cwd(), './dist'),
        chunkFilename: '[id].[hash].js',
        // libraryTarget: 'commonjs2'
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
        })
    ]
}, (err, stat) => {
    if(err) throw new Error(err)
    console.log(stat.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }))
    if (stat.hasErrors()) {
        console.log(chalk.red('  Build failed with errors.\n'));
        process.exit(1);
    }
})
