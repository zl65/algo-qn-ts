function wordSearch(board: string[][], word: string): boolean {
  const m = board.length
  const n = board[0].length
  let res = false
  const visited = new Array(m).fill(0).map(() => new Array(n).fill(false))

  function dfs(i: number, j: number, index: number) {
    if (res) return
    if (index === word.length) {
      res = true
      return
    }
    if (i < 0 || j < 0 || i >= m || j >= n) return
    if (visited[i][j]) return
    if (word[index] !== board[i][j]) return

    visited[i][j] = true
    dfs(i - 1, j, index + 1)
    dfs(i + 1, j, index + 1)
    dfs(i, j - 1, index + 1)
    dfs(i, j + 1, index + 1)
    visited[i][j] = false
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      dfs(i, j, 0)
    }
  }
  return res
}
