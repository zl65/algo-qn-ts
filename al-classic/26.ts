function isSubStructure(A: TreeNode | null, B: TreeNode | null): boolean {
  function _isPartlySame(A: TreeNode, B: TreeNode): boolean {
    const qa = [A]
    const qb = [B]
    while (qb.length > 0) {
      const size = qb.length
      for (let i = 0; i < size; i++) {
        const rootb = qb.shift()
        const roota = qa.shift()
        if (roota && rootb && roota.val === rootb.val) {
          if (
            roota.left !== null &&
            rootb.left !== null &&
            roota.right !== null &&
            rootb.right !== null
          ) {
            qa.push(rootb.left)
            qb.push(rootb.left)
            qa.push(rootb.right)
            qb.push(rootb.right)
          }
        }
        return false
      }
    }
    return true
  }
  function _isSubStructure(A: TreeNode | null, B: TreeNode | null): boolean {
    if (A === null || B === null) return false
    return (
      _isPartlySame(A, B) ||
      _isSubStructure(A?.left!, B) ||
      _isSubStructure(A?.right!, B)
    )
  }
  return _isSubStructure(A, B)
}
