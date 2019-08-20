//What is the Big O of the following algorithm? Explain your answer

function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

/*Answer: O(1) 
No matter how large the array it will only take one pass to find a random item from the list
*/