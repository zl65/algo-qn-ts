import { swap } from './utils'

function _qs(nums: number[], left: number, right: number) {
  // 左闭右开
  if (right - left <= 1) return

  const pivotIndex = partition(nums, left, right)

  _qs(nums, left, pivotIndex)
  _qs(nums, pivotIndex + 1, right)
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


function quickSort(nums: number[]) {
  _qs(nums, 0, nums.length)
  console.log(nums)
}

quickSort([ 9, 4, 5, 6, 2, 4, 8, 1, 4, -4, 0, 3, 234 ])
