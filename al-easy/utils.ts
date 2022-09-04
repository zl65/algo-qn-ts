export function swap(nums: number[], i: number, j: number) {
  const tmp = nums[i]
  nums[i] = nums[j]
  nums[j] = tmp
}
