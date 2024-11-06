// 实现属性不可更改，更改就报错
var obj = {};

Object.defineProperty(obj, "a", {
  get: function () {
    return 123;
  }, // 读取器 getter
  // set: function (val) {
  //   throw new Error(`obj property a is readonly`);
  // }, // 设置器 setter
});

console.log(obj.a);
obj.a = "abx";
console.log(obj.a); // console.log(get())
