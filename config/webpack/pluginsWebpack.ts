import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { ConfigWebpackTypes } from './types/BuildWebpackTypes';

export function pluginsWebpack(props: ConfigWebpackTypes): webpack.WebpackPluginInstance[] {
    const { isDev } = props;
    const plugins: webpack.WebpackPluginInstance[] = [
        new HtmlWebpackPlugin({
            template: props.paths.templateHTML,
        }), new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
    ];

    if (isDev) plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false }));

    return plugins;
}
