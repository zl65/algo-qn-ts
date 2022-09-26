function postOrder(root: TreeNode | null): number[] {
  const res: number[] = []

  function _postOrder(root: TreeNode | null) {
    if (root === null) return

    _postOrder(root.left)
    _postOrder(root.right)
    res.push(root.val)
  }

  _postOrder(root)
  return res
}

function postOrder2(root: TreeNode | null): number[] {
  let stack: TreeNode[] = []
  let result: number[] = []
  let visited = new TreeNode(-1)
  function pushLeftBranch2(node: TreeNode | null) {
    while (node !== null) {
      stack.push(node)
      node = node.left
    }
  }
  function _traversal2(node: TreeNode | null) {
    pushLeftBranch2(node)
    while (stack.length > 0) {
      let p = stack[stack.length - 1]
      if ((p.left === null || p.left === visited) && p.right !== visited) {
        pushLeftBranch2(p.right)
      }
      if (p.right === null || p.right === visited) {
        result.push(p.val)
        visited = stack.pop()!
      }
    }
  }
  _traversal2(root)
  return result
}
