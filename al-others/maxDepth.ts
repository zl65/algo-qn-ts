function maxDepth(root: TreeNode | null): number {
  let depth = 0

  function dfs(root: TreeNode | null, currDepth: number) {
    if (root === null) return
    currDepth++
    depth = Math.max(depth, currDepth)
    dfs(root.left, currDepth)
    dfs(root.right, currDepth)
  }

  dfs(root, 0)

  return depth
}

function maxDepth2(root: TreeNode | null): number {
  if (root === null) return 0
  return Math.max(maxDepth2(root.left), maxDepth2(root.right)) + 1
}
