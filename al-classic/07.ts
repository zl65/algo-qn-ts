function buildTree2(preorder: number[], inorder: number[]): TreeNode | null {
  function build(
    preStart: number,
    preEnd: number,
    inStart: number,
    inEnd: number
  ): TreeNode | null {
    if (preEnd < preStart) return null

    const rootVal = preorder[preStart]
    const rootNode = new TreeNode(rootVal)

    const rootIndex = inorder.indexOf(rootVal)
    const leftSize = rootIndex - inStart

    rootNode.left = build(
      preStart + 1,
      preStart + 1 + leftSize - 1,
      inStart,
      inStart + leftSize - 1
    )
    rootNode.right = build(
      preStart + leftSize + 1,
      preEnd,
      rootIndex + 1,
      inEnd
    )

    return rootNode
  }
  return build(0, preorder.length - 1, 0, inorder.length - 1)
}
