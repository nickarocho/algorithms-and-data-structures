/* eslint-disable no-plusplus */

// loops through both inputs, and compares the values of the indeces
// O(n^2)... not good, but it works

function naiveSearch(long, short) {
  // init a counter
  let count = 0;
  // loop through the long input
  for (let i = 0; i < long.length; i++) {
    // loop through the shorter input
    for (let j = 0; j < short.length; j++) {
      // check if each letter matches - keep looping if so
      // ... break out of the inner loop if not
      if (short[j] !== long[i + j]) break;
      // if ALL letters match, increment the counter and move on
      if (j === short.length - 1) count++;
    }
  }
  return count;
}

naiveSearch('lori loled hahaha lollll', 'lol');
