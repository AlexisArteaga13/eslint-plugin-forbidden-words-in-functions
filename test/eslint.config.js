"use strict";

// Import the ESLint plugin locally
const eslintRuleNameFunction = require("../index");

module.exports = [
    {
        files: ["**/*.js"],
        languageOptions: {
            sourceType: "commonjs",
            ecmaVersion: "latest",
        },
        // Using the eslint-plugin-example plugin defined locally
        plugins: {"eslint-validate-name-function": eslintRuleNameFunction},
        rules: {
            "validate-name-function": ["error",{forbiddenWords: ['click','press']}],
        },
    }
]