import path from 'path';
import { createWebpackConfig } from './config/webpack/createWebpackConfig';
import { EnvProps, Mode, PathsWebpackConfigType } from './config/webpack/types/BuildWebpackTypes';

const paths: PathsWebpackConfigType = {
    templateHTML: path.resolve(__dirname, 'public', 'index.html'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    outputPath: path.resolve(__dirname, 'build'),
    src: path.resolve(__dirname, 'src'),
};

const PORT = 3001;

export default function Webpack(env: EnvProps) {
    const port = env.port ?? PORT;
    const mode: Mode = env.mode ?? 'development';
    const isDev = env.mode === 'development';

    const config = createWebpackConfig({
        paths,
        mode,
        port,
        isDev,
    });

    return config;
}
