class Node2 {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  next: TreeNode | null
  constructor(
    val?: number,
    left?: TreeNode,
    right?: TreeNode,
    next?: TreeNode
  ) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
    this.next = next === undefined ? null : next
  }
}

function connect(root: Node2 | null): Node2 | null {
  if (root === null) return null

  const q = [root]

  while (q.length > 0) {
    const levelRes = []
    const size = q.length
    for (let i = 0; i < size; i++) {
      const node = q.shift()
      if (i < size - 1) {
        node!.next = q[0]
      }
      levelRes.push(node!.val)

      if (node!.left !== null) {
        // TODO
        // q.push(node!.left)
      }
      if (node!.right !== null) {
        // TODO
        // q.push(node!.right)
      }
    }
  }
  return root
}
