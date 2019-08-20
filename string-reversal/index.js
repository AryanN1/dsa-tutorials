//Given a string  return a new string with the reversed
//order of characters

// Ex:
  //reverse('apple') = 'leppa'
  //reverse('hello') = 'olleh'
  //reverse('Greetings!') = '!sgnteerG'
  
  function reverseString (str) {
    let reverse = '';
    for(let i=str.length-1; i>=0; i--) {
      reverse += str[i]
    }
    return reverse;
  }
reverseString('apple');
reverseString('hello');
reverseString('Greetings!');

//Output
console.log(reverseString('apple'));
console.log(reverseString('hello'));
console.log(reverseString('Greetings!'));