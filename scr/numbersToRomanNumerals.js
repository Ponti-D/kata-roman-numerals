function convertNumbersToRomanNumerals(number) {
  const romansToNumberPairs = {
    C: 100,
    L: 50,
    X:  10,
    V:  5,
    IV: 4,
    I:  1,
  };

  // for (const key of Object.keys(romansToNumberPairs)) {
  //   if (romansToNumberPairs[key] === number) return key;
  // }

  let romannumerals = "";

  do {
    for (const key of Object.keys(romansToNumberPairs)) {
      
      if (romansToNumberPairs[key] <= number) {
        console.log("in" + number);
        console.log(key);
        romannumerals+=key;
        console.log(romannumerals);
        number -= romansToNumberPairs[key];
        console.log("after - " + number);      
        
      }
    }
  } while (number > 0);
  return romannumerals;
}

module.exports = convertNumbersToRomanNumerals;
