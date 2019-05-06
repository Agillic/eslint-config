<p align="center">
    <img src="https://www.agillic.com/wp-content/uploads/2016/02/Logo.svg"
        height="170">
</p>

<p align="center">
  <a href="https://gitlab.com/agillic-ci/create-reducer/commits/master"><img alt="pipeline status" src="https://gitlab.com/agillic-ci/eslint-config/badges/master/pipeline.svg" /></a>
</p>

# Agillic ESlint Config

This ESlint config helps keeping your code clean and tidy while enforcing plenty of good practices.

Made with :heart: by Agillic

## Installation

```sh
npm install --save-dev @agillic/eslint-config
```

Or if you're using `yarn`

```sh
yarn add @agillic/eslint-config
```

Note that in order to work properly this package requires a peer dependency of ESlint.

## Usage

In order to use this config extend your `.eslintrc` file

```javascript
{
  "extends": ["@agillic/eslint-config"]
}
```

## Rules

This config extends [airbnb](https://github.com/airbnb/javascript) and [sonarjs/recommended](https://github.com/SonarSource/eslint-plugin-sonarjs) configs.

It also uses the following plugins:
- [fp](https://github.com/jfmengels/eslint-plugin-fp)
- [unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
- [sonarjs](https://github.com/SonarSource/eslint-plugin-sonarjs)
- [array-func](https://github.com/freaktechnik/eslint-plugin-array-func)
- [immutable](https://github.com/jhusain/eslint-plugin-immutable)
- [filenames](https://github.com/mapbox/eslint-plugin-react-filenames)
- [react-hooks](https://github.com/paboulos/react-hooks-eslint)

For the details on specific usage please refer to `index.js`.
