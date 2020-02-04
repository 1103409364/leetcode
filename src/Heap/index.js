export class Heap {
  constructor(data) {
    this.data = data;
  }
  // ③
  // 给定 n 个节点，进行堆排序
  sort() {
    let iArr = this.data;
    let n = iArr.length;
    if (n <= 1) {
      return iArr;
    } else {
      for (let i = Math.floor(n / 2); i >= 0; i--) {
        Heap.maxHeapify(iArr, i, n);
      }
      // 构建一次找到一个最大值，n 个节点构建 n 次。
      for (let j = 0; j < n; j++) {
        // 第一个节点和最后一个节点交换。最后 j 个元素已经排序好了。
        Heap.swap(iArr, 0, n - 1 - j);
        // 交换后，最顶点的最大堆肯定被破坏了。从最顶点开始递归构建最大堆。
        Heap.maxHeapify(iArr, 0, n - 1 - j);
      }
      // console.log(iArr);
      return iArr;
    }
  }
  // ①
  // 交换两个元素。 a, b 数组索引
  static swap(arr, a, b) {
    if (a === b) return '';
    // let tmp = arr[a];
    // arr[a] = arr[b];
    // arr[b] = tmp;
    [arr[a], arr[b]] = [arr[b], arr[a]];
  }
  // ②
  // 给定一个节点（最后一个父节点），构建最大堆
  // i 父节点索引，size 数组有效长度。每次构建一次交换最大值和最后一个值。有效长度 -1。
  static maxHeapify(arr, i, size) {
    // console.log(arr, i, size);
    // 左右节点 索引
    let l = i * 2 + 1;
    let r = i * 2 + 2;
    let largest = i;
    // 两两比较找三个节点中的最大值的索引：父节点 左子节点 右子节点。size 后面已经排好的不要动
    if (l < size && arr[l] > arr[largest]) {
      largest = l;
    }
    if (r < size && arr[r] > arr[largest]) {
      largest = r;
    }
    // 找到之后交换
    if (largest !== i) {
      Heap.swap(arr, i, largest);
      // 交换完了可能会影响子树，导致子树不满足最大堆，递归构建。
      // 此时还没有构建完成，size 不用 -1。largest 指向被交换了值的节点
      Heap.maxHeapify(arr, largest, size);
    }
  }
}
// 改造 Heap 用于解题：根据字符出现频率排序
export class Heap2 {
  constructor(str) {
    // map 和使用 object 差不多。map 多一些方法
    let map = new Map();
    // 统计出现次数
    str.split('').forEach(item => {
      if (map.has(item)) {
        map.set(item, map.get(item) + 1);
      } else {
        map.set(item, 1);
      }
    });
    this.map = map;
    this.data = Array.from(map.values());
  }
  toString() {
    let arr = this.sort();
    let str = [];
    while (arr.length) {
      let top = arr.pop();
      // 遍历 map 输出
      for (let [k, v] of this.map) {
        if (v === top) {
          str.push(k.repeat(v));
          this.map.delete(k);
          break;
        }
      }
    }
    return str.join('');
  }
  // ③
  // 给定 n 个节点，进行堆排序
  sort() {
    let iArr = this.data;
    let n = iArr.length;
    if (n <= 1) {
      return iArr;
    } else {
      for (let i = Math.floor(n / 2); i >= 0; i--) {
        Heap.maxHeapify(iArr, i, n);
      }
      // 构建一次找到一个最大值，n 个节点构建 n 次。
      for (let j = 0; j < n; j++) {
        // 第一个节点和最后一个节点交换。最后 j 个元素已经排序好了。
        Heap.swap(iArr, 0, n - 1 - j);
        // 交换后，最顶点的最大堆肯定被破坏了。从最顶点开始递归构建最大堆。
        Heap.maxHeapify(iArr, 0, n - 1 - j);
      }
      // console.log(iArr);
      return iArr;
    }
  }

  // ①
  // 交换两个元素。 a, b 数组索引
  static swap(arr, a, b) {
    if (a === b) return '';
    [arr[a], arr[b]] = [arr[b], arr[a]];
  }
  // ②
  // 给定一个节点（最后一个父节点），构建最大堆
  // i 父节点索引，size 数组有效长度。每次构建一次交换最大值和最后一个值。有效长度 -1。
  static maxHeapify(arr, i, size) {
    // console.log(arr, i, size);
    // 左右节点 索引
    let l = i * 2 + 1;
    let r = i * 2 + 2;
    let largest = i;
    // 两两比较找三个节点中的最大值的索引：父节点 左子节点 右子节点。size 后面已经排好的不要动
    if (l < size && arr[l] > arr[largest]) {
      largest = l;
    }
    if (r < size && arr[r] > arr[largest]) {
      largest = r;
    }
    // 找到之后交换
    if (largest !== i) {
      Heap.swap(arr, i, largest);
      // 交换完了可能会影响子树，导致子树不满足最大堆，递归构建。
      // 此时还没有构建完成，size 不用 -1。largest 指向被交换了值的节点
      Heap.maxHeapify(arr, largest, size);
    }
  }
}
// 超级丑数
export class SuperUgly {
  constructor(n, primes) {
    // 第 n 个
    this.n = n;
    this.primes = primes;
  }
  // 算超级丑数
  getAll() {
    // 超级丑数列表
    let res = [1];
    let i = 2;
    let primes = this.primes;
    // 找第 n 个
    while (res.length < this.n) {
      let arr = SuperUgly.getPrimes(i);
      // 质因数列表长度
      let l = arr.length;
      let k = 0;
      for (; k < l; k++) {
        if (!primes.find(item => item === arr[k])) {
          break;
        }
      }
      // k === l 两种情况：1 当前这个数没有质因数，
      if (k === l) {
        // 没找到质因数，本身是质因数
        if (l === 0) {
          if (primes.find(item => item === i)) {
            res.push(i);
          }
        }
        // 2 所有质因数都在指定列表中
        else {
          res.push(i);
        }
      }
      i++;
    }
    return res[this.n - 1];
  }
  // 计算 n 的质因数列表
  static getPrimes(n) {
    let prime = n => {
      // 储存所有质因数
      let arr = [];
      for (let i = 2; i < n / 2 + 1; i++) {
        if (n % i === 0 && !prime(i).length) {
          arr.push(i);
        }
      }
      return arr;
    };
    return prime(n);
  }
}

