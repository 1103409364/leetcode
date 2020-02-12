// console.log(formatStr('get1_install2_app3_list4_by5_android6'));
// 2，不使用任何循环控制语句和迭代器的情况下实现一个0到1000的数组赋值。
const fillArr = () => {
  // Array(1000) 是空数组，下面这种会填充 undefined
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

// 请用 javascript 实现一个函数 parseUrl(url) ，将一段 url 字符串解析为 Object。
// parseUrl("http://www.xiyanghui.com/product/list?id=123456&sort=discount#title");
// {
//   protocol: "http",
//     host: "www.xiyanghui.com",
//       path: "/product/list",
//         query: {
//     id: "123456",
//       sort: "discount"
//   },
//   hash: "title"
// }

