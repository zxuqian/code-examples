// binary search algorithms
function binarySearch(arr, value) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== value && start <= end) {
    if (value < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === value ? middle : -1;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(binarySearch(arr, 7));
console.log(binarySearch(arr, 10));
