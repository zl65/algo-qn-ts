// 这道题之前做过，但是这次没写出
// 主要原因是已经忘了树的递归，其实最重要的还是回到定义，这个函数的定义是什么
// 其实所有操作都是对于当前节点的，而不是它的子节点

function isValidBST(root: TreeNode | null): boolean {
  function isValid(
    root: TreeNode | null,
    min: TreeNode | null,
    max: TreeNode | null
  ): boolean {
    if (root === null) return true
    if (min !== null && root.val <= min.val) return false
    if (max !== null && root.val >= max.val) return false

    return isValid(root.left, min, root) && isValid(root.right, root, max)
  }

  return isValid(root, null, null)
}

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  function search(root: TreeNode | null, val: number): TreeNode | null {
    if (root === null) return null
    if (root.val === val) {
      return root
    } else if (root.val > val) {
      return search(root.left, val)
    } else {
      return search(root.right, val)
    }
  }
  return search(root, val)
}

function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
  // insert的定义就是给定一个树和一个点，返回一个插入好的树
  function insert(root: TreeNode | null, val: number): TreeNode | null {
    // root是null的时候就表示可以插入了
    if (root === null) return new TreeNode(val)
    if (root.val < val) {
      root.right = insert(root.right, val)
    }
    if (root.val > val) {
      root.left = insert(root.left, val)
    }
    return root
  }
  return insert(root, val)
}

function deleteNode(root: TreeNode | null, val: number): TreeNode | null {
  function getMinNode(root: TreeNode): TreeNode {
    // 结束的时候希望root不是null，那么while的条件用root.left就可以了
    while (root.left !== null) {
      root = root.left
    }
    return root
  }
  function deleteFromBST(root: TreeNode | null, val: number): TreeNode | null {
    if (root === null) return null
    if (root.val === val) {
      if (root.left === null) return root.right
      if (root.right === null) return root.left

      const minNode = getMinNode(root.right)
      root.val = minNode!.val
      // 注意这里，因为要递归下去，所以不用再 return
      root.right = deleteFromBST(root.right, minNode!.val)
    }
    if (root.val > val) {
      root.left = deleteFromBST(root.left, val)
    }
    if (root.val < val) {
      root.right = deleteFromBST(root.right, val)
    }
    return root
  }
  return deleteFromBST(root, val)
}
