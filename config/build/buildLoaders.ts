import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/buildOptions";
import ReactRefreshTypeScript from "react-refresh-typescript";
import {buildCssLoaders} from "./loaders/buildCssLoaders";
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
        use: [{ loader: "@svgr/webpack", options: { icon: true,
                svgoConfig: {
                    plugins: [
                        {
                            name: 'convertColors',
                            params: {
                                currentColor: true
                            }
                        }
                    ]
                }
            }
        }],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i,
        use: [
            {
                loader: "file-loader",
            },
        ],
    };


    const styleLoader = buildCssLoaders(isDev)

    return [styleLoader, tsLoader, svgLoader, fileLoader];
}
