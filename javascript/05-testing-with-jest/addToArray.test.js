const addToArray = require("./addToArray");

test("添加 4,5,6 到数组 [1, 2, 3] 中", () => {
  const arr = [1, 2, 3];
  addToArray(arr, 4, 5, 6);
  expect(arr).toEqual([1, 2, 3, 4, 5, 6]);
});
