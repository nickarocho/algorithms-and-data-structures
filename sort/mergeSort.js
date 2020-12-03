/* eslint-disable no-plusplus */

function merge(arr1, arr2) {
  const results = [];
  // first, make some pointers to the beginning of each arr
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  // one of the arrs hit the end, so take the rest of the
  // remaining array (don't know which, so we gotta loop through both)
  // and add it to the end of the results
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

// pretty good - O(n log n)
// why O(n log n)?
// - because the amount of splits in the mergeSort() fn is O(log n), but the amount of
// comparisons we make in the merge() fn is O(n)
function mergeSort(arr) {
  // 1. break the array into halves until you have arrays that are empty or have only 1 element
  // - use arr.slice(0 - theMiddleOfTheArray), arr.slice(theMiddleOfTheArray, endOfTheArray)
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  // 2. call mergeSort() recursively until the arrays length is <= 1;
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  // 3. merge those array back using the merge fn we already wrote (above), until we are back at the full length of the array
  // 4. return the merged array
  return merge(left, right);
}

mergeSort([10, 24, 76, 73, 72, 1, 9]);
