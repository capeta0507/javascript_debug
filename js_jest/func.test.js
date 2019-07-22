const func = require('./func');

test('Adds 2 + 3 = 5',() => {
    let result = func.add(2,3);
    expect(result).toBe(5);
})