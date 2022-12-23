const convertNumbersToRomanNumerals = require('./numbersToRomanNumerals');

// test('return "I" when input is 1', () => {
//   expect(convertNumbersToRomanNumerals(1)).toEqual("I");
// });
// test('return "V" when input is 5', () => {
//   expect(convertNumbersToRomanNumerals(5)).toEqual("V");
// });
// test('return "X" when input is 10', () => {
//   expect(convertNumbersToRomanNumerals(10)).toEqual("X");
// });
// test('return "C" when input is 50', () => {
//   expect(convertNumbersToRomanNumerals(50)).toEqual("C");
// });
// test('return "C" when input is 50', () => {
//   expect(convertNumbersToRomanNumerals(50)).toEqual("C");
// });

const cases = [[1,"I"], [5,"V"], [10,"X"], [50,"L"], [100,"C"],[4,"IV"],[24,"XXIV"]];

describe("convert numbers to roman numerals", () => {
  test.each(cases)(
    "given %p arguments, returns %p",
    (number, expectedResult) => {
      const result = convertNumbersToRomanNumerals(number);
      expect(result).toEqual(expectedResult);
    }
  );
});
