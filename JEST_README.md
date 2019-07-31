## Jest 测试
### 1. 全局安装与项目安装
```
  全局安装:
  yarn -g add jest --D
    检测Jest是否全局安装: npm -g list jest
  项目安装:
  yarn add jest --D
```

### 2. 新建一个配置文件
```
  jest --init
  生成  jest.config.js 配置文件
```

### 3. 使用Mock函数
```
  Mock函数提供如下三种特性:
    1. 捕获函数调用情况
    2. 设置函数返回值
    3. 改变函数的内部实现
  
  创建Mock函数最简单的方式: jest.fn(), 如果没有定义函数内部实现， jest.fn() 会返回 undefined;
```