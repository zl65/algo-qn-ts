function searchMatrix(matrix: number[][], target: number): boolean {
  function search(nums: number[], target: number): boolean {
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
      const mid = Math.floor((left + right) / 2)

      if (nums[mid] === target) return true
      if (nums[mid] < target) left = mid + 1
      if (nums[mid] > target) right = mid - 1
    }
    return false
  }

  for (let i = 0; i < matrix.length; i++) {
    const res = search(matrix[i], target)
    if (res === true) return true
  }
  return false
}
