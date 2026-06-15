import path from "path";
import webpack from "webpack";
import { BuildPaths, EnvOptions } from "./config/build/types/buildOptions";
import { configWebpack } from "./config/build/configWebpack";

const rootDir = process.cwd();

export default (env: EnvOptions) => {
    const mode = env.mode || "development";
    const PORT = env.port || 3000;

    const isDev = mode === "development";

    const paths: BuildPaths = {
        entry: path.resolve(rootDir, "src", "index.tsx"),
        output: path.resolve(rootDir, "build"),
        html: "./public/index.html",
        src: path.resolve(rootDir, "src"),
    };

    return configWebpack({
        mode,
        paths: paths,
        isDev,
        port: PORT,
    });

};
