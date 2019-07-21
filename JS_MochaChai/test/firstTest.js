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