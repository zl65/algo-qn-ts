function isSubStructure(A: TreeNode | null, B: TreeNode | null): boolean {
  function dfs(A: TreeNode | null, B: TreeNode | null): boolean {
    if (B === null) return true
    if (A === null || A.val !== B.val) return false
    return dfs(A.left, B.left) && dfs(A.right, B.right)
  }

  function bfs(A: TreeNode | null, B: TreeNode | null): boolean {
    const qa: (TreeNode | null)[] = [A]
    const qb: (TreeNode | null)[] = [B]

    while (qb.length > 0) {
      const size = qb.length
      for (let i = 0; i < size; i++) {
        const rootB = qb.shift()
        const rootA = qa.shift()
        if (rootA === null && rootB === null) {
          continue
        } else if (rootA && rootB && rootA.val === rootB.val) {
          qa.push(rootA.left)
          qb.push(rootB.left)
          qa.push(rootA.right)
          qb.push(rootB.right)
        } else {
          return false
        }
      }
    }
    return true
  }

  function _isSubStructure(A: TreeNode | null, B: TreeNode | null): boolean {
    if (A === null || B === null) return false
    return (
      dfs(A, B) || _isSubStructure(A.left, B) || _isSubStructure(A.right, B)
    )
  }
  return _isSubStructure(A, B)
}
