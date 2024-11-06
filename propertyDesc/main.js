const obj = {
  key: "value",
};
console.log(obj);

Object.defineProperty(obj, "key", {
  value: "new value",
  writable: false,
  enumerable: true, // 如果是 false ，打印 obj 就不会打印出这个 key
  configurable: false,
});

obj.key = "new new value"; // 这里不合理，应该报错

console.log(obj);
