const { RuleTester } = require("eslint");
const validateNameFunctionrule = require("../src/validate-name-function");

const ruleTester = new RuleTester({
    parserOptions: { ecmaVersion: 2015 }
});

ruleTester.run("validate-name-function", validateNameFunctionrule, {
    valid: [

        {
            code: "function bar() {}",
            options: [{ forbiddenWords: ['press'] }],
        },
    ],
    invalid: [
        {
            code: "function fooBar() {}",
            options: [{ forbiddenWords: ["bar"] }],
            errors: [
                {
                    message: "The function has forbidden words in its name. Unexpected value: 'fooBar'. The forbidden words are 'bar'.",
                    type: "FunctionDeclaration",
                },
            ],
        }
    ],
});
