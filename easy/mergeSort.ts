function mergeSort(nums: number[]): number[] {
  return _mergeSort(nums, 0, nums.length)
}

function _mergeSort(nums: number[], left: number, right: number): number[] {
  if (right - left > 1) {
    const mid = Math.floor((left + right) / 2)
    _mergeSort(nums, left, mid)
    _mergeSort(nums, mid, right)
    merge(nums, left, mid, right)
  }
  return nums
}

function merge(nums: number[], left: number, mid: number, right: number): number[] {
//  [left,mid),[mid,right)
  const newArr = []
  let i = left
  let j = mid
  while (i < mid && j < right) {
    if (nums[i] < nums[j]) {
      newArr.push(nums[i])
      i++
    } else {
      newArr.push(nums[j])
      j++
    }
  }
  while (i < mid) {
    newArr.push(nums[i])
    i++
  }
  while (j < right) {
    newArr.push(nums[j])
    j++
  }
  for (let k = 0; k < newArr.length; k++) {
    nums[left + k] = newArr[k]
  }
  return nums
}


function main() {
  const nums = [ 12, 17, 9, 11, 6, 7, 5, 0 ]
  mergeSort(nums)
  console.log('after sort: ', nums)
}

main()

// 要注意每次都把 nums 返回了，直接修改的 nums
