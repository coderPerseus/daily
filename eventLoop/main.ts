const fn = () => console.log(1);

Promise.resolve().then(fn);

setTimeout(() => console.log(3), 0);

console.log(5);

// 5 1 3
