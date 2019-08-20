const triangularNumber = function(nSide) {
  let dots = 1
  for(let i = 2; i <= nSide; i++) {
    dots += i
  }
  return dots
}

triangularNumber(1);
triangularNumber(2);
triangularNumber(3);
triangularNumber(4);
triangularNumber(5);
triangularNumber(6);
triangularNumber(7);
triangularNumber(8);
triangularNumber(9);



//Output
console.log(triangularNumber(1));
console.log(triangularNumber(2));
console.log(triangularNumber(3));
console.log(triangularNumber(4));
console.log(triangularNumber(5));
console.log(triangularNumber(6));
console.log(triangularNumber(7));
console.log(triangularNumber(8));
console.log(triangularNumber(9));
