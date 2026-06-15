import webpack from "webpack";
import { BuildOptions } from "./types/buildOptions";

export function buildResolvers(options: BuildOptions): webpack.ResolveOptions {
    return {
        extensions: [".tsx", ".ts", ".js"],
        preferAbsolute: true,
        alias: {},
        modules: [options.paths.src, "node_modules"],
    };
}
