module.exports = {
    "env": {
        "browser": true,
        "mocha": true,
        "node": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:import/recommended",
        "prettier"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "import",
        "react",
        "prettier"
    ],
    "rules": {
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "no-console": 1,
        "prettier/prettier": ["error", {"singleQuote": true, "trailingComma": "es5"}],
        "prefer-const": 2,
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    },
    "settings": {
        "react": {
        "pragma": "React",
        "version": "^16.4.2",
        },
    },
};