module.exports = {
    "env": {
        "es6": true,
        "browser": true
    },
    "extends": ["eslint:recommended", "plugin:jest/recommended"],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "indent": ["error", 2, { SwitchCase: 1 }],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
    }
};