function combine(n: number, k: number): number[][] {

  const res: number[][] = []

  // 会到递归定义，这个函数是要去遍历一棵树
  // 遇到 xx 情况的时候就是答案了，停下来
  // 没遇到的时候去遍历当前节点的这所有子节点

  // 遍历之前记住子节点，即做出选择，出来恢复选择
  function backTrack(max: number, selected: number[], start: number) {

    if (selected.length === k) {
      res.push(selected.concat())
      return
    }

    for (let i = start; i <= max; i++) {
      selected.push(i)
      backTrack(max, selected, i + 1)
      selected.pop()
    }
  }

  backTrack(n, [], 1)

  return res
}
