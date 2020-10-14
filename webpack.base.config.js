const path = require('path');
// 基础的webpack配置
module.exports = {
    module: {
        rules: [
            {
                test: /\.[tj]sx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', // babel-loader处理jsx或tsx文件
                    options: {
                        cacheDirectory: true
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
        alias: {
            '~resources': path.resolve(__dirname, 'resources'),
        }
    },
    devtool: 'source-map',
    plugins: []
};