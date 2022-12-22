function convertNumbersToRomanNumerals(number) {
  const romansToNumberPairs = {
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };

for (const key of Object.keys(romansToNumberPairs)) {
  if(romansToNumberPairs[key] === number) return key;
}
}

module.exports = convertNumbersToRomanNumerals;
