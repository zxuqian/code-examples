// bubble sort algorithm
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    console.log(i);
  }
  return arr;
}

// 优化，在没有发生交换的时候，停止循环
function bubbleSort(arr) {
  let swapped;
  for (let i = 0; i < arr.length; i++) {
    swapped = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    console.log(i);
    if (!swapped) break;
  }
  return arr;
}

let arr = [3, 1, 5, 9, 6, 2];

console.log(bubbleSort(arr));
