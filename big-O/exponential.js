/* Algorithms with exponential time complexity (O(2^n)) have running times that grow rapidly with any increase in input size. 
For an input of size 2, an exponential time algorithm will take 2^2 = 4 time. 
With an input of size 10, the same algorithm will take 2^10 = 1024 time, 
and with an input of size 100, it will take 2^100 = 1.26765060022823 * 1030 time */

function countTriangle(layers) {
  let ticks = 1;
  let count = 0; //Number of dots we counted so far
  let layer = 0;  //Current Layer
  let lastLayer = 1; // Number of dots we counted so in the current layer
  while (layer < layers ){
    ticks++;
    let newLayer = 0; // Number of dots we  counted in the current layer
    for (let i = 0; i < lastLayer; i++) {
      ticks++;
        newLayer += 2;
    }x
    lastLayer = newLayer;
    count += lastLayer;
    layer++;
  }
  return {
    result: count,
    ticks, ticks
  };
}

countTriangle(2);
countTriangle(4);
countTriangle(16);

//OutPut

console.log(countTriangle(2));
console.log(countTriangle(4));
console.log(countTriangle(16));
