type Constructor = new (...args: any[]) => any;

function Singleton<T extends Constructor>(className: T) {
  let instance: InstanceType<T>;
  const proxy = new Proxy(className, {
    construct(target, argArray) {
      if (!instance) {
        instance = Reflect.construct(target, argArray);
      }
      return instance;
    },
  });
  proxy.prototype.constructor = proxy;
  return proxy;
}

// 创建一个 class

class ConfigManager {
  constructor() {
    console.log("创建新的 ConfigManager 实例");
  }
}

const SingletonClass = Singleton(ConfigManager);

const a1 = new SingletonClass();
const a2 = new SingletonClass();

console.log(a1 === a2);

export default new SingletonClass();
