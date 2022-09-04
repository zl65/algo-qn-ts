function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  return build(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1)
}

function build(
  preorder: number[],
  preStart: number,
  preEnd: number,
  inorder: number[],
  inStart: number,
  inEnd: number
): TreeNode | null {
  if (preStart > preEnd) {
    return null
  }
  let rootInorderIndex = 0
  const root = preorder[preStart]
  for (let i = inStart; i <= inEnd; i++) {
    if (inorder[i] === root) {
      rootInorderIndex = i
      break
    }
  }
  const leftSize = rootInorderIndex - inStart
  let rootNode = new TreeNode(root)

  rootNode.left = build(
    preorder,
    preStart + 1,
    preStart + leftSize,
    inorder,
    inStart,
    rootInorderIndex - 1
  )
  rootNode.right = build(
    preorder,
    preStart + 1 + leftSize,
    preEnd,
    inorder,
    rootInorderIndex + 1,
    inEnd
  )
  return rootNode
}
