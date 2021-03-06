const path = require('path');

const autoprefixer = require('autoprefixer');
const merge = require('webpack-merge');
const webpack = require('webpack');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const NpmInstallPlugin = require('npm-install-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event;  //corresponds to the currently running npm script
const PATHS = {
  src: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build'),
  styles: path.join(__dirname, 'src', 'styles')
};

const common = {
  entry: {
    src: PATHS.src
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
},
  plugins: [
    // generates an index.html including a <script> for the generated bundle and
    // link tags for any required assets
    new HtmlWebPackPlugin({
      title: 'react-babel-sass-starter',
      template: 'html!./src/templates/index.html'
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jquery: "jquery",
      "window.jQuery": "jquery",
      jQuery:"jquery"
    })
  ],
  module: {
    loaders: [
       {
         test: /.jsx?$/,
         enforce: 'pre',
         loaders: ['babel-loader','eslint-loader'],
          overlay: {
        errors: true,
        warnings: true,
      },
         include: PATHS.src
       }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};

if (TARGET === 'start' || !TARGET){
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      stats: 'errors-only',
      //windows and vm users may need alternative host and port settings
      host: process.env.HOST,
      port: process.env.PORT
    },
    module: {
      loaders: [
         {
           test: /\.scss$|.sass$/,
           loaders: ['style', 'css', 'postcss', 'sass','resolve-url'],
           include: PATHS.styles
         },
        { 
        test: /\.css$/, 
        loader: "style-loader!css-loader!resolve-url" 
      },
      { 
        test: /\.png$/, 
        loader: "url-loader?limit=100000" 
      },
      { 
        test: /\.jpg$/, 
        loader: "file-loader" 
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'url?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'url?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'file'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'url?limit=10000&mimetype=image/svg+xml'
      }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new NpmInstallPlugin({
        saveDev: true
      })
    ],
    postcss: function(){
      return [autoprefixer];
    }
  });
}

if (TARGET === 'build') {
  module.exports = merge(common, {
    module: {
      loaders: [
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract('style', 'css!postcss'),
          include: PATHS.styles
        },
         {
           test: /\.scss$|.sass$/,
           loader: ExtractTextPlugin.extract('style', 'css!postcss!sass'),
           include: PATHS.styles
         }
      ]
    },
    plugins: [
      // Extracts our generated css to a file in /build
      new ExtractTextPlugin("styles.css"),
      // CleanWebpackPlugin deletes any files in /build before creating a new build
      new CleanWebpackPlugin([PATHS.build]),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"'
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ],
    postcss: function(){
      return [autoprefixer];
    }
  });
}
