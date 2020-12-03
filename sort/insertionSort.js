/* eslint-disable no-var */

// Worst case - O(n^2)
// insertion sort is good for "live" algorithms
// i.e. when data is coming in in real time, since we keep one side of the
// data set sorted at all times, it's easy to place as it comes in
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

insertionSort([5, 2, 17, 90, 77, 43, 22, 11]);
