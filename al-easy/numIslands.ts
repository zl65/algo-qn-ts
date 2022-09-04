function numIslands(grid: string[][]): number {
//  以是岛屿的点为基准去遍历一个图
//  遍历矩阵去找是岛屿的点
  const column = grid.length
  const row = grid[0].length
  // 这里不用初始化是因为下边只判断为true的情况
  // 上边的说法是错的，取二维数组可能会reading undefined
  // let visited: boolean[][] = new Array(column).fill(0).map(() => new Array(row).fill(false))
  let res: number = 0

  // 这个遍历的意义就是把当前节点相邻的1变成0
  // 如果是1 就变成0，然后继续扩散，是0就return
  function dfs(i: number, j: number) {
    if (i >= column || j >= row || i < 0 || j < 0) return
    // 这个题目里因为有0和1就退出了，所以常规遍历里的visited用不着
    // if (visited[i][j]) return
    // visited[i][j] = true

    if (grid[i][j] === '0') return
    // 是 1 如果被访问过就要变成 0，这是为了下一次遍历到这个节点的时候，不会被计算为一个新的岛屿
    grid[i][j] = '0'

    dfs(i - 1, j)
    dfs(i + 1, j)
    dfs(i, j - 1)
    dfs(i, j + 1)
  }

  for (let k = 0; k < column; k++) {
    for (let l = 0; l < row; l++) {
      // 被visited过的，一定只会是0，所以可以这样跳过，但其实没什么用，是0的时候if就进不去，重复了
      // 注意是continue，跳过当次循环，不是break，break会结束整个for
      // if (visited[k][l]) continue
      if (grid[k][l] === '1') {
        res++
        dfs(k, l)
      }
    }
  }
  return res
}


function numIslands2(grid: string[][]) {
  const m = grid.length
  const n = grid[0].length
  let nums = 0

  // 这是扩散的方法，参数是扩散基点的坐标，扩散时，如果是 0 就 return，是 1 就继续扩散，进入递归
  // 为了避免重复访问和重复计算岛屿数量，每访问一次 1，就把它改成 0
  function traverse(i: number, j: number) {
    if (grid[i][j] === '0') return
    grid[i][j] = '0'

    const neighbor = [ { i: i - 1, j }, { i: i + 1, j }, { i, j: j - 1 }, { i, j: j + 1 } ]
    for (let k = 0; k < neighbor.length; k++) {
      if (neighbor[k].i >= 0
        && neighbor[k].i < m
        && neighbor[k].j >= 0
        && neighbor[k].j < n
        && grid[neighbor[k].i][neighbor[k].j] === '1'
      ) {
        traverse(neighbor[k].i, neighbor[k].j)
      }
    }
  }

  // 对二维矩阵进行遍历，查到一个 1， 就算作一个岛屿，然后向四周扩散
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        nums++
        traverse(i, j)
      }
    }
  }

  return nums
}
