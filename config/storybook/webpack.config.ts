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
    config.resolve.modules ??= [];
    config.resolve.extensions ??= [];
    config.resolve.alias = {
        ...config.resolve.alias,
        "": paths.src,
    };

    config.module ??= { rules: [] };
    config.module.rules ??= [];

    config.resolve.modules.push(paths.src);
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

    return config;
};