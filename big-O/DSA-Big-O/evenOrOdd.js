//What is the Big O of the following algorithm? Explain your answer:

//Code:
  function isEven(value) {
    if(value % 2 == 0) {
      return true;
    }
    else
      return false;
}
/*Answer: O(1) 
The function only accepts input of size (1) and its time on directly porpotinal to the value.
 */