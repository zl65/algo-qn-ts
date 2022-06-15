function numIslands(grid: string[][]): number {
//  以是岛屿的点为基准去遍历一个图
//  遍历矩阵去找是岛屿的点
  const column = grid.length
  const row = grid[0].length
  // 这里不用初始化是因为下边只判断为true的情况
  // 上边的说法是错的，取二维数组可能会reading undefined
  // let visited: boolean[][] = new Array(column).fill(0).map(() => new Array(row).fill(false))
  let res: number = 0

  function dfs(i: number, j: number) {

    if (i >= column || j >= row || i < 0 || j < 0) return
    // 这个题目里因为有0和1就退出了，所以常规遍历里的visited用不着
    // if (visited[i][j]) return
    // visited[i][j] = true

    if (grid[i][j] === '0') return
    grid[i][j] = '0'

    dfs(i - 1, j)
    dfs(i + 1, j)
    dfs(i, j - 1)
    dfs(i, j + 1)
  }

  for (let k = 0; k < column; k++) {
    for (let l = 0; l < row; l++) {
      if (grid[k][l] === '1') {
        res++
        dfs(k, l)
      }
    }
  }
  return res
}
