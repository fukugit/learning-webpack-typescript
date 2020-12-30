# learning-webpack-typescript
[こちら](https://github.com/fukugit/learning-webpack)のプロジェクトをTypeScriptで書き直しました。  
<br>

## Demo
GitHubActions でビルドしています。  
[デモ](https://fukugit.github.io/learning-webpack-typescript/)  

<br>  

## ローカルで起動
### WebPackのサーバ起動
```
npm start
```
<br>  

## ローカルでデバッグ
Webpackでビルドする前のJSファイルをVsCodeでデバッグする方法です。  
### WebPackのサーバ起動
```
npm start
```
<br>

### ターミナルで実行
Chromeは必ず閉じてから実施してください。  
```
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222
```
<br>

### ブラウザでサイトにアクセス
[http://localhost:8080/](http://localhost:8080/)  をブラウザのアドレスバーに指定します。  
<br>

### launch.jsonを起動
VSCodeで```Attach to WebPack Server on Chrome``` を起動します。  
<br>

### JavaScriptファイルにブレークポイントを貼る
[WebPackでビルド前のTypeScriptファイル](./src/js)にブレークポイントを貼って、画面を操作するとブレークポイント部分で止まります。  
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