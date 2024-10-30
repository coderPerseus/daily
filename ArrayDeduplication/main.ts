// 示例数组，存储基本类型
const arr1 = [1, 2, 3, 4, 3, 2, 1, 5, 0, 6, 5];
// 存储对象
const arr2 = [
  {
    name: "张三",
    age: 18,
  },
  {
    name: "李四",
    age: 19,
  },
  {
    name: "王五",
    age: 20,
  },
  {
    name: "张三",
    age: 18,
  },
  {
    a: { a: 1, b: 2 },
  },
  {
    a: { b: 2, a: 1 },
  },
];

/** 数组去重 */
const dl1 = function (arr: any[]) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (equal(arr[i], arr[j])) {
        arr.splice(j, 1);
        j--;
      }
    }
  }
};

/**
 * 判断给定的值是否为非空对象
 * @param obj 任意值，用于判断是否为非空对象
 * @returns 如果是非空对象则返回true，否则返回false
 */
function isObject(obj: any) {
  return typeof obj === "object" && obj !== null;
}

/**
 * 比较两个对象是否相等
 * @param value1 第一个对象
 * @param value2 第二个对象
 * @returns 如果两个对象相等，则返回true，否则返回false
 */
function equal(value1, value2) {
  // 只要有一个不是对象，就全等比较
  if (!isObject(value1) || !isObject(value2)) {
    return value1 === value2;
  }
  const keys1 = Object.keys(value1);
  const keys2 = Object.keys(value2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (!equal(value1[key], value2[key])) {
      return false;
    }
  }
  return true;
}

// test
dl1(arr1);
dl1(arr2);
console.log(arr1, arr2);
