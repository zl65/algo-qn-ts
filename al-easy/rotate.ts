function rotate(nums: number[], k: number): void {
  const shiftSteps = k % nums.length
  if (shiftSteps === 0) {
    return
  }

  let tmp = 0
  function swap(x: number, y: number) {
    tmp = nums[x]
    nums[x] = nums[y]
    nums[y] = tmp
  }

  function reverse(x: number, y: number) {
    const mid = Math.ceil((x + y) / 2)
    while (x < mid) {
      swap(x, y)
      x++
      y--
    }
  }
  reverse(0, nums.length - 1)
  reverse(0, shiftSteps - 1)
  reverse(shiftSteps, nums.length - 1)
}
