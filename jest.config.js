
module.exports = {
  testMatch: ['**/tests/**/*.(spec|test).ts?(x)'], // 指定jest加载的目标
  testEnvironment: "jsdom", // 指定 jest 执行环境
  transform: {
    ".(ts|tsx)": 'ts-jest',
    ".(js|jsx)": 'babel-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'jsx', 'js'], // 指定测试文件的扩展名
  coverageDirectory: './docs/jest-coverage', // 设置报表生成的位置
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageReporters: ['json', 'html'],
  coverageThreshold: {
    "global": {
      "branches": 80,
      "functions": 80,
      "lines": 80,
      "statements": -10
    }
  }
};
