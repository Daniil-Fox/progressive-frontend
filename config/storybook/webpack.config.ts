import webpack from "webpack";
import {BuildPaths} from "../build/types/buildOptions";
import path from "path";
import { fileURLToPath } from 'url';
import { buildCssLoaders } from "../build/loaders/buildCssLoaders";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isSvgRule = (test: webpack.RuleSetRule["test"]): boolean => {
    if (test instanceof RegExp) {
        return test.source.includes("svg");
    }

    if (typeof test === "string") {
        return /svg/.test(test);
    }

    return false;
};

export default ({ config }: { config: webpack.Configuration }): webpack.Configuration => {
    const paths: BuildPaths = {
        output: "",
        html: "",
        entry: "",
        src: path.resolve(__dirname, "..", "..", "src"),
    };

    config.resolve ??= {};
    config.resolve.extensions ??= [];
    config.resolve.preferAbsolute = true;
    config.resolve.modules = [paths.src, "node_modules"];
    config.resolve.alias = {
        ...config.resolve.alias,
        entities: path.resolve(paths.src, "entities"),
    };

    config.module ??= { rules: [] };
    config.module.rules ??= [];

    config.resolve.extensions.push(".ts", ".tsx");

    config.module.rules = config.module.rules.map((rule) => {
        if (!rule || typeof rule !== "object" || !("test" in rule)) {
            return rule;
        }

        if (isSvgRule(rule.test)) {
            return {
                ...rule,
                exclude: /\.svg$/i,
            };
        }

        return rule;
    });

    config.module.rules.push(buildCssLoaders(true));
    config.module.rules.push({
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
    });
    config.module.rules.push({
        test: /\.(png|jpe?g|gif|avif|woff2?)$/i,
        type: "asset/resource",
    });

    config.plugins ??= [];
    config.plugins.push(
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(true),
            __API__: JSON.stringify(""),
            __PROJECT__: JSON.stringify("storybook"),
        }),
    );

    return config;
};