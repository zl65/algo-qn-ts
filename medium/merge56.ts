function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => {
    return a[0] - b[0]
  })

  const res = [intervals[0]]

  for (let i = 1; i < intervals.length; i++) {
    const currLeft = intervals[i][0]
    const currRight = intervals[i][1]

    if (intervals[i][0] <= res[res.length - 1][1]) {
      // 这里要注意，右边界的更新要取上一个和当前的最大值
      res[res.length - 1][1] = Math.max(res[res.length - 1][1], intervals[i][1])
    } else {
      res.push([currLeft, currRight])
    }
  }
  return res
}
