# learning-webpack-typescript
[こちら](https://github.com/fukugit/learning-webpack)のプロジェクトをTypeScriptで書き直しました。  
<br>

## 学んだこと
### TSローダー
```
npm install --save-dev typescript ts-loader
```
<br>

[webpack.config.js](webpack.config.js)  
```
// エントリポイントをTSファイルに変更します。  
entry: './src/js/index.ts',
```
<br>

[webpack.config.js](webpack.config.js)  
```
  // TSローダーの設定
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      },
    ]
  },

  // import命令で拡張子を省略した場合に自動判別するために拡張子を列挙します。
  resolve: {
    extensions: ['.ts', '.js', '.json']
  }
```
<br>

[tsconfig.json](tsconfig.json)  
```
// JavaScriptにビルドする時の条件はこのファイルに定義します。
{
  "compilerOptions": {
    "target": "es5",
    "sourceMap": true,
    "module": "ES2015",
    "moduleResolution": "node",
    "lib": ["es2020", "dom"],
    "noImplicitAny": true,
  }
}
```
<br>