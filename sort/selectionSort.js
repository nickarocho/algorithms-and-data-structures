// O(n^2) - not very efficient, but poteeennnnntially better than bubble sort
// since we only swap once at the end of the loop

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
  }
  return arr;
}

selectionSort([8, 4, 6, 2, 11, 65, 34, 24, 64, 99, 3]);
