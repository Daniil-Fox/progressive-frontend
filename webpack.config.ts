import path from "path";
import webpack from "webpack";
import { BuildPaths, EnvOptions } from "./config/build/types/buildOptions";
import { configWebpack } from "./config/build/configWebpack";

export default (env: EnvOptions) => {
    const mode = env.mode || "development";
    const PORT = env.port || 3000;

    const isDev = mode === "development";

    const paths: BuildPaths = {
        entry: path.resolve(__dirname, "src", "index.tsx"),
        output: path.resolve(__dirname, "build"),
        html: path.resolve(__dirname, "public", "index.html"),
        src: path.resolve(__dirname, "src"),
    };

    const config: webpack.Configuration = configWebpack({
        mode,
        paths: paths,
        isDev,
        port: PORT,
    });

    return config;
};
