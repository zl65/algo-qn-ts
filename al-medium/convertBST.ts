function convertBST(root: TreeNode | null): TreeNode | null {
  let currSum = 0
  function dfs(root: TreeNode | null) {
    if (root === null) return
    dfs(root.right)
    currSum = currSum + root.val
    root.val = currSum
    dfs(root.left)
  }
  dfs(root)
  return root
}
