//What does the following algorithm do? What is the Big O of the following algorithm? Explain your answer

//Code:
  function isWhat(n) {
    if (n < 2 || n % 1 != 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i == 0) return false;
    }
    return true;
  }

/*Answer: O(n)
It searches for prime numbers. 
It has to go through all numbers until it gets to the input number
*/