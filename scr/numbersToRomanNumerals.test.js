const processTransactions = require('./convertToRomanNumerals')


test('return "I" when input is 1', () => {
  expect(convertNumberToRomanNumerals(1)).toBe("I");
});