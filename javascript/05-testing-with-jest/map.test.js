const map = require("./map");

describe("测试 map 回调函数执行情况", () => {
  test("map [1, 2, 3]，回调函数执行 3 次", () => {
    const mockFn = jest.fn((x) => x * 2);
    map([1, 2, 3], mockFn);
    expect(mockFn.mock.calls.length).toBe(3);
  });

  test("map [1, 2, 3]，回调函数返回 2, 4, 6", () => {
    const mockFn = jest.fn((x) => x * 2);
    map([1, 2, 3], mockFn);
    expect(mockFn.mock.results[0].value).toBe(2);
    expect(mockFn.mock.results[1].value).toBe(4);
    expect(mockFn.mock.results[2].value).toBe(6);
  });
});
