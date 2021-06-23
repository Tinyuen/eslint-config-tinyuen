<h1 align="center">eslint-config-tinyuen</h1>

<div align="center">

![build-pass](https://img.shields.io/badge/build-padding-green)
![npm-version](https://img.shields.io/badge/npm-v6.14.8-orange)

An Eslint Shareable Config for Javascript Standard Style. Help You Create a `.eslintrc` file Faster and Easily. 

Base on [Eslint Airbnb](https://www.npmjs.com/package/eslint-config-airbnb)

</div>

## ⚙ Install

```bash
npm install eslint-config-tinyuen -D
```

## 🚀 Usage
creat your own `.eslintrc` file and use `estends` option. you can also overwrite some rules by `rules` option.

### For Default
```json
{
  "extends": ["tinyuen"],
  "rules": {}
}
```

### For React
```json
{
  "extends": ["tinyuen/react"],
  "rules": {}
}
```

### For Vue
```json
{
  "extends": ["tinyuen/vue"],
  "rules": {}
}
```

### For Typescript
```json
{
  "extends": ["tinyuen/typescript"],
  "rules": {}
}
```

### For Typescript And React
```json
{
  "extends": ["tinyuen/typescript-react"],
  "rules": {}
}
```

### For Typescript And Vue
```json
{
  "extends": ["tinyuen/typescript-vue"],
  "rules": {}
}
```

## 🔍 Reference

- [document of eslint rules](https://cn.eslint.org/docs/rules/)
- [Eslint Airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
