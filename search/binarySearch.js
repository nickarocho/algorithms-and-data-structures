function binarySearch(sortedArr, num) {
  let middle = Math.floor(sortedArr.length / 2);
  let start = 0;
  let end = sortedArr.length - 1;

  while (sortedArr[middle] !== num && start <= end) {
    if (num > sortedArr[middle]) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
    middle = Math.floor((start + end) / 2);
  }

  return sortedArr[middle] === num ? middle : -1;
}

binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 35);
