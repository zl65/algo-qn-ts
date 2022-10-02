class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null

  constructor(val: number, left: TreeNode, right: TreeNode) {
    this.val = val
    this.left = left
    this.right = right
  }
}

function solution(root: TreeNode | null): number[] {
  const res: number[] = []
  preOrder(root)

  function preOrder(root: TreeNode | null) {
    if (root === null) return

    res.push(root.val)
    preOrder(root.left)
    preOrder(root.right)
  }
  return res
}

function solutionUsingWhile(root: TreeNode | null): number[] {
  const res: number[] = []
  if (root === null) return []
  const stack: TreeNode[] = [root]
  while (stack.length >= 0) {
    const node = stack.pop()
    res.push(node!.val)
    stack.push(node!.right!)
    stack.push(node!.left!)
  }
  return res
}

function returnRes(str: string, arr: string[]): boolean {
  let res = false
  test(str, arr)

  function test(str: string, arr: string[]) {
    if (res === true) return
    for (let i = 0; i < arr.length; i++) {
      const length = arr[i].length
      const preStr = str.substring(0, length)
      if (preStr === arr[i]) {
        if (str.length === 0) {
          res = true
        }
        const remainStr = str.substring(length + 1)
        if (test(remainStr, arr)) {
          return true
        }
      }
    }
    res = false
  }
  return res
}
