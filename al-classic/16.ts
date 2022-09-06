function myPow(x: number, n: number): number {
  function pow(x: number, n: number): number {
    if (n === 0) return 1
    const val = pow(x, Math.floor(n / 2))
    if (n % 2 === 0) {
      return val * val
    } else {
      return x * val * val
    }
  }

  if (n < 0) {
    return 1 / pow(x, -n)
  }
  return pow(x, n)
}
