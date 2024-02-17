const validateNameFunctionRule = require("./src/validate-name-function");
const plugin = {
    rules:
        { "validate-name-function": validateNameFunctionRule }
};
module.exports = plugin;