function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  let cache = null;

  if (!deepClone.cache) {
    deepClone.cache = new WeakMap();
  }

  cache = deepClone.cache;

  if (cache.has(obj)) {
    return cache.get(obj);
  }

  if (obj instanceof Set) {
    const temp = new Set();
    cache.set(obj, temp);
    obj.forEach((item) => {
      temp.add(deepClone(item));
    });
    return temp;
  } else if (obj instanceof Map) {
    const temp = new Map();
    cache.set(obj, temp);
    obj.forEach((item, key) => {
      temp.set(key, deepClone(item));
    });
    return temp;
  } else if (obj instanceof RegExp) {
    const temp = new RegExp(obj);
    return temp;
  } else {
    const temp = new obj.constructor();
    cache.set(obj, temp);
    for (var key in obj) {
      temp[key] = deepClone(obj[key]);
    }
    return temp;
  }
}

const obj = {
  array: [1, 2, 3],
  object: {
    a: 1,
  },
  func() {
    return 5;
  },
  arrayOfObjs: [{ a: 10 }, { b: 20 }, { c: 30 }],
  date: new Date(),
  set: new Set([1, 2, 3, { a: 10 }]),
  map: new Map([
    ["a", 1],
    ["b", { c: 3 }],
  ]),
  regExp: /[a-z]/,
};

const obj2 = {
  circular: obj,
};

obj.circular = obj2;

const cloned = deepClone(obj);

console.log(obj, cloned);
console.log(cloned === obj);
console.log(cloned.array === obj.array);
console.log(cloned.object === obj.object);

console.log(cloned.arrayOfObjs === obj.arrayOfObjs);
console.log(cloned.arrayOfObjs[0] === obj.arrayOfObjs[0]);

// Set
const it = cloned.set.values();
it.next();
it.next();
it.next();
const cSet = it.next();
// console.log(cSet);

const it2 = obj.set.values();
it2.next();
it2.next();
it2.next();
const oSet = it2.next();
// console.log(oSet);

console.log(cSet.value === oSet.value);
