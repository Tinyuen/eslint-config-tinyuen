module.exports = {
  plugins: ['babel'],
  rules: {
    // 强制使用一致的换行风格
    'linebreak-style': 'off',
    // 要求或禁止使用命名的 function 表达式
    'func-names': ['error', 'as-needed'],
    // 要求回调函数使用箭头函数
    'prefer-arrow-callback': 'warn',
    // 允许连续赋值
    'no-multi-assign': 'off',
    // 不禁止对函数的参数重新赋值
    'no-param-reassign': 'off',
    // 禁止出现未使用过的表达式
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    // 要求 return 语句要么总是指定返回的值，要么不指定
    'consistent-return': 'off',
    // 禁止出现未使用过的变量
    'no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'after-used',
        caughtErrors: 'none',
        ignoreRestSiblings: true,
      },
    ],
    // 要求 require() 出现在顶层模块作用域中
    'global-require': 'off',
    // 强制一行的最大长度
    'max-len': 'off',
    // 禁用 console
    'no-console': [
      'warn',
      {
        allow: ['debug', 'info', 'warn', 'error'],
      },
    ],
    // 禁用按位运算符
    'no-bitwise': [
      'error',
      {
        allow: ['~'],
      },
    ],
    // 禁止标识符中有悬空下划线
    'no-underscore-dangle': 'off',
    // 要求箭头函数体使用大括号
    'arrow-body-style': 'off',
    // 要求 switch 语句中有 default 分支
    'default-case': 'off',
    // 函数也需要多行尾逗号
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    // 要求使用 === 和 !==
    'eqeqeq': [
      'warn',
      'always',
      {
        null: 'ignore',
      },
    ],
    // 禁用一元操作符 ++ 和 --
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    // 禁止使用多个空格
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: true,
      },
    ],
    // 强制大括号内换行符的一致性
    'object-curly-newline': [
      'error',
      {
        multiline: true,
        consistent: true,
      },
    ],
    // 使用 babel/semi，实例属性需要加分号
    semi: 'off',
    'babel/semi': ['error', 'always'],
    // 强制三元运算符格式
    'multiline-ternary': ['error', 'always-multiline'],
  },
};

