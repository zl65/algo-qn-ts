function swap(nums: number[], i: number, j: number) {
  const tmp = nums[i]
  nums[i] = nums[j]
  nums[j] = tmp
}

function _qs(nums: number[], left: number, right: number, k: number): number {
  // 左闭右开
  if (right - left <= 1) return nums[k]

  const pivotIndex = partition(nums, left, right)

  if (k === pivotIndex) {
    return nums[k]
  } else if (pivotIndex > k) {
    return _qs(nums, left, pivotIndex, k)
  } else {
    return _qs(nums, pivotIndex + 1, right, k)
  }
}

function partition(nums: number[], left: number, right: number): number {
  const pivotVal = nums[left]
  let pivotIndex = left
  swap(nums, left, right - 1)
  for (let i = left; i < right; i++) {
    if (nums[i] < pivotVal) {
      swap(nums, pivotIndex, i)
      pivotIndex++
    }
  }
  swap(nums, pivotIndex, right - 1)
  return pivotIndex
}

function findKthLargest(nums: number[], k: number) {
  const res = _qs(nums, 0, nums.length, nums.length - k)
  console.log(nums, res)
  return res
}

findKthLargest([9, 4, 5, 6, 2, 4, 8, 1, 4, -4, 0, 3, 234], 3)
