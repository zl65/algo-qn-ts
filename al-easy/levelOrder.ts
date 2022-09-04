function levelOrder(root: TreeNode | null): number[][] {
  if (root === null) return []
  let res: number[][] = []
  let q = [root]
  while (q.length > 0) {
    let levelRes: number[] = []
    // 遍历的次数在每一层保持不变
    const length = q.length
    for (let i = 0; i < length; i++) {
      const node = q.shift()
      levelRes.push(node!.val)
      if (node!.left !== null) {
        q.push(node!.left)
      }
      if (node!.right !== null) {
        q.push(node!.right)
      }
    }
    res.push(levelRes)
  }
  return res
}

// 也可以在写带参数的递归
