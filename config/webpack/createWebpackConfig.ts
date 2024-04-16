import webpack from 'webpack';
import { devServerWebpack } from './devServerWebpack';
import { loadersWebpack } from './loadersWebpack';
import { pluginsWebpack } from './pluginsWebpack';
import { resolveWebpack } from './resolveWebpack';
import { ConfigWebpackTypes } from './types/BuildWebpackTypes';

function createWebpackConfig(props: ConfigWebpackTypes): webpack.Configuration {
    const {
        paths,
        mode,
    } = props;

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.outputPath,
            clean: true,
            publicPath: '/',
        },
        module: {
            rules: loadersWebpack(props),
        },
        resolve: resolveWebpack(props),
        plugins: pluginsWebpack(props),
        devServer: devServerWebpack(props),
    };
}

export { createWebpackConfig };
