module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>'],
  // 测试文件是src目录下*.test.jsx或者*.test.tsx的文件
  testRegex: 'src/(.+)\\.test\\.(jsx?|tsx?)$',
  // 快照序列化, 在这里设置后就不用在每次测试的时候重新导入enzyme-to-json了
  snapshotSerializers: ['enzyme-to-json/serializer'],
  // 自定义转换方式，转换jsx、tsx文件
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest', // 这个是jest的默认配置
    '^.+\\.(ts|tsx)?$': 'ts-jest', // typescript转换
  },
  // 模块资源映射，例如alias的配置
  moduleNameMapper: {
    // 用于css、js、图片等文件的mock
    '\\.(css|less|scss)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'identity-obj-proxy',
    // alias
    '@/(.*)$': '<rootDir>/src/$1',
  },
  testPathIgnorePatterns: ['\\node_modules\\'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  // 覆盖率从哪些文件收集，设置后即使0覆盖率的文件也会计算进来
  collectCoverageFrom: ['src/**/*.{tsx,jsx}'],
  // 测试报告输出地址
  coverageDirectory: '<rootDir>/coverage',
  // 在每个测试文件执行之前，运行一些代码以配置或设置测试框架。
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  // 配合husky, 如果push前测试覆盖率没有达到下面的阈值, 那么将会push失败
  coverageThreshold: {
    global: {
      statements: 70,
      branches: 70,
      functions: 70,
      lines: 70,
    },
  },
  collectCoverage: true,
  coverageReporters: ['clover', 'html', 'lcov', 'text-summary'],
};
