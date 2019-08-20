// Logarithmic time = O(log(n))
//To get a sense of the questions we're interested in when dealing with analyzing algorithms, let's look at a concrete example. 
//The following function is meant to sum (that is, add together) all the values in an array of numbers:

// Example: if myLogRunTimeAlgo takes 1 second to complete with an input of size 10, 
  //when we increase our input by 10x to 100, the running time only grows to 2 seconds. 
    //When we increase the input size to 1000, the time only grows to 3 seconds.
      //It is also characteristic of logarithmic algorithms that they cut the problem size in half each round through.

function howManyLessThanNitems(arr, n) {
  let ticks = 0;
  // If the 1st element in the array is greater than `n` return 0
    //because no items in the array are less than `n`

  if (!arr.length || arr[0] >= n) {
    ticks++;
    return 0;
  }
  let lowIndex = 0, highIndex = arr.length;
    ticks++;

    while (highIndex > lowIndex){
      // Find midpoint
        let midIndex = Math.floor((highIndex + lowIndex) / 2);
        ticks++
        /*If `midIndex` element is greater than `n`, that means all elements
        //to the right of `midIndex` are also greater than `n`, so
        //we only need to focus on elements to the left of `midIndex`.
        //We set `highIndex` to the current value of `midIndex` so next time
        through the loop, we'll only look at the left half */
        if (arr [midIndex] >= n){
          highIndex = midIndex;
            ticks++;
        }

        else if (arr [midIndex + 1] < n){
          highIndex = midIndex;
            ticks++;
        }
        /* Otherwise, if the element to the right of `midIndex` is greater
          than or equal to `n`, we know that the item at `midIndex` is the last
          item that's less than `n`, so we return `midIndex +  1` to get the total
          number of items that are less than `n` */
      else {
        ticks++;
        return {
        result:midIndex + 1,
        ticks: ticks
        }
      } 
    }
}

howManyLessThanNitems([1,2,3], 2)
howManyLessThanNitems([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 
  31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 
  91, 92, 93, 94, 95, 96, 97, 98, 99, 100], 99 );


  //Output
  console.log(howManyLessThanNitems([1,2,3], 2));

  console.log(howManyLessThanNitems([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 
    61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 
    91, 92, 93, 94, 95, 96, 97, 98, 99, 100], 99 ));