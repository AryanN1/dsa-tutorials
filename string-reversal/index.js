//Given a string  return a new string with the reversed
//order of characters

// Ex:
  //reverse('apple') = 'leppa'
  //reverse('hello') = 'olleh'
  //reverse('Greetings!') = '!sgnteerG'

  function reverse (str) {
    return str.split('')
    .reduce((rev, char) => 
      char + rev, '');
  }

  module.exports = reverse;

          //Solution 1
    //function reverse (str) {
    //.return str.split('')
    //.reverse()
    //.join('');
    //}

// Solution 2
//let reversed = '';

    // For Of Loop \\

//for (let character of str){
//reversed = character + reversed;
//}

//return reversed;