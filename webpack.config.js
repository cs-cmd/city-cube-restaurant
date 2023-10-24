const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/driver.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "My Website",
            filename: 'index.html',
            template: './src/index.html'
    })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [ 'style-loader', 'css-loader' ],
            }, 
            {
                test: /\.(jpg|svg|pdf|jpeg|gif)$/i,
                type: 'asset/resource',
            }
        ],
    },
}