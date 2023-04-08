module.exports = {
  "env": {
    "es6": true,
    "node": true
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "tsconfig.json",
    "sourceType": "module"
  },
  "plugins": [
    "eslint-plugin-jsdoc",
    "eslint-plugin-no-null",
    "@typescript-eslint",
    "@typescript-eslint/tslint"
  ],
  "root": true,
  "rules": {
    "@typescript-eslint/dot-notation": "off",
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        "allowExpressions": true,
        "allowTypedFunctionExpressions": true,
        "allowHigherOrderFunctions": false,
        "allowDirectConstAssertionInArrowFunctions": true,
        "allowConciseArrowFunctionExpressionsStartingWithVoid": true
      }
    ],
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      {
        "accessibility": "explicit"
      }
    ],
    "@typescript-eslint/explicit-module-boundary-types": [
      "error",
      {
        "allowArgumentsExplicitlyTypedAsAny": true,
        "allowDirectConstAssertionInArrowFunctions": true,
        "allowHigherOrderFunctions": false,
        "allowTypedFunctionExpressions": false
      }
    ],
    "@typescript-eslint/indent": [
      "error",
      2,
      {}
    ],
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        "multiline": {
          "delimiter": "semi",
          "requireLast": true
        },
        "singleline": {
          "delimiter": "semi",
          "requireLast": false
        }
      }
    ],
    "@typescript-eslint/member-ordering": "off",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "variable",
        "format": [
          "camelCase",
          "UPPER_CASE",
          "PascalCase"
        ],
        "leadingUnderscore": "allow",
        "trailingUnderscore": "forbid"
      }
    ],
    "@typescript-eslint/no-empty-function": "error",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-shadow": [
      "off",
      {
        "hoist": "all"
      }
    ],
    "@typescript-eslint/no-unused-expressions": "error",
    "@typescript-eslint/prefer-namespace-keyword": "error",
    "@typescript-eslint/quotes": [
      "error",
      "double",
      {
        "avoidEscape": true
      }
    ],
    "@typescript-eslint/semi": [
      "error",
      "always"
    ],
    "@typescript-eslint/type-annotation-spacing": "error",
    "@typescript-eslint/typedef": [
      "error",
      {
        "parameter": true,
        "propertyDeclaration": true
      }
    ],
    "brace-style": [
      "error",
      "1tbs"
    ],
    "comma-dangle": "off",
    "curly": "error",
    "default-case": "error",
    "dot-notation": "off",
    "eol-last": "error",
    "eqeqeq": [
      "error",
      "smart"
    ],
    "guard-for-in": "error",
    "id-denylist": [
      "error",
      "any",
      "Number",
      "number",
      "String",
      "string",
      "Boolean",
      "boolean",
      "Undefined",
      "undefined"
    ],
    "id-match": "error",
    "indent": "off",
    "jsdoc/check-alignment": "error",
    "jsdoc/check-indentation": "error",
    "jsdoc/newline-after-description": "error",
    "max-len": [
      "error",
      {
        "code": 150
      }
    ],
    "no-bitwise": "off",
    "no-caller": "error",
    "no-cond-assign": "error",
    "no-console": [
      "error",
      {
        "allow": [
          "log",
          "warn",
          "dir",
          "timeLog",
          "assert",
          "clear",
          "count",
          "countReset",
          "group",
          "groupEnd",
          "table",
          "dirxml",
          "error",
          "groupCollapsed",
          "Console",
          "profile",
          "profileEnd",
          "timeStamp",
          "context",
          "createTask"
        ]
      }
    ],
    "no-debugger": "error",
    "no-empty": "error",
    "no-empty-function": "off",
    "no-eval": "error",
    "no-fallthrough": "off",
    "no-multiple-empty-lines": "off",
    "no-new-wrappers": "error",
    "no-null/no-null": "off",
    "no-redeclare": "error",
    "no-shadow": "off",
    "no-trailing-spaces": "error",
    "no-underscore-dangle": "off",
    "no-unused-expressions": "off",
    "no-unused-labels": "error",
    "no-var": "error",
    "quotes": "off",
    "radix": "error",
    "semi": "off",
    "spaced-comment": [
      "error",
      "always",
      {
        "markers": [
          "/"
        ]
      }
    ],
    "@typescript-eslint/tslint/config": [
      "error",
      {
        "rules": {
          "whitespace": [
            true,
            "check-branch",
            "check-decl",
            "check-operator",
            "check-separator",
            "check-type"
          ]
        }
      }
    ]
  }
};
