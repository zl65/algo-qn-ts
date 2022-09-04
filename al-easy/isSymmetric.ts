function isSymmetric(root: TreeNode | null): boolean {

  function _isSymmetric(root1: TreeNode | null, root2: TreeNode | null): boolean {
    if (root1 === null && root2 === null) return true
    if (root1 === null || root2 === null) return false
    if (root1.val !== root2.val) return false
    return _isSymmetric(root1.left, root2.right) && _isSymmetric(root1.right, root2.left)
  }

  // 直接传两个root很可以，本来传left和right还多了一步判空
  return _isSymmetric(root, root)
}
