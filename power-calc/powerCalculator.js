const powerCalculatorRec = function (base, exp) {
  let result = base;
  for (let i = 1; i < exp; i++) {
    result = result * base
  }
  return result
}

powerCalculatorRec(10,2);
powerCalculatorRec(10,-2);

console.log(powerCalculatorRec(10,2));
console.log(powerCalculatorRec(10,-2));