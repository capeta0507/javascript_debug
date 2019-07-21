var assert = require('chai').assert;
var add = require('../add');

// 前面先引進chai裡面的assert，也可寫成import { assert } from 'chai'
// 接著引進要測試的檔案，import add from '../add'

// 先describe描述測試標題
describe('Add檢測', () => {

    var result = add(5);
    // it內填寫測試應得的結果
    it('add.js 加5後應回復10', () => {
        // equal等於
        assert.equal(result, 10);
    });
    it('應該回應為數字', () => {
        // typeOf類型
        assert.typeOf(result, 'number');
    });
});