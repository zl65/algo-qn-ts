function pathSum(root: TreeNode | null, target: number): number[][] {
  const res: number[][] = []
  const path: number[] = []
  function dfs(root: TreeNode | null, target: number) {
    if (root === null) return
    path.push(root.val)
    target -= root.val
    // 关键是做完选择再去判断是否到达终止条件
    // 而不是在一开始做
    if (root.left === null && root.right === null && target === 0) {
      res.push(path.concat())
    }
    dfs(root.left, target)
    dfs(root.right, target)
    target += root!.val
    path.pop()
  }

  dfs(root, target)
  return res
}
