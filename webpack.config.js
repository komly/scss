var path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(path.resolve(__dirname, 'dist')),
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: ["style-loader", "css-loader",
            {
                loader: "sass-loader",
                options: {
                    indentedSyntax: true,
                },
            }],
        }],
   },
};
