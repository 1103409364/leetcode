
// 二叉树节点
class Node {
  constructor(val) {
    this.val = val;
    this.left = this.right = undefined;
  }
}

// 二叉树
class Tree {
  constructor(data) {
    // 临时数组方便寻找父子节点
    let nodeList = [];
    // 根节点
    let root;
    for (let i = 0, len = data.length; i < len; i++) {
      let node = new Node(data[i]);
      nodeList.push(node);
      if (i > 0) {
        // 计算当前节点属于那一层
        let n = Math.floor(Math.sqrt(i + 1));
        // 记录当前层的起始点（在数组中的索引）
        let q = Math.pow(2, n) - 1;
        // 上一层的起始点（索引）
        let p = Math.pow(2, n - 1) - 1;
        // 找当前节点的父节点（索引）上层节点数是这一层节点数的一半 /2。
        let parent = nodeList[p + Math.floor((i - q) / 2)];
        // 从下往上找
        // 将当前节点和上一层的父节点关联父节点的子节点不是左节点就是右节点。先看看有没有左节点
        if (parent.left) {
          parent.right = node;
        } else {
          parent.left = node;
        }
      }
    }
    root = nodeList.shift();
    // 清空临时数组
    nodeList.length = 0;
    // 返回根节点
    return root;
  }
}

// console.log(new Tree([1, 2, 2, 3, 4, 4, 3]));
// 二叉树结构
// Node {
//   val: 1,
//     right:
//   Node {
//     val: 2,
//       right: Node { val: 3, right: undefined, left: undefined },
//     left: Node { val: 4, right: undefined, left: undefined }
//   },
//   left:
//   Node {
//     val: 2,
//       right: Node { val: 4, right: undefined, left: undefined },
//     left: Node { val: 3, right: undefined, left: undefined }
//   }
// }


/**
 * 验证对称二叉树
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = (root) => {
  // 空的
  if (!root) {
    return true;
  }

  // 递归验证 left左边的对称节点 right右边的对称节点
  let walk = (left, right) => {
    // 边界，没有左节点也没有右节点
    if (!left && !right) {
      return true;
    }
    // 只有一边或者左对称点的值不等于右对称点的值，说明不对称
    if ((left && !right) || (!left && right) || (left.val !== right.val)) {
      return false;
    }
    return walk(left.left, right.right) && walk(left.right, right.left);
  };
  return walk(root.left, root.right);
};

/**
 * 二叉搜索树
 * @param {TreeNode} root
 * @return {boolean}
 */
// root依然为根节点,二叉树结构已生成
const isValidBST = root => {
  // 用来记录当前最大值
  let max = -Infinity;
  // map函数用来查看当前节点是否符合二叉搜索树结构
  // @param{Object} 节点    
  let map = node => {
    // 若结点为空, 返回true
    if (!node) {
      return true;
    }
    // 若有左节点 先递归左结点 left记录当前节点左子树是否符合二叉搜索树结构
    let l = map(node.left);
    // 判断当前节点值是否大于max
    if (node.val > max) {
      max = node.val;
    } else {
      return false;
    }
    // 左子树递归完成且当前节点也递归完成后 递归右子树
    let r = map(node.right);
    // 左右子树都满足条件 返回true
    return l && r;
  };
  // 初始传入根节点
  return map(root);
};

export {
  Tree,
  isSymmetric,
  isValidBST
};


