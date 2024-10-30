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
];

const dl1 = function (arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
        j--;
      }
    }
  }
};
dl1(arr1);
console.log(arr1);
