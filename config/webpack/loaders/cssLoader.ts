import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { ConfigWebpackTypes } from '../types/BuildWebpackTypes';

export function cssLoader(options: ConfigWebpackTypes) {
    const {
        isDev,
    } = options;

    return [{
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: /\.module\./,
                        localIdentName: isDev
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:8]',
                    },
                    esModule: false,
                },
            },
            {
                loader: 'sass-loader',
                options: {
                    // eslint-disable-next-line global-require
                    implementation: require('sass'),
                    sassOptions: {
                        logger: {
                            warn: () => {}, // Игнорируем ВСЕ предупреждения
                        },
                    },
                },
            },
        ],
    },
    {
        test: /\.css$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: /\.module\./,
                        localIdentName: isDev
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:8]',
                    },
                    esModule: false,
                },
            },
        ],
    },
    ];
}
