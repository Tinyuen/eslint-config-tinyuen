<h1 align="center">eslint-config-tinyuen</h1>

<div align="center">

![build-pass](https://img.shields.io/badge/build-padding-green)
![npm-version](https://img.shields.io/badge/npm-v6.14.8-orange)

An Eslint Shareable Config for Javascript Standard Style. Help You Create a `.eslintrc` file Faster and Easily. 

Base on [Eslint Airbnb](https://www.npmjs.com/package/eslint-config-airbnb)

</div>


## 😃 Support

- Javascript
- Typescript
- React
- Vue
- Typescript + React
- Typescript + Vue


## ⚙ Install

You need to install different packages for different Scenes. Refer to the command line below：

Javascript
```shell script
npm install --save-dev eslint babel-eslint eslint-plugin-babel eslint-plugin-import eslint-config-tinyuen
```
Typescript
```shell script
npm install --save-dev eslint typescript eslint-plugin-babel eslint-plugin-import @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-tinyuen
```
React
```shell script
npm install --save-dev eslint babel-eslint eslint-plugin-babel eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-config-tinyuen
```
Vue
```shell script
npm install --save-dev eslint babel-eslint eslint-plugin-babel eslint-plugin-import eslint-plugin-vue vue-eslint-parser eslint-config-tinyuen
```
Typescript + React
```shell script
npm install --save-dev eslint typescript eslint-plugin-babel eslint-plugin-import @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-config-tinyuen
```
Typescript + Vue 
```shell script
npm install --save-dev eslint typescript eslint-plugin-babel eslint-plugin-import @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-vue vue-eslint-parser eslint-config-tinyuen
```

## 🚀 Usage

Create your own `.eslintrc` file and use `extends` option. you can also overwrite some rules by `rules` option.

Like this => extends: ["eslint-config-tinyuen"],  and the prefix `eslint-config-` can be omitted.

```javascript
// Javascript Example 
{
  "extends": ["tinyuen"],
  "rules": {}
}

// React Example 
{
  "extends": ["tinyuen/react"],
  "rules": {}
}

// Vue Example 
{
  "extends": ["tinyuen/vue"],
  "rules": {}
}

// Typescript Example 
{
  "extends": ["tinyuen/typescript"],
  "rules": {}
}

// Typescript + React Example 
{
  "extends": ["tinyuen/typescript-react"],
  "rules": {}
}

// Typescript + Vue Example 
{
  "extends": ["tinyuen/typescript-vue"],
  "rules": {}
}
```

## 🔍 Reference

- [Document Of Eslint Rules](https://cn.eslint.org/docs/rules/)
- [Eslint Airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
