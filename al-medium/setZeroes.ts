function setZeroes(matrix: number[][]): void {
  let is: Record<number, boolean> = {}
  let js: Record<number, boolean> = {}

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        is[i] = true
        js[j] = true
      }
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (i in is || j in js) {
        matrix[i][j] = 0
      }
    }
  }
}
