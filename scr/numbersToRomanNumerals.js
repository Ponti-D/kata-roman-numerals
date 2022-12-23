function convertNumbersToRomanNumerals(number) {
  const romansToNumberPairs = {
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    IV: 4,
    I: 1,
  };

  let romannumerals = "";

  do {
    for (const key of Object.keys(romansToNumberPairs)) {
      if (romansToNumberPairs[key] <= number) {
        console.log(number);
        number -= romansToNumberPairs[key]; // <-- 8/5 number = 3 <-- 3-1 = 2 <-- 2-1 =1 <--1-0
        console.log(number);
        romannumerals += key; //<-- "V" <--"VI" <--"VII" , --"VIII"
        console.log(romannumerals);
      }
    }
  } while (number > 0); //<--"V"
 
  return romannumerals;
}

module.exports = convertNumbersToRomanNumerals;
