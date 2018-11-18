const functions = require('./functions');

test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 to not equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
});

// toBeFalsy
test('Should be falsy', () => {
  expect(functions.checkValue(undefined)).toBeFalsy();
});

// toBe is for number and string. It is not going to work on objects.
// use 'toEqual' to test for object/array equality
test('User should be Serina Ko object', () => {
  expect(functions.createUser()).toEqual({
    firstName: 'Serina',
    lastName: 'Ko'
  });
});
