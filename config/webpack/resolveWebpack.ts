import { ConfigWebpackTypes } from './types/BuildWebpackTypes';

export function resolveWebpack(props: ConfigWebpackTypes) {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [props.paths.src, 'node_modules'],
        mainFiles: ['index'],
    };
}
