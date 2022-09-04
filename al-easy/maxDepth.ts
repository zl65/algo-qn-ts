// function maxDepth(root: TreeNode | null): number {
//   let res = 0
//   if (root === null) return res
//   res = Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
//   return res
// }


function maxDepth(root: TreeNode | null): number {
  let res = 0
  let depth = 0

  function traverse(root: TreeNode | null) {
    if (root === null) return
    depth++
    // 关键是更新时机，回溯算法的核心
    if (root.left === null && root.right === null) {
      res = Math.max(res, depth)
    }
    traverse(root.left)
    traverse(root.right)
    depth--
  }

  traverse(root)
  return res
}
