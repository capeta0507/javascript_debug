# Mocha Chai 單元測試
###### tags: `JavaScript` `Mocha / jest`
參考教學：
Mocha,Chai : https://www.youtube.com/watch?v=MLTRHc5dk6s
Mocha,Chai : https://www.youtube.com/watch?v=sPyb6QlgBaU

#### 安裝Mocha 跟 Chai
```
    npm install --save-dev Mocha Chai
```

#### 到package.json 將test內容改成mocha
```javascript=
  "scripts": {
    "test": "mocha"
  }
```
#### 建立test資料夾，所有的測試檔都放在這
#### 在外面建立js檔案，範例內容(first.js)
```json=
{
  "name": "js_mochachai",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "mocha"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "chai": "^4.2.0",
    "mocha": "^6.2.0"
  }
}
```
#### 在test資料夾內建立測試檔，測試檔名稱建議跟要測試的檔名相同，後面加個test命名(firstTest.js)
```javascript=
var assert = require('chai').assert;
var first = require('../first');

// 前面先引進chai裡面的assert，也可寫成import { assert } from 'chai'
// 接著引進要測試的檔案，import first from '../first'

// 先describe描述測試標題
describe('First檢測', () => {
    // it內填寫測試應得的結果
    it('first.js 應該回復hello world', () => {
        // equal等於
        assert.equal(first(), 'hello world');
    });
});
```
#### 在終端機下npm run test指令，若測試正確會出現以下結果
![](https://i.imgur.com/0VR6IPG.png)
#### 若檔案內容跟測試檔結果不相同會出現以下結果
![](https://i.imgur.com/mmTYde6.png)
#### 由此可見他它會告訴你錯誤點並告訴你該如何修正
