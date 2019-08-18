//Check to see if two provided strings are anagrams of each other 
//Write a function that creates an anagram list, 
//listing all the rearrangements of a given word

// Examples
  //anagrams('rail safety', 'fairy tale') -> true
  //anagrams('RAIL! SAFETY!', 'fairy tale') -> true
  //anagrams('Hi there', 'Bye there') -> false

  function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
  }

  function cleanString(str){
    return str
    .replace(/[^\w]/g, '')
    .toLowercase()
    .split('')
    .sort()
    .join('');
  }

  module.exports = anagrams;

            // Solution 1 \\
    //function anagrams(stringA, stringB) {
    // const aCharMap = buildCharMap(stringA);
    // const bCharMap = buildCharMap(stringB);
    //
    //   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    //     return false;
    //   }
    //
    //   for (let char in aCharMap) {
    //     if (aCharMap[char] !== bCharMap[char]) {
    //       return false;
    //     }
    //   }
    //
    //   return true;
    // }
    
            // Solution 2
    // function buildCharMap(str) {
    //   const charMap = {};
    //
    //   for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    //     charMap[char] = charMap[char] + 1 || 1;
    //   }
    //
    //   return charMap;
    // }