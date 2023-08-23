const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 25000000;
    actual = sum(12345534, 12654466)
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -24;
    actual = sum(-16,-8);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = 0;
    actual = sum(0,0);
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {

  test('can subtract two small positive numbers', () => {
    expected = 4;
    actual = subtract(10, 6);
    expect(actual).toBe(expected);
  });

  test('can subtract two large positive numbers', () => { 
    expected = 150000;
    actual = subtract(230000, 80000)
    expect(actual).toBe(expected);
  });

  test('can subtract two negative numbers', () => {
    expected = -16;
    actual = subtract(-24,-8);
    expect(actual).toBe(expected);
  });

  test('can subtract zero', () => {
    expected = 0;
    actual = subtract(0,0);
    expect(actual).toBe(expected);
  });

});

describe('multiply', () => {

  test('can multiply two small positive numbers', () => {
    expected = 12;
    actual = multiply(3, 4);
    expect(actual).toBe(expected);
  });

  test('can multiply two large positive numbers', () => { 
    expected = 7042795382;
    actual = multiply(56987, 123586)
    expect(actual).toBe(expected);
  });

  test('can multiply two negative numbers', () => {
    expected = 24;
    actual = multiply(-3,-8);
    expect(actual).toBe(expected);
  });

  test('can multiply zero', () => {
    expected = 0;
    actual = multiply(0,0);
    expect(actual).toBe(expected);
  });

});

describe('divide', () => {

  test('can divide two small positive numbers', () => {
    expected = 2;
    actual = divide(32, 16);
    expect(actual).toBe(expected);
  });

  test('can divide two large positive numbers', () => { 
    expected = 56987;
    actual = divide(7042795382, 123586)
    expect(actual).toBe(expected);
  });

  test('can divide two negative numbers', () => {
    expected = 5;
    actual = divide(-25,-5);
    expect(actual).toBe(expected);
  });

  test('cant divide zero', () => {
    expected = NaN;
    actual = divide(28,0);
    expect(actual).toBe(expected);
  });

});

describe('modulus', () => {

  test('can modulus two small positive numbers', () => {
    expected = 2;
    actual = modulus(32, 15);
    expect(actual).toBe(expected);
  });

  test('can modulus two large positive numbers', () => { 
    expected = 5;
    actual = modulus(7042795387, 123586)
    expect(actual).toBe(expected);
  });

  test('can modulus two negative numbers', () => {
    expected = -2;
    actual = modulus(-27,-5);
    expect(actual).toBe(expected);
  });

  test('cant modulus zero', () => {
    expected = NaN;
    actual = modulus(28,0);
    expect(actual).toBe(expected);
  });

});

describe('even', () => {

  test('can check if positive number is even', () => {
    actual = even(28);
    expect(actual).toBeTruthy();
  });

  test('can check if negative number is even', () => {
    actual = even(-6);
    expect(actual).toBeTruthy();
  });

  test('can check if positive number is not even', () => {
    actual = even(27);
    expect(actual).toBeFalsy();
  });

  test('can check if negative number is not even', () => {
    actual = even(-7);
    expect(actual).toBeFalsy();
  });

  test('can check if zero is even', () => {
    actual = even(0);
    expect(actual).toBeTruthy();
  });

});

describe('odd', () => {

  test('can check if positive number is odd', () => {
    actual = odd(27);
    expect(actual).toBeTruthy();
  });

  test('can check if negative number is odd', () => {
    actual = odd(-21);
    expect(actual).toBeTruthy();
  });

  test('can check if positive number is not odd', () => {
    actual = odd(36);
    expect(actual).toBeFalsy();
  });

  test('can check if negative number is not odd', () => {
    actual = odd(-18);
    expect(actual).toBeFalsy();
  });

  test('can check if zero is not odd', () => {
    actual = odd(0);
    expect(actual).toBeFalsy();
  });

});
