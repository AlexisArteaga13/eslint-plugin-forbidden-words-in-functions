# ESLint Plugin: Forbidden Words in Functions

This ESLint plugin enforces the usage of specific words in the names of functions and methods.

## Installation

You can install this plugin using npm:

```bash
npm install eslint-plugin-forbidden-words-in-functions --save-dev
```

## Usage
To use this plugin, you need to configure it in your ESLint configuration file (e.g., .eslintrc.js):

```javascript
module.exports = {
  plugins: [
    "forbidden-words-in-functions"
  ],
  rules: {
    "forbidden-words-in-functions/forbidden-words": [
      "error",
      {
        "forbiddenWords": ["bad", "illegal", "deprecated"]
      }
    ]
  }
};
```
## Configuration
forbidden-words
Type: Array<string>
Default: []
An array of strings representing the forbidden words. Functions or methods containing any of these words in their names will trigger a linting error.

Example

```javascript
module.exports = {
  plugins: [
    "forbidden-words-in-functions"
  ],
  rules: {
    "forbidden-words-in-functions/forbidden-words": [
      "error",
      {
        "forbiddenWords": ["bad", "illegal", "deprecated"]
      }
    ]
  }
};
```

## Rule Details
This rule enforces that function and method names do not contain forbidden words.

Examples of incorrect code for this rule:
```javascript
function badFunctionName() { /* code */ } // Error: The function has forbidden words in its name. Unexpected value: 'badFunctionName'. The forbidden words are 'bad', 'illegal', 'deprecated'.
```
Examples of correct code for this rule:

```javascript

function goodFunctionName() { /* code */ }

```
## License
This project is licensed under the MIT License - see the LICENSE.md file for details.

```r
Este README incluye instrucciones de instalación, uso, configuración, un ejemplo de configuración en un archivo `.eslintrc.js`, detalles sobre la configuración del plugin y ejemplos de código incorrecto y correcto para la regla proporcionada por tu plugin. Asegúrate de personalizarlo según tus necesidades específicas y proporcionar cualquier otra información relevante para los usuarios de tu plugin.

```

