// Definition for Node.
class Node2 {
  val: number
  left: Node | null
  right: Node | null
  next: Node | null
  constructor(val?: number, left?: Node, right?: Node, next?: Node) {
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
        node.next = q[0]
      }

      levelRes.push(node!.val)

      if (node!.left !== null) {
        q.push(node!.left)
      }
      if (node!.right !== null) {
        q.push(node!.right)
      }
    }
  }
  return root
}
