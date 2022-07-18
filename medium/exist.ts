function exist(board: string[][], word: string): boolean {
  let res = false
  let visited = new Array(board.length)
    .fill(0)
    .map(() => new Array(board[0].length).fill(0))

  function dfs(i: number, j: number, wordIndex: number) {
    if (res) return
    if (i < 0 || j < 0 || i > board.length - 1 || j > board[0].length - 1)
      return
    if (visited[i][j] === 1) return
    if (board[i][j] !== word[wordIndex]) return
    if (board[i][j] === word[wordIndex] && wordIndex === word.length - 1) {
      res = true
      return
    }

    visited[i][j] = 1
    dfs(i - 1, j, wordIndex + 1)
    dfs(i + 1, j, wordIndex + 1)
    dfs(i, j - 1, wordIndex + 1)
    dfs(i, j + 1, wordIndex + 1)
    visited[i][j] = 0
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      dfs(i, j, 0)
      // if(res) break
    }
  }
  console.log(res)
  return res
}

exist(
  [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
  ],
  "ABCB"
)
