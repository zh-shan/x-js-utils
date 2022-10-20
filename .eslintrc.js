module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  plugins: ['@typescript-eslint'],
  rules: {
    'accessor-pairs': 'error', // 强制 getter 和 setter 在对象中成对出现
    'array-bracket-spacing': ['error', 'never'], // 禁止在数组括号内出现空格
    'arrow-spacing': ['error', { 'before': true, 'after': true }], // 强制箭头函数的箭头前后使用一致的空格
    'block-spacing': ['error', 'always'], // 强制在代码块中开括号前和闭括号后有空格
    'brace-style': ['error', '1tbs', { 'allowSingleLine': true }], // 将大括号放在控制语句或声明语句同一行的位置
    'camelcase': ['error', { 'properties': 'always' }], // 使用骆驼拼写法命名约定
    'comma-dangle': ['error', 'never'], // 禁止末尾逗号
    'comma-spacing': ['error', { 'before': false, 'after': true }], // 要求在逗号后使用一个或多个空格
    'comma-style': ['error', 'last'], // 要求逗号放在数组元素、对象属性或变量声明之后，且在同一行
    'curly': ['error', 'all'], // 所有控制语句前后时刻保留大括号
    'default-case': 'warn', // 要求 switch 语句中有 default 分支
    'dot-location': ['error', 'property'], // 表达式中的点号操作符应该和属性在同一行
    'eol-last': 'error', // 在非空文件末尾至少存在一行空行
    'eqeqeq': ['error', 'always', { 'null': 'ignore' }], // 强制使用 === 和 !==，除了与 null 字面量进行比较时
    'func-call-spacing': 'error', // 禁止在函数标识符和其调用之间有空格
    'generator-star-spacing': ['error', { 'before': true, 'after': false }], // 强制在 * 和 function 关键字之间有空格
    'handle-callback-err': ['error', '^(err|error)$'], // 要求回调函数中有容错处理
    'indent': ['error', 2, { 'SwitchCase': 1 }], // 使用 2 个空格缩进，switch 语句中的 case 子句的缩进级别为1
    'jsx-quotes': ['error', 'prefer-single'], // 强制所有不包含单引号的 JSX 属性值使用单引号
    'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }], // 要求在对象字面量的冒号和值之间存在至少有一个空格
    'keyword-spacing': ['error', { 'before': true, 'after': true }], // 在关键字前后至少有一个空格
    'new-cap': ['error', { 'newIsCap': true, 'capIsNew': false }], // 要求调用 new 操作符时有首字母大小的函数，允许调用首字母大写的函数时没有 new 操作符
    'new-parens': 'error', // 强制括号后的新构造函数没有参数
    'no-array-constructor': 'error', // 禁止使用 Array 构造函数
    'no-caller': 'error', // 禁用 arguments.caller 或 arguments.callee
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn', // 禁用 debugger
    'no-extend-native': 'error', // 禁止扩展原生类型
    'no-extra-bind': 'error', // 禁止不必要的 .bind() 调用
    'no-extra-parens': 'error', // 禁止不必要的圆括号
    'no-floating-decimal': 'error', // 禁止数字字面量中使用前导和末尾小数点
    'no-iterator': 'error', // 禁用 __iterator__ 属性
    'no-label-var': 'error', // 不允许标签与变量同名
    'no-labels': ['error', { 'allowLoop': false, 'allowSwitch': false }], // 禁用标签语句
    'no-lone-blocks': 'error', // 禁用不必要的嵌套块
    'no-multi-spaces': 'error', // 禁止使用多个空格
    'no-multi-str': 'error', // 禁止使用多行字符串
    'no-multiple-empty-lines': ['error', { 'max': 1 }], // 禁止出现多行空行，强制最大连续空行数为1
    'no-new-object': 'error', // 禁用 Object 的构造函数
    'no-new-require': 'error', // 禁止调用 require 时使用 new 操作符
    'no-new-wrappers': 'error', // 禁止对 String，Number 和 Boolean 使用 new 操作符
    'no-octal-escape': 'error', // 禁止在字符串中使用八进制转义序列
    'no-path-concat': 'error', // 禁止对 __dirname 和 __filename 进行字符串连接
    'no-proto': 'error', // 禁用 __proto__ 属性
    'no-return-assign': ['error', 'except-parens'], // 禁止在 return 语句中使用赋值语句，除非使用括号把它们括起来
    'no-self-compare': 'error', // 禁止自身比较
    'no-sequences': 'error', // 禁用逗号操作符
    'no-throw-literal': 'error', // 禁止抛出异常字面量
    'no-trailing-spaces': 'error', // 禁用行尾空白
    'no-undef-init': 'error', // 不允许初始化变量值为 undefined
    'no-unmodified-loop-condition': 'error', // 禁用一成不变的循环条件
    'no-unneeded-ternary': 'error', // 禁止可以在有更简单的可替代的表达式时使用三元操作符
    'no-useless-call': 'error', // 禁止不必要的 .call() 和 .apply()
    'no-useless-computed-key': 'error', // 禁止在对象中使用不必要的计算属性
    'no-useless-constructor': 'error', // 禁用不必要的构造函数
    'no-whitespace-before-property': 'error', // 禁止属性前有空白
    'object-curly-spacing': ['error', 'always', { objectsInObjects: false }], // 要求花括号内有空格 (除了 {})
    'one-var': ['error', { 'initialized': 'never' }], // 要求每个作用域的初始化的变量有多个变量声明
    'operator-linebreak': ['error', 'after', { 'overrides': { '?': 'before', ':': 'before' }}], // 句太长不能放在一行时，换行符一般插入到分离表达式的操作符后面
    'padded-blocks': ['error', 'never'], // 禁止块语句和类的开始或末尾有空行
    'prefer-const': 'error', // 要求使用 const 声明那些声明后不再被修改的变量
    'quotes': ['error', 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }], // 要求尽可能地使用单引号
    'semi': ['error', 'never'], // 禁止在语句末尾使用分号
    'semi-spacing': ['error', { 'before': false, 'after': true }], // 分号之后强制有空格
    'space-before-blocks': ['error', 'always'], // 块语句必须总是至少有一个前置空格
    'space-before-function-paren': ['error', 'always'], // 要求在参数的 ( 前面有一个空格
    'space-in-parens': ['error', 'never'], // 强制圆括号内没有空格
    'space-infix-ops': 'error', // 要求中缀操作符周围有空格
    'space-unary-ops': ['error', { 'words': true, 'nonwords': false }], // 单词类一元操作符之前或之后存在空格
    'spaced-comment': ['error', 'always', { 'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ','] }], // 在注释前必须跟随至少一个空白
    'template-curly-spacing': ['error', 'never'], // 禁止花括号内出现空格
    'wrap-iife': ['error', 'any'], // 需要把立即执行的函数包裹起来
    'yield-star-spacing': ['error', { 'before': false, 'after': true }], // 强制在 yield* 表达式中 * 后使用空格
    'yoda': ['error', 'never'], // 禁止Yoda条件
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off'
  }
}
