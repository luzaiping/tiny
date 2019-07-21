module.exports = {
  extends: [
    // 执行 npx install-peerdeps --dev eslint-config-airbnb-base 安装
    // 这个命令会安装相对应的 eslint, eslint-config-airbnb-base, eslint-plugin-import
    // 最新 airbnb 包含了 react、jsx； airbnb-base 只包含 JS 相关校验 rules
    "airbnb-base" 
  ],
  env: {
    browser: true,
    commonjs: true,
    node: true,
    es6: true,
    jest: true // 支持 it 断言
  },
  rules: { 
    'comma-dangle': [0, "always-multiline"]
  }
};
