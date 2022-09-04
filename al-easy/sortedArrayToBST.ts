function sortedArrayToBST(nums: number[]): TreeNode | null {
  function convert(left: number, right: number): TreeNode | null {
    // > 或者是 >= 这个边界情况要考虑清楚
    if (left > right) return null
    let mid = Math.floor((right + left) / 2)
    let root = new TreeNode(nums[mid])
    // mid 要记得+-1，因为这个节点被root占了
    root.left = convert(left, mid - 1)
    root.right = convert(mid + 1, right)
    return root
  }

  return convert(0, nums.length - 1)
}
