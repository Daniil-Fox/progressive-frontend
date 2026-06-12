import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/buildOptions";
import ReactRefreshTypeScript from "react-refresh-typescript";
export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options;
    const tsLoader = {
        test: /\.tsx?$/,

        use: [
            {loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                    getCustomTransformers: () => ({
                        before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
                    }),
                }
            }
        ],
        exclude: /node_modules/,
    };

    const svgLoader = {
        test: /\.svg$/,
        use: [{ loader: "@svgr/webpack", options: { icon: true } }],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i,
        use: [
            {
                loader: "file-loader",
            },
        ],
    };


    const styleLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    esModule: false,
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes(".module.")),
                        localIdentName: isDev
                            ? "[path][name]__[local]--[hash:base64:5]"
                            : "[hash:base64:8]",
                    },
                },
            },
            "sass-loader",
        ],
    };

    return [styleLoader, tsLoader, svgLoader, fileLoader];
}
