var path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.css']
    },
    module: {
        rules: [
            {
                test: /\.(tsx|ts)?$/,
                use: 'awesome-typescript-loader',
                include: [
                    path.resolve(__dirname, 'src')
                ]
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ],
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    },
    devServer: {
        publicPath: '/static/',
        compress: true,
        port: 3000,
        index: 'index.html'
    }
};
