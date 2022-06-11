function reverse(x: number): number {
  let value = Math.abs(x)
  let res = 0
  let digit = 0
  while (value > 9) {
    digit = value % 10
    value = (value - digit) / 10
    res = res * 10 + digit
  }
  const MAX = Math.pow(2, 31) - 1
  if (res > (MAX - value) / 10) {
    return 0
  } else {
    return x > 0 ? res * 10 + value : -(res * 10 + value)
  }
}
