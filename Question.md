## 问题1
```
  webpack.config.js中指定别名: 
    resolve: {
      alias: {
        '@components': resolve(__dirname, 'src/web/components')
      }
    }

    在 .tsx 文件中 使用  import Index from '@components/Index' 时， 报 @components/Index 不能找到模块;

  
  解决方法: 
  
    在 tsconfig.json 文件的 compilerOptions 下添加 baseUrl 与 paths 选项

    {
      "compilerOptions": {
        "baseUrl": "./src",
        "paths": {
          "@components/*": ["web/components/*"]
        }
      }
    }

```