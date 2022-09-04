function preorderTraversal(root: TreeNode | null): number[] {
  let res: number[] = []

  function traverse(root: TreeNode | null) {
    if (root === null) return
    res.push(root.val)
    traverse(root.left)
    traverse(root.right)
  }

  traverse(root)
  return res
}

function inorderTraversal(root: TreeNode | null): number[] {
  let res: number[] = []

  function traverse(root: TreeNode | null) {
    if (root === null) return
    traverse(root.left)
    res.push(root.val)
    traverse(root.right)
  }

  traverse(root)
  return res
}


function postorderTraversal(root: TreeNode | null): number[] {
  let res: number[] = []

  function traverse(root: TreeNode | null) {
    if (root === null) return
    traverse(root.left)
    traverse(root.right)
    res.push(root.val)
  }

  traverse(root)
  return res
}
