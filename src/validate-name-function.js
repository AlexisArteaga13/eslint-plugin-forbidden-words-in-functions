module.exports = {
    meta: {
        type: "problem",
        docs: {
            description: "Enforce that a variable named `foo` can only be assigned a value of 'bar'.",
        },
        fixable: "code",
        schema: [
            {
                type: "object",
                properties: {
                    forbiddenWords: {
                        type: "array",
                        items: {
                            type: "string",
                        },
                        uniqueItems: true,
                    },
                },
                additionalProperties: false,
            }
        ]
    },
    create(context) {
        const forbiddenWords = context.options[0]?.forbiddenWords?.map(word => word.toLowerCase()) || [];

        if (forbiddenWords.length === 0) {
            throw new Error('The forbiddenWords array is empty');
        }

        return {
            FunctionDeclaration(node) {
                const nameFunction = node.id.name.toLowerCase();
                if (forbiddenWords.some(word => nameFunction.includes(word))) {
                    context.report({
                        node,
                        message: `The function has forbidden words in its name. Unexpected value: '${node.id.name}'. The forbidden words are '${forbiddenWords.join("', '")}'.`,
                    });
                }
            },
            MethodDefinition(node) {
                const nameFunction = node.key.name.toLowerCase();
                if (forbiddenWords.some(word => nameFunction.includes(word))) {
                    context.report({
                        node,
                        message: `The function has forbidden words in its name. Unexpected value: '${node.key.name}'. The forbidden words are '${forbiddenWords.join("', '")}'.`,
                    });
                }
            }
        };
    }
};