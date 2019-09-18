//common js is used to pull in the path our project sits in
const path = require('path');

//webpack configuration starts here
const config = {
    //entry point for our conversion
    entry: './src/index.js',
    //now the output for our file once it is transpiled
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: 'main.js'
    },
    module:{
        //we have just one rule, all js and jsx get converted by babel loader
        //we ignore node_modules
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    //watch for all changes in the file
    watch: true,
    //provide a source map to help with debug
    devtool: 'source-map'
}