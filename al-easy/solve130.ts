function solve(board: string[][]): void {
  const m = board.length
  const n = board[0].length
  const graph = new UF(m * n + 1)

  // 先把所有边界上的 O 和 dummy 相连
  for (let i = 0; i < m; i++) {
    if (board[i][0] === 'O') {
      graph.union(n * i, m * n)
    }
    if (board[i][n - 1] === 'O') {
      graph.union(n * i + n - 1, m * n)
    }
  }
  for (let j = 0; j < n; j++) {
    if (board[0][j] === 'O') {
      graph.union(j, m * n)
    }
    if (board[m - 1][j] === 'O') {
      graph.union(n * (m - 1) + j, m * n)
    }
  }

  // 把整个图里的 O 相连
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 'O') {
        if (i + 1 < m && board[i + 1][j] === 'O') {
          graph.union((i + 1) * n + j, i * n + j)
        }
        if (j + 1 < n && board[i][j + 1] === 'O') {
          graph.union(i * n + j + 1, i * n + j)
        }
      }
    }
  }

  // 把没有和 dummy 相连的 O 改成 X
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 'O' && !graph.isConnected(n * i + j, m * n)) {
        board[i][j] = 'X'
      }
    }
  }
}


function solve2(board: string[][]): void {
  let m = board.length
  let n = board[0].length

  // dfs 的作用就是扩散，找到这个岛屿的所有点，然后对这些点做一些操作
  function dfs(i: number, j: number) {
    // 这里多了一个判断，不用继续递归的情况是 遇到 X 和 *
    if (board[i][j] === 'X' || board[i][j] === '*') return
    board[i][j] = '*'
    const dirs = [ { i: i - 1, j }, { i: i + 1, j }, { i, j: j - 1 }, { i, j: j + 1 } ]
    for (let k = 0; k < dirs.length; k++) {
      if (dirs[k].i >= 0
        && dirs[k].i < m
        && dirs[k].j >= 0
        && dirs[k].j < n
        && board[dirs[k].i][dirs[k].j] === 'O'
      ) {
        dfs(dirs[k].i, dirs[k].j)
      }
    }
  }

  // 把四个边界上的岛屿用 dfs 找到，并且把对应的 O 标记为其他的符号 *
  for (let i = 0; i < m; i++) {
    if (board[i][0] === 'O') {
      dfs(i, 0)
    }
    if (board[i][n - 1] === 'O') {
      dfs(i, n - 1)
    }
  }
  for (let j = 0; j < n; j++) {
    if (board[0][j] === 'O') {
      dfs(0, j)
    }
    if (board[m - 1][j] === 'O') {
      dfs(m - 1, j)
    }
  }

  // 遍历整个矩阵，把剩下的中间的 O 变成 X，再把四周的岛屿，也就是 *，变为 O
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 'O') {
        board[i][j] = 'X'
      }
      if (board[i][j] === '*') {
        board[i][j] = 'O'
      }
    }
  }
}
