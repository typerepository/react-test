module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
        "jest/globals": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
      {
        "files": [
          "**/*.test.js",
          "**/*.test.jsx",
          "**/*.spec.js",
          "**/*.spec.jsx"
        ],
        "env": {
          "jest": true
        }
      }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "jest",
        "react"
    ],
    "rules": {
    },
    "settings": {
      "react": {
        "version": "detect"
      }
    }
}
