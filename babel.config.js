module.exports = (envVars) => {

  const presets = [
    [
      "@babel/preset-env",
      {
        "modules": false,
        "useBuiltIns": "usage",
        "corejs": "3",
        "targets": {
          "node": "current"
        }
      }
    ],
    [
      "@babel/preset-react",
      {
        "runtime": "automatic"
      }
    ],
    [
      "@babel/preset-typescript"
    ]
  ];
  const plugins = [
    [
      "@babel/plugin-transform-runtime",
      {
        "corejs": 3
      }
    ],
    ['@babel/plugin-transform-modules-commonjs']
  ];
  
  // 只有在dev环境的时候添加react-refresh插件
  // 打包使用会报错ReferenceError: $RefreshSig$
  envVars.env().trim() === 'development' && plugins.push('react-refresh/babel')
  
  return {
    presets,
    plugins
  };
}
