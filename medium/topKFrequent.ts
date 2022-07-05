function topKFrequent(nums: number[], k: number): number[] {
  const freMap = new Map<number, number>()
  nums.forEach((item) => {
    freMap.set(item, freMap.has(item) ? freMap.get(item)! + 1 : 1)
  })

  let freArr: number[][] = new Array(nums.length)
    .fill(new Array())
    .map(() => new Array())

  freMap.forEach((value, key) => {
    freArr[value - 1].push(key)
  })

  let res: number[] = []
  for (let i = nums.length - 1; i >= 0; i--) {
    if (res.length < k && freArr[i].length > 0) {
      res = res.concat(freArr[i])
    }
  }
  return res
}

topKFrequent([-1, -1], 1)
