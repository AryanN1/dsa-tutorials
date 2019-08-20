//What is the Big O of the following algorithm? Explain your answer

//Code:
function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}

/*Answer: O(n^2) 
it has two loops which increases the time exponentially
*/