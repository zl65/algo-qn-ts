function twoSum(arr: number[], target: number): number[] {
  let left = 0
  let right = arr.length - 1
  arr.sort((a, b) => a - b)

  let sum
  while (left < right) {
    sum = arr[left] + arr[right]
    if (sum === target) {
      return [arr[left], arr[right]]
    } else if (sum < target) {
      left++
    } else {
      right--
    }
  }
  return [-1, -1]
}

console.log(twoSum([3, 4, 5, 6, 7, 8, 8, 7, 3, 2, 1], 8))

function twoSumIndex(nums: number[], target: number) {
  const map = new Map()
  let remain: number
  for (let i = 0; i < nums.length; i++) {
    remain = target - nums[i]
    if (map.has(remain)) {
      return [i, map.get(remain)]
    }
    map.set(nums[i], i)
  }
  return [-1, -1]
}
