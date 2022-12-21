const convertNumbersToRomanNumerals = require('./numbersToRomanNumerals');

test('return "I" when input is 1', () => {
  expect(convertNumbersToRomanNumerals(1)).toBe("I");
});