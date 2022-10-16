const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, '..', 'src', 'index.jsx'),
    mode: 'production',
    output: {
        path: path.resolve(__dirname, '..', 'lib'),
        filename: "index.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            }
        ],
    },
};
