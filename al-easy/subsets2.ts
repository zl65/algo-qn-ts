function subsetsWithDup(nums: number[]): number[][] {
  const res: number[][] = []

  function backTrack(nums: number[], selected: number[], i: number) {
    res.push(selected.concat())

    for (let j = i; j < nums.length; j++) {
      // 这里是进行剪枝，回到递归函数的定义，然后考虑在哪里进行剪枝
      // j > i 这个条件很关键，是循环到第二个才需要
      if (j > i && nums[j] === nums[j - 1]) continue
      
      selected.push(nums[j])
      backTrack(nums, selected, j + 1)
      selected.pop()
    }
  }

  // 排序函数会修改原数组
  nums.sort((a, b) => a - b)
  backTrack(nums, [], 0)
  return res
}
