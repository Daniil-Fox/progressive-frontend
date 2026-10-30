import js from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";

export default [
    {
        ignores: ["dist/**", "node_modules/**", "coverage/**"],
    },

    js.configs.recommended,

    ...tseslint.configs.recommended,

    {
        files: ["**/*.{ts,tsx}"],

        languageOptions: {
            globals: globals.browser,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },

        plugins: {
            react,
            "react-hooks": reactHooks,
        },

        settings: {
            react: {
                version: "detect",
            },
        },

        rules: {
            // React
            ...react.configs.recommended.rules,
            ...react.configs["jsx-runtime"].rules,

            // React Hooks
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",
            "@typescript-eslint/no-empty-object-type": "off",
            "@typescript-eslint/no-unused-expressions": "off",
            // TypeScript
            "@typescript-eslint/no-unused-vars": [
                "warn",
                {
                    argsIgnorePattern: "^_",
                    varsIgnorePattern: "^_",
                },
            ],

            // Отключаем дублирующее правило ESLint
            "no-unused-vars": "off",

            // Общие правила
            "no-console": "warn",
            "eqeqeq": ["error", "always"],
            "prefer-const": "error",
            "react/display-name": "off",

            // TypeScript сам проверяет типы props
            "react/prop-types": "off",
        },
    },
];