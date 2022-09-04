function kthSmallest(root: TreeNode | null, k: number): number {
  // 这里并不用一个数组，只要一个count就能知道当前遍历到第几个了
  let count = 0
  let res = -1
  function dfs(root: TreeNode | null) {
    if (root === null) return
    dfs(root.left)
    count++
    if (count === k) {
      res = root.val
      return
    }
    dfs(root.right)
  }
  dfs(root)

  return res
}
