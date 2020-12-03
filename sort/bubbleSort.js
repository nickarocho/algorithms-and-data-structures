// naive solution, very inefficient, but it works
// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       for (let j = 0; j < arr.length; j++) {
//         if (arr[j] > arr[j + 1]) {
//           // SWAP!
//           const temp = arr[j + 1];
//           arr[j + 1] = arr[j]
//           arr[j] = temp;
//         }
//       }
//   }
// }

// // best solution, using a flag to break the loop when no swaps are made once
// function bubbleSort(arr) {
//   // use a nested loop to compare every item... not ideal (O(n^2)), but it works
//   // start at the END, since after every pass the last item will be the biggest
//   for (let i = arr.length; i > 0; i--) {
//     for (let j = 0; j < i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         // SWAP!
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
//   return arr;
// }

// better solution, but still has inefficiencies when array starts as nearly sorted
function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

bubbleSort([1, 5, 2, 6, 8, 3, 9, 11, 32, 27, 98, 56, 34, 69, 101, 17]);
