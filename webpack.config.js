const path = require(path)

module.exports = {
    entry: path.resolve('src','js'),
    output: {
        path: __dirname+'/dist',
        filename: "index.js",
    },
    alias: {
        img: path.resolve('src', 'asset', 'images'),
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: ['vue-loader','file-loader'],
            },
            {
                test: /\.s[a|c]ss$/,
                loader: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: [
                    "file-loader",
                    "url-loader"
                ],
            },
        ],
    },
};
