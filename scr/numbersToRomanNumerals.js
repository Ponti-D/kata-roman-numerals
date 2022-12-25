function convertNumbersToRomanNumerals(number) {
  //create a place holder for conversion table
  const romansToNumberPairs = {
    C: 100,
    XC: 90,
    L: 50,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let romannumerals = "";

  let numbersArray = Object.values(romansToNumberPairs);
  let min = Math.min(...numbersArray);
  //let romanstring = "";
  do {
    for (const key of Object.keys(romansToNumberPairs)) {
      //number = 8
      let highestRomanNumrals = Math.max(
        ...numbersArray.filter((e) => e <= number)
      ); // max = 5
      if (romansToNumberPairs[key] === highestRomanNumrals) {
        console.log(highestRomanNumrals);
        romannumerals += key; //<-- "V" <--"VI" <--"VII" , --"VIII"
        console.log(romannumerals);
        number -= highestRomanNumrals; // <-- 8-5 number = 3 <-- 3-1 = 2 <-- 2-1 =1 <--1-0
        console.log(number);
      }
    }
  } while (number > 0);
  
  return romannumerals;
}

module.exports = convertNumbersToRomanNumerals;
