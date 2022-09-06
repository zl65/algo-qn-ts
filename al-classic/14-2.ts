function cuttingRope2(n: number): number {
  if (n <= 3) return n - 1

  const int = Math.floor(n / 3)
  const mod = n % 3
  if (mod === 0) {
    return Math.pow(3, int)
  } else if (mod === 1) {
    return Math.pow(3, int - 1) * 4
  } else {
    return Math.pow(3, int) * 2
  }
}
