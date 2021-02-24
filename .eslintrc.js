module.exports =
{
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "./tsconfig.json",
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: [
        "react",
        "@typescript-eslint"
    ],
    extends: [
        "eslint:recommended",
        "plugin:@typecript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking"
    ],
    env: {
        es6: true,
        browser: true
    },
    rules: {
        "@typescript-eslint/semi": ["error"],
        "@typescript-eslint/explicit-function-return-type": 0,
        "@typescript-eslint/no-unused-vars": [
            "error", { "argsIgnorePattern": "^_" }
        ],
        "@typescript-eslint/no-explicit-any": 1,
        "no-case-declarations": 0,
        "react/prop-types": 0,
        "@typescript-eslint/no-unsafe-member-access": 0,
        "@typescript-eslint/explicit-module-boundary-type": 0
    },
    settings: {
        react: {
            pragma: "React",
            version: "detect"
        }
    }
}