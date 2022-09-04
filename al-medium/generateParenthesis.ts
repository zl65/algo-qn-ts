function generateParenthesis(n: number): string[] {
  let res: string[] = []

  function dfs(left: number, right: number, str: string) {
    if (left === n && right === n) {
      res.push(str)
      return
    }

    if (left < n) {
      str += "("
      dfs(left + 1, right, str)
      str = str.substring(0, str.length - 1)
    }
    if (right < n && left > right) {
      str += ")"
      dfs(left, right + 1, str)
      str = str.substring(0, str.length - 1)
    }
  }
  dfs(0, 0, "")
  return res
}
