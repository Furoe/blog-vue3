module.export = {
  'parser': '@typescript-eslint/parser', // 定义ESLint解析器
  'extends': ['airbnb-base', 'plugin:@typescript-eslint/recommonded'], // 定义文件继承的子规范
  'plugins': ['@typescript-eslint'], // 定义eslint文件依赖的插件
  'env': {
    'browser': false,
    'node': true
  },
  'settings': {
    // 解决路径引用ts文件报错的问题
    'import/resolver': {
      'node': {
        'extensions': ['.js', '.jsx', '.ts', '.tsx']
      },
      'typescript': {
        'alwaysTryTypes': true
      }
    }
  }
}