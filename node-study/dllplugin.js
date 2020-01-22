const Webpack = require('webpack')
const chalk = require('chalk')
const path = require('path')

Webpack({
    mode: 'production',
    // debug: true,
    entry: {
        vendor: [
            'chalk',
            './run-with/run-with.js',
            'jquery'
        ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(process.cwd(), './dist'),
        library: '[name]'
    },
    plugins: [
        new Webpack.DllPlugin({
            name: '[name]',
            path: path.resolve(process.cwd(), './dist/[name]-manifest.json'),
            context: process.cwd()
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
