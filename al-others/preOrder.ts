function preOrder(root: TreeNode | null): number[] {
  const res: number[] = []
  function _preOrder(root: TreeNode | null) {
    if (root === null) return
    res.push(root.val)
    _preOrder(root.left)
    _preOrder(root.right)
  }
  _preOrder(root)
  return res
}

function preOrder2(root: TreeNode | null): number[] {
  if (root === null) return []
  const res: number[] = []
  const stack: TreeNode[] = [root]
  while (stack.length > 0) {
    const node = stack.pop()
    res.push(node!.val)

    if (node?.right !== null) stack.push(node?.right!)
    if (node?.left !== null) stack.push(node?.left!)
  }
  return res
}
