//思路上的关键点是在递归函数里传入参数，实现对子树的约束
//想的时候从一个节点的角度考虑，它的最大最小值是谁
function isValidBST(root: TreeNode | null): boolean {
  return isValid(root, null, null)

  function isValid(root: TreeNode | null, min: TreeNode | null, max: TreeNode | null): boolean {
    if (root === null) return true
    if (min !== null && root.val <= min.val) return false
    if (max !== null && root.val >= max.val) return false
    // min和max是要传下去的
    return isValid(root.left, min, root) && isValid(root.right, root, max)
  }
}
