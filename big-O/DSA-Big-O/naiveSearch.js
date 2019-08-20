//What is the Big O of the following algorithm? Explain your answer

  //Code:
  function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}
/*Answer: O(n) 
In a worst case situation the function would have to iterate through the entire array once to find the correct item.
 */