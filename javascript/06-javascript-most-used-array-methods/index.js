let arr = [1, 2, 3, 4, 5, 6];

// push
console.log("push =====================");
arr.push(7); // push one element
console.log(arr);
arr.push(8, 9, 10); // push multiple elements
console.log(arr);
arr.push([11, 12]); // this pushes entire array, not individual elements
console.log(arr);

arr = [1, 2, 3, 4, 5, 6];
// forEach
console.log("forEach =====================");
arr.forEach((item, index, arr) => {
  // item: current looping item, index: current looping item index, arr: array itself
  console.log(item, index, arr);
});

// map
console.log("map =====================");
const newArr = arr.map((item, index, arr) => {
  return item * index;
});
console.log(newArr);

// filter
console.log("filter =====================");
const filteredArr = arr.filter((item, index, arr) => {
  return item % 2 === 0;
});
console.log(filteredArr);

// findIndex
console.log("findIndex =====================");
const index = arr.findIndex((item, index, arr) => {
  return item === 5;
});
console.log(index);

// splice
console.log("splice =====================");
arr.splice(0, 2); // remove first two elements
console.log(arr);
arr.splice(2, 0, 7, 8); // add 7 and 8 at index 2
console.log(arr);
