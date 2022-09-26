function verifyPostorder(postorder: number[]): boolean {
  function isBST(start: number, end: number): boolean {
    if (start >= end) return true
    let i = start
    while (postorder[i] < postorder[end]) i++
    const m = i
    while (postorder[i] > postorder[end]) i++
    return i === end && isBST(start, m - 1) && isBST(m, end - 1)
  }

  return isBST(0, postorder.length - 1)
}