// 超级丑数 堆解法
export class Heap3 {
  constructor(arr) {
    this.data = arr;
    this.max = arr.length;
    this.sort();
  }
  // ③
  // 给定 n 个节点，进行堆排序
  sort() {
    let iArr = this.data;
    let n = iArr.length;
    if (n <= 1) {
      return iArr;
    } else {
      for (let i = Math.floor(n / 2); i >= 0; i--) {
        Heap.maxHeapify(iArr, i, n);
      }
      // 找丑数只要构建一次最大堆

      // // 构建一次找到一个最大值，n 个节点构建 n 次。
      // for (let j = 0; j < n; j++) {
      //   // 第一个节点和最后一个节点交换。最后 j 个元素已经排序好了。
      //   Heap.swap(iArr, 0, n - 1 - j);
      //   // 交换后，最顶点的最大堆肯定被破坏了。从最顶点开始递归构建最大堆。
      //   Heap.maxHeapify(iArr, 0, n - 1 - j);
      // }
      // console.log(iArr);
      return iArr;
    }
  }
  // 最大堆查找
  find(val, i = 0) {
    let arr = this.data;
    //  i = 0 最大
    if (val > arr[i] || i > this.max) {
      return false;
    } else if (val === arr[i]) {
      return val;
    } else {
      return this.find(val, i * 2 + 1) || this.find(val, i * 2 + 2);
    }
  }
  // ①
  // 交换两个元素。 a, b 数组索引
  static swap(arr, a, b) {
    if (a === b) return '';
    [arr[a], arr[b]] = [arr[b], arr[a]];
  }
  // ②
  // 给定一个节点（最后一个父节点），构建最大堆
  // i 父节点索引，size 数组有效长度。每次构建一次交换最大值和最后一个值。有效长度 -1。
  static maxHeapify(arr, i, size) {
    // console.log(arr, i, size);
    // 左右节点 索引
    let l = i * 2 + 1;
    let r = i * 2 + 2;
    let largest = i;
    // 两两比较找三个节点中的最大值的索引：父节点 左子节点 右子节点。size 后面已经排好的不要动
    if (l < size && arr[l] > arr[largest]) {
      largest = l;
    }
    if (r < size && arr[r] > arr[largest]) {
      largest = r;
    }
    // 找到之后交换
    if (largest !== i) {
      Heap.swap(arr, i, largest);
      // 交换完了可能会影响子树，导致子树不满足最大堆，递归构建。
      // 此时还没有构建完成，size 不用 -1。largest 指向被交换了值的节点
      Heap.maxHeapify(arr, largest, size);
    }
  }
}

export class SuperUgly2 {
  constructor(n, primes) {
    this.n = n;
    this.primes = new Heap3(primes);
  }
  // 算超级丑数
  getAll() {
    // 超级丑数列表
    let res = [1];
    let i = 2;
    let primes = this.primes;
    // 找第 n 个
    while (res.length < this.n) {
      let arr = SuperUgly.getPrimes(i);
      // 质因数列表长度
      let l = arr.length;
      let k = 0;
      for (; k < l; k++) {
        // primes 是堆由 find 方法
        if (!primes.find(arr[k])) {
          break;
        }
      }
      // k === l 两种情况：1 当前这个数没有质因数，
      if (k === l) {
        // 没找到质因数，本身是质因数
        if (l === 0) {
          if (primes.find(i)) {
            res.push(i);
          }
        }
        // 2 所有质因数都在指定列表中
        else {
          res.push(i);
        }
      }
      i++;
    }
    return res[this.n - 1];
  }
  // 计算 n 的质因数列表
  static getPrimes(n) {
    let prime = n => {
      // 储存所有质因数
      let arr = [];
      for (let i = 2; i < n / 2 + 1; i++) {
        if (n % i === 0 && !prime(i).length) {
          arr.push(i);
        }
      }
      return arr;
    };
    return prime(n);
  }
}