// Given an array of integers of size 5, calculate the maximum sum of 3 consecutive elements in the array.
function slidingWindow(arr, windowSize) {
  if (arr.length < windowSize) {
    return null;
  }

  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < windowSize; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;
  for (let i = windowSize; i < arr.length; i++) {
    tempSum = tempSum - arr[i - windowSize] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

console.log(slidingWindow([3, 2, -4, 6, 1], 3));

function burteForce(arr, windowSize) {
  if (arr.length < windowSize) {
    return null;
  }

  let maxSum = 0;
  for (let i = 0; i < arr.length - windowSize + 1; i++) {
    let tempSum = 0;
    for (let j = 0; j < windowSize; j++) {
      tempSum += arr[i + j];
    }
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}
