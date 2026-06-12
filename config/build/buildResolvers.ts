import webpack from "webpack";
import { BuildOptions } from "./types/buildOptions";

export function buildResolvers(options: BuildOptions): webpack.ResolveOptions {
    return {
        extensions: [".tsx", ".ts", ".js"],
        preferAbsolute: true,
        alias: {
            "": options.paths.src,
        },
        modules: [options.paths.src, "node_modules"],
    };
}
