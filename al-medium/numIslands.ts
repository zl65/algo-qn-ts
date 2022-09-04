function numIslandsPractice(grid: string[][]): number {
  const x = grid.length
  const y = grid[0].length
  let res = 0

  function dfs(grid: string[][], i: number, j: number) {
    if (i >= x || j >= y || i < 0 || j < 0) return
    if (grid[i][j] === "0") return

    grid[i][j] = "0"

    dfs(grid, i - 1, j)
    dfs(grid, i + 1, j)
    dfs(grid, i, j - 1)
    dfs(grid, i, j + 1)
  }

  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      if (grid[i][j] === "1") {
        res++
        dfs(grid, i, j)
      }
    }
  }
  return res
}
