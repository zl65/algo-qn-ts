/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function levelOrder(root: TreeNode | null): number[][] {
  if (root === null) return []

  const q = [root]
  const res = []
  let ltr = true
  while (q.length > 0) {
    const levelRes = []
    const size = q.length

    for (let i = 0; i < size; i++) {
      const root = q.shift()
      if (ltr) {
        levelRes.push(root.val)
      } else {
        levelRes.unshift(root.val)
      }

      if (root.left) q.push(root.left)
      if (root.right) q.push(root.right)
    }

    res.push(levelRes)
    ltr = !ltr
  }
  return res
}
