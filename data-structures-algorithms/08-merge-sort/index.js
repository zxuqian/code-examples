function merge(left, right) {
  const result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) result.push(left.shift());
  while (right.length) result.push(right.shift());
  return result;
}

function mergeSort(items) {
  if (items.length < 2) {
    return items;
  }
  const middle = Math.floor(items.length / 2);
  const left = items.slice(0, middle);
  const right = items.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

const testArr = [3, 1, 6, 7, 2, 4, 5];
const result = mergeSort(testArr);

console.log(result);
