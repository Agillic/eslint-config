module.exports = {
  "extends": ["airbnb", "plugin:sonarjs/recommended"],
  "parser": "babel-eslint",
  "plugins": [
    "fp",
    "unicorn",
    "sonarjs",
    "array-func",
    "immutable",
    "filenames",
    "react-hooks",
    "@getify/proper-arrows",
    "jest",
    "no-only-tests"
  ],
  "env": {
    "browser": true
  },
  "globals": {
    "console": false,
    "document": false,
    "fetch": false,
    "Headers": false,
    "it": false,
    "navigator": false,
    "URL": false,
    "window": false,
    "describe": false,
    "expect": false
  },
  "rules": {
    "no-unused-expressions": 0,
    "array-func/prefer-flat-map": 2,
    "array-func/prefer-flat": 1,
    "arrow-parens": [2, "as-needed"],
    "brace-style": [2, "stroustrup"],
    "comma-dangle": [2, {
      "arrays": "never",
      "objects": "never",
      "imports": "never",
      "exports": "never",
      "functions": "ignore"
      }],
    "filenames/match-regex": [2, "^([a-z0-9]+)([A-Z][a-z0-9]+)*\\.*(presenter|container|reducer|index|helper|async|shapes|selector)*.*$", true],
    "fp/no-arguments": 2,
    "fp/no-delete": 2,
    "fp/no-get-set": 2,
    "fp/no-let": 2,
    "fp/no-loops": 2,
    "fp/no-mutating-assign": 2,
    "fp/no-mutating-methods": 1,
    "fp/no-proxy": 2,
    "fp/no-valueof-field": 2,
    "import/prefer-default-export": 1,
    "immutable/no-this": 1,
    "jsx-quotes": [2, "prefer-single"],
    "jsx-a11y/label-has-for": [2, {
      "required": {
        "some": ["nesting", "id"]
      }
    }],
    "jsx-a11y/click-events-have-key-events": 0,
    "no-multiple-empty-lines": [2, {
      "max": 2,
      "maxBOF": 0,
      "maxEOF": 1
    }],
    "import/no-extraneous-dependencies": [2, {"devDependencies": ["**/*.stories.js", "**/*.test.js", "**/.storybook/*.js"]}],
    "id-length": [2, {"exceptions": ["_", "x", "y"]}],
    "max-len": 0,
    "no-console": [2, {
      "allow": ["log", "warn", "error"]
    }],
    "no-var": 2,
    "object-curly-spacing": [2, "never"],
    "object-curly-newline": [2, {
      "multiline": true,
      "consistent": true
    }],
    "function-paren-newline": [2, "multiline"],
    "operator-linebreak": [2, "before", {
      "overrides": {"=": "after"}
    }],
    "implicit-arrow-linebreak": 0,
    "react/jsx-filename-extension": 0,
    "react/no-unused-prop-types": 1,
    "react/require-default-props": 0,
    "react/destructuring-assignment": 0,
    "react-hooks/rules-of-hooks": 2,
    "semi": [2, "never"],
    "sonarjs/cognitive-complexity": [2, 15],
    "space-in-parens": [2, "never"],
    "strict": [2, "never"],
    "unicorn/filename-case": [2, {"case": "camelCase"}],
    "unicorn/no-abusive-eslint-disable": 2,
    "unicorn/no-array-instanceof": 2,
    "unicorn/prefer-starts-ends-with": 2,
    "unicorn/regex-shorthand": 2,
    "unicorn/prefer-spread": 2,
    "unicorn/no-unsafe-regex": 2,
    "unicorn/prefer-exponentiation-operator": 2,
    "@getify/proper-arrows/params": [2, {"count": 50, "allowed": ["_", "x", "y"]}],
    "@getify/proper-arrows/return": [2, {"object": false, "ternary": 1000}],
    "jest/consistent-test-it": [2, {"fn": "test", "withinDescribe": "it"}],
    "jest/lowercase-name": 2,
    "jest/no-disabled-tests": 1,
    "jest/no-commented-out-tests": 1,
    "jest/no-empty-title": 2,
    "jest/no-export": 2,
    "jest/no-identical-title": 2,
    "jest/no-jest-import": 2,
    "jest/no-standalone-expect": 2,
    "jest/prefer-todo": 2,
    "jest/require-top-level-describe": 2,
    "jest/valid-describe": 2,
    "jest/valid-expect-in-promise": 1,
    "jest/valid-expect": 1,
    "no-only-tests/no-only-tests": "error"
  }
}
