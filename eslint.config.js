import eslint from "@eslint/js";
import { flatConfig as nextFlatConfig } from "@next/eslint-plugin-next";
import pluginVitest from "@vitest/eslint-plugin";
import configPrettier from "eslint-config-prettier";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginSimpleImportSort from "eslint-plugin-simple-import-sort";
import pluginTestingLibrary from "eslint-plugin-testing-library";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import globals from "globals";
import tseslint from "typescript-eslint";

const baseConfig = tseslint.config(
    {
        linterOptions: {
            reportUnusedDisableDirectives: true,
        },
        name: "Base",
        files: ["**/*.{ts,tsx,js,jsx,mjs,cjs}"],
        extends: [
            eslint.configs.recommended,
            tseslint.configs.strictTypeChecked,
            tseslint.configs.stylisticTypeChecked,
        ],
        languageOptions: {
            globals: {
                ...globals.builtin,
            },
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
                sourceType: "module",
                ecmaVersion: "latest",
            },
        },
        plugins: {
            unicorn: eslintPluginUnicorn,
            "simple-import-sort": pluginSimpleImportSort,
        },
        rules: {
            "@typescript-eslint/consistent-type-definitions": ["error", "type"],
            "@typescript-eslint/array-type": [
                "error",
                {
                    readonly: "generic",
                    default: "generic",
                },
            ],
            "@typescript-eslint/no-import-type-side-effects": "error",
            "@typescript-eslint/consistent-type-imports": [
                "error",
                {
                    prefer: "type-imports",
                    fixStyle: "separate-type-imports",
                    disallowTypeAnnotations: true,
                },
            ],
            "@typescript-eslint/consistent-type-exports": [
                "error",
                {
                    fixMixedExportsWithInlineTypeSpecifier: false,
                },
            ],
            "simple-import-sort/imports": "error",
            "simple-import-sort/exports": "error",
            ...eslintPluginUnicorn.configs.recommended.rules,
            "unicorn/better-regex": "warn",
            "unicorn/filename-case": [
                "error",
                {
                    cases: {
                        camelCase: false,
                        pascalCase: false,
                        kebabCase: true,
                        snakeCase: false,
                    },
                },
            ],
        },
    },
    {
        name: "Base-TS-Disabled",
        files: ["**/*.{js,jsx,mjs,cjs}"],
        extends: [tseslint.configs.disableTypeChecked],
    }
);

const reactConfig = tseslint.config({
    name: "React",
    files: ["**/*.{ts,tsx,js,jsx}"],
    extends: [
        pluginReact.configs.flat.recommended,
        pluginReact.configs.flat["jsx-runtime"],
        pluginReactHooks.configs["recommended-latest"],
        pluginJsxA11y.flatConfigs.strict,
    ],
    settings: {
        react: {
            version: "detect",
        },
    },
    languageOptions: {
        globals: {
            ...globals.browser,
        },
        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
        },
    },
});

const nextConfig = tseslint.config({
    name: "NextJS",
    files: ["**/*.{ts,tsx,js,jsx}"],
    extends: [nextFlatConfig.coreWebVitals],
    languageOptions: {
        globals: {
            ...globals.node,
        },
    },
});

const vitestConfig = tseslint.config({
    name: "Vitest",
    files: ["**/*.test.{ts,tsx}"],
    extends: [
        pluginVitest.configs.recommended,
        pluginTestingLibrary.configs["flat/dom"],
        pluginTestingLibrary.configs["flat/react"],
    ],
});

const prettierConfig = tseslint.config({
    ...configPrettier,
    name: "Prettier",
});

export default tseslint.config(baseConfig, reactConfig, nextConfig, vitestConfig, prettierConfig);
