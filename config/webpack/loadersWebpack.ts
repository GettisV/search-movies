import { ConfigWebpackTypes } from './types/BuildWebpackTypes';
import { cssLoader } from './loaders/cssLoader';

export function loadersWebpack(options: ConfigWebpackTypes) {
    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const stylesLoader = cssLoader(options);

    const imageLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        use: 'file-loader',
    };

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    return [
        tsLoader,
        imageLoader,
        svgLoader,
        stylesLoader,
    ];
}
