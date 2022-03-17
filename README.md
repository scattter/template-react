# 项目支持🍵
React +  Webpack + TypeScript + Eslint + Prettier + Husky + Jest + Enzyme + React fast refresh

## 启动与部署
```
// 本地调试
npm install(or yarn)
npm run dev

// 打包
npm run build
```

## Eslint + Prettier
项目使用`alloy`作为eslint的插件, 如果遇到`eslint`和`Prettier`规则冲突的时候, 使用`Prettier`的规则

## 热更新支持
使用React fast refresh提供支持

## Husky
- pre-commit
	- 每次commit前默认使用eslint和prettier格式化代码, 运行命令见`.husky/pre-commit`文件
- pre-push
	- 每次推送前默认跑全部测试, 运行命令见`.husky/pre-push`文件

## Jest测试
默认设置测试阈值
```
// jest.config.js
global: {  
  statements: 70,  
  branches: 70,  
  functions: 70,  
  lines: 70,  
}
```

如果不想要测试可以在上述文件中将其进行注释
