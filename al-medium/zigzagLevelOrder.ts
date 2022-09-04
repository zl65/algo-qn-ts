function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (root === null) return []

  const res = []
  const q = [root]
  let LTR = true // 从右往左

  while (q.length > 0) {
    const levelRes = []
    const size = q.length
    for (let i = 0; i < size; i++) {
      const node = q.shift()

      // 只需要在生成每一层结果的时候改变顺序，并不用改变入队列和出队列的顺序
      if (LTR) {
        levelRes.push(node!.val)
      } else {
        levelRes.unshift(node!.val)
      }

      if (node!.left !== null) {
        q.push(node!.left)
      }
      if (node!.right !== null) {
        q.push(node!.right)
      }
    }
    res.push(levelRes)
    LTR = !LTR
  }
  return res
}
