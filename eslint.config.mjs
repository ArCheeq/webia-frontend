import path from "node:path";
import { fileURLToPath } from "node:url";

import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import pluginJs from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import pluginReact from "eslint-plugin-react";
import reactCompiler from "eslint-plugin-react-compiler";
import reactRefresh from "eslint-plugin-react-refresh";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";
import tseslint from "typescript-eslint";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

export default [
    {
        ignores: ["**/node_modules", "**/.DS_Store", "**/dist", "**/dist-ssr", "**/*.local", "node_modules/*"],
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    ...compat.extends("eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:react/recommended"),
    {
        files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
        plugins: {
            "react-refresh": reactRefresh,
            "unused-imports": unusedImports,
            "simple-import-sort": simpleImportSort,
            "react-compiler": reactCompiler,
        },

        languageOptions: {
            parser: tsParser,
            globals: globals.browser,
        },

        settings: {
            react: {
                version: "detect",
            },
        },

        rules: {
			"semi": ["error", "always"],
            "react-compiler/react-compiler": "error",
            "react/react-in-jsx-scope": "off",
            "unused-imports/no-unused-imports": "error",
            "prefer-const": "off",

            "unused-imports/no-unused-vars": [
                "warn",
                {
                    vars: "all",
                    varsIgnorePattern: "^_",
                    args: "after-used",
                    argsIgnorePattern: "^_",
                },
            ],

            "implicit-arrow-linebreak": ["error", "beside"],
            "simple-import-sort/imports": "error",
            "simple-import-sort/exports": "error",
            "react/jsx-first-prop-new-line": "off",
            "react/jsx-max-props-per-line": "off",
            "react/jsx-indent-props": "off",
            "react/jsx-closing-bracket-location": [2, "tag-aligned"],
            "@typescript-eslint/no-explicit-any": "off",
        },
    },
    {
        files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],

        rules: {
            "simple-import-sort/imports": [
                "error",
                {
                    groups: [
                        ["^react", "^@?\\w"],
                        ["^(@|components)(/.*|$)"],
                        ["^\\u0000"],
                        ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
                        ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
                        ["^.+\\.?(css)$"],
                    ],
                },
            ],
        },
    },
];
