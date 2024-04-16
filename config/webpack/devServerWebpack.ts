import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { ConfigWebpackTypes } from './types/BuildWebpackTypes';

export function devServerWebpack(props: ConfigWebpackTypes): DevServerConfiguration {
    return {
        port: props.port,
        open: true,
        historyApiFallback: true,
    };
}
