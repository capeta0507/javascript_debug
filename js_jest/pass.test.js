const isPass = require('./pass');
// 測試 62 / 45 分數是否 Pass
describe('function isPass() Test', () => {
    it('should return true when score is 62', () => {
        expect(isPass(62)).toBe(true);
    });
    it('should return false when score is 45', () => {
        expect(isPass(45)).toBe(false);
    });
});
// 
describe('be and equal', () => {
    // 測試數字計算
    it('should number test', () => {
        expect((4 * 2)).toBe(8);
    });
    // 測試物件
    it('should Class/Object test', () => {
        let myClass = {bar: "Books"}
        expect(myClass).toEqual({bar: "Books"});
    });
    // 測試物件 assign新的值
    it('object assignment', () => {
        const data = {one: 1};
        data['two'] = 2;
        expect(data).toEqual({one: 1, two: 2});
      });
    
});