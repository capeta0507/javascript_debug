# jest 單元測試
###### tags: `JavaScript` `jest`
參考教學：
https://www.youtube.com/watch?v=7r4xVDI2vho

這裏要來說明如何用 jest 來進行基本的單元測試

### 環境建立
1. mkdir JS_jest
2. cd JS_jest
3. npm init -y

### 安裝 jest
1. npm install --save-dev jest
2. package.json 的 script段落，修改 "test": "jest"，指名 npm run test 執行 jest 測試。

### jest intellisense for Visual Studio code
npm install --save-dev @types/jest
```json=
{
  "name": "JS_jest",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "jest"
  },
  "keywords": [],
  "author": "davidtpe",
  "license": "ISC",
  "dependencies": {
    "@types/jest": "^24.0.15",
    "jest": "^24.8.0"
  }
}
```

### 撰寫 func.js
裡面有一段 add(num1,num2)的功能
```javascript=
const func = {
    // add 數字相加
    add:(num1,num2) => num1 + num2,
}
module.exports = func
```

### 撰寫 func.test.js
接下來撰寫測試程式
```javascript=
const func = require('./func');
// 開始程式測試段
test('Adds 2 + 3 = 5',()=>{
    expect(func.add(2,3)).toBe(5);
})
```

### 執行測試
```bash=
npm run test
```
系統執行測試，並顯示測試結果：
![](https://i.imgur.com/SWYSiZc.png)

### 錯誤段落
如果測試段落錯誤，見下面程式碼
```javascript=
const func = require('./func');
// 開始程式測試段
test('Adds 2 + 3 = 5',()=>{
    expect(func.add(2,3)).toBe(4);
})
```
測試程式會顯示錯誤問題，標示結果與預期的差異，顯示程式碼錯誤位置
![](https://i.imgur.com/bEUgB3p.png)

### 及時偵錯
如果修正 jest 偵錯指令，可以讓 jest 持續執行，當使用者修改程式碼就會再次執行偵錯。
```json=
"test": "jest --watchAll"
```
顯示下面的偵錯結果，並且持續待命
![](https://i.imgur.com/TJ6Z9Fx.png)


