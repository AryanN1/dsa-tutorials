/*Write a recursive function that split a string based on a separator (similar to String.prototype.split). 
Don't use JS array's split function to solve this problem.*/

const stringSplitter = function(string, split) {
  
  let newString = ''

  for(let i = 0; i < string.length; i++) {
    if (string[i] !== split) {
      newString += string[i];
    };
  }
  return newString;
}

stringSplitter('02/20/2020', '/');

console.log(stringSplitter('02/20/2020', '/'));