// 面试题
// 1，输入：“get1_install2_app3_list4_by5_android6”（每个单词后面总会携带一个数字，只有偶数才删掉），
// 写一个函数实现输出"get1InstallApp3ListBy5Android"。
const formatStr = (str) => {
  return str.split('_').map((item, index) => {
    if (item.substr(-1) % 2 === 0) {
      return item.replace(/\d$/, '');
    }
    return item;
  }).join('');
};

// console.log(formatStr('get1_install2_app3_list4_by5_android6'));
// 2，不使用任何循环控制语句和迭代器的情况下实现一个0到1000的数组赋值。
const fillArr = () => {
  return Object.keys(Array.apply(null, { length: 1000 }));
};

// console.log(fillArr());

// 3，写一个函数能判断两个对象（注意特殊对象）内包含的内容是否一致。
export const isEqual1 = (arg1, arg2) => {
  let result = true;

  function isObj(arg) {
    return arg instanceof Object;
  }

  function equal(arg1, arg2) {
    // console.log(arg1, arg2);
    // 参数中存在非对象，进行!==比较
    if (!isObj(arg1) || !isObj(arg2)) {
      if (arg1 !== arg2) {
        result = false;
        return false;
      }
    }
    // 参数都是对象进行递归
    if (isObj(arg1) && isObj(arg2)) {
      // [1] {0:1} 不一致
      if (Object.prototype.toString.call(arg1) !== Object.prototype.toString.call(arg2)) {
        result = false;
        return false;
      }
      if (Object.keys(arg1).length !== Object.keys(arg2).length) {
        result = false;
        return false;
      }
      for (let i in arg1) {
        // Do not access Object.prototype method 'hasOwnProperty' from target object.eslint(no - prototype - builtins)
        if (Object.prototype.hasOwnProperty.call(arg1, i) && Object.prototype.hasOwnProperty.call(arg2, i)) {
          equal(arg1[i], arg2[i]);
        } else {
          result = false;
          break;
        }
      }
    }
    return result;
  }

  return equal(arg1, arg2);
};
// 若已知两者属性顺序一致且不会发生变化
// const isEqual2 = (obj1, obj2) => {
//   return JSON.stringify(obj1) === JSON.stringify(obj2);
// }



// console.log(isEqualObj([{ a: 1, b: 2 }, { b: 2, a: 1 }], [{ a: 1, b: 2 }, { b: 2, a: 1, c: 1 }]));
// console.log(isEqual1([1, 2, 3], [1, 2, 3]));
// console.log(isEqual2(null, null));
// let obj = { b: 2, a: 1, c: 1, d: 11 }
// for (const key in obj) {
//   if (object.hasOwnProperty(key)) {
//     const element = object[key];

//   }
// }