import { BuildOptions } from "./types/buildOptions";
import { buildResolvers } from "./buildResolvers";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import webpack from "webpack";
import { buildDevServer } from "./buildDevServer";
import path from "path";

export function configWebpack(options: BuildOptions): webpack.Configuration {
    const { mode, paths, isDev } = options;
    return {
        context: path.resolve(paths.output, ".."),
        mode: mode,
        entry: paths.entry,
        output: {
            path: paths.output,
            filename: "[name].[contenthash].js",
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        devtool: isDev ? "inline-source-map" : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,

    };
}
