function numIslandsUsingUF(grid: string[][]): number {
  const m = grid.length
  const n = grid[0].length
  const graph = new UF(m * n + 1)
  // 思路是把所有 0 都连通，最后结果再 - 1
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 如果是 0，就和dummy联通
      if (grid[i][j] === '0') {
        // 数组下标的换算又出错了
        graph.union(n * i + j, m * n)
      } else {
        // 如果是 1，就向四周扩散一次，把自己和周围的 1 都联通
        // 优化方案是只去看右侧和下边的邻居，因为按顺序遍历的话，左和上都检查过了
        const neighbor = [ { i: 1 + i, j: j }, { i: i, j: 1 + j } ]
        for (let k = 0; k < neighbor.length; k++) {
          if (neighbor[k].i < m
            && neighbor[k].j < n
            && grid[neighbor[k].i][neighbor[k].j] === '1'
          ) {
            graph.union(n * i + j, n * neighbor[k].i + neighbor[k].j)
          }
        }
      }
    }
  }
  return graph.getCount() - 1
}
