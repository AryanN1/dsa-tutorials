//What is the Big O of the following algorithm? Explain your answer
  
//Code:
  function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}
/*Answer: O(n) 
The time it takes to complete the function is directly perportinal to the input. 
*/