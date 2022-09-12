function maxValue(grid: number[][]): number {
  const row = grid.length
  const col = grid[0].length
  const dp: number[][] = new Array(row)
    .fill(0)
    .map(() => new Array(col).fill(0))

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      dp[i][j] =
        grid[i][j] +
        Math.max(j - 1 >= 0 ? dp[i][j - 1] : 0, i - 1 >= 0 ? dp[i - 1][j] : 0)
    }
  }
  return dp[row - 1][col - 1]
}
