function letterCombinations(digits: string): string[] {
  const res: string[] = []

  let arr: string[][] = [
    [],
    [],
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
    ["j", "k", "l"],
    ["m", "n", "o"],
    ["p", "q", "r", "s"],
    ["t", "u", "v"],
    ["w", "x", "y", "z"],
  ]

  // 参数好好想一下，这里没有树指向关系，用了数组的索引
  function dfs(digitsIndex: number, str: string) {
    // 终止条件
    if (str.length === digits.length) {
      if (str.length > 0) res.push(str)
      return
    }

    // 这个变量是跟随每次dfs的
    const index = Number(digits[digitsIndex])

    // 对每一个选择分枝的操作
    for (let i = 0; i < arr[index].length; i++) {
      str += arr[index][i] || ""
      dfs(digitsIndex + 1, str)
      str = str.substring(0, str.length - 1)
    }
  }
  dfs(0, "")
  console.log(res)
  return res
}

letterCombinations("")
