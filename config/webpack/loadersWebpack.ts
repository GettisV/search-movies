import { ConfigWebpackTypes } from './types/BuildWebpackTypes';
import { cssLoader } from './loaders/cssLoader';

export function loadersWebpack(options: ConfigWebpackTypes) {
    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const scssLoader = cssLoader(options);

    return [
        tsLoader,
        scssLoader,
    ];
}
