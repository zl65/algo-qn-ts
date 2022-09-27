function movingCount(m: number, n: number, k: number): number {
  let res = 0
  const visited = new Array(m).fill(0).map((e) => new Array(n).fill(false))

  function sum(a: number, b: number) {
    const arrA = a.toString().split("")
    const arrB = b.toString().split("")
    let sum = 0
    arrA.forEach((e) => (sum = sum + Number(e)))
    arrB.forEach((e) => (sum = sum + Number(e)))
    return sum
  }

  function dfs(i: number, j: number, k: number) {
    if (i < 0 || j < 0 || i >= m || j >= n) return
    if (visited[i][j]) return
    if (sum(i, j) > k) return

    visited[i][j] = true
    res++

    dfs(i - 1, j, k)
    dfs(i + 1, j, k)
    dfs(i, j - 1, k)
    dfs(i, j + 1, k)
  }

  dfs(0, 0, k)
  return res
}
