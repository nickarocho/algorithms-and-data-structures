function pivot(arr, start = 0, end = arr.length - 1) {
  function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  // We are assuming the pivot is always the first element
  const pivotPoint = arr[start];
  let swapIdx = start;

  // don't need to compare it against itself, so we start one after the start
  for (let i = start + 1; i < arr.length; i++) {
    if (pivotPoint > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // finally, swap the pivotPoint from start into the correct swap idx
  swap(arr, start, swapIdx);
  return swapIdx;
}

// Best case - O(n log n)
// Worst case - O(n^2) - i.e. when data is already sorted or close to sorted
function quickSort(arr, left = 0, right = arr.length - 1) {
  // run recursively until the sub arrs (pointers) are 1 element long
  if (left < right) {
    const pivotIndex = pivot(arr, left, right);
    // left
    quickSort(arr, left, pivotIndex - 1);
    // right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

quickSort([4, 6, 9, 1, 7, 2, 5, 3, 8]);
