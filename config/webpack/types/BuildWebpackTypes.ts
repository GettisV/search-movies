export type Mode = 'development' | 'production';

export interface EnvProps {
    port: number;
    mode: Mode;
}

export interface PathsWebpackConfigType {
    templateHTML: string,
    entry: string,
    outputPath: string,
    src: string,
}

export interface ConfigWebpackTypes{
    paths: PathsWebpackConfigType,
    mode: Mode,
    isDev: boolean,
    port: number,
}
