function fractionToDecimal(numerator: number, denominator: number): string {
  if (numerator % denominator === 0) {
    return (numerator / denominator).toString()
  }

  let res = []
  if (
    (numerator < 0 && denominator > 0) ||
    (numerator > 0 && denominator < 0)
  ) {
    res.push("-")
  }
  const n = Math.abs(numerator)
  const d = Math.abs(denominator)
  let integer = Math.floor(n / d)
  res.push(integer)
  res.push(".")

  let remainder = n % d
  const fractionArr: any = []
  const fractionMap: any = {}
  let index = 0

  while (remainder !== 0 && !(remainder in fractionMap)) {
    fractionMap[remainder] = index
    remainder = remainder * 10
    fractionArr.push(Math.floor(remainder / d))
    remainder = remainder % d
    index++
  }

  if (remainder !== 0) {
    let index = fractionMap[remainder]
    fractionArr.splice(index, 0, "(")
    fractionArr.push(")")
  }
  res.push(fractionArr.join(""))

  return res.join("")
}
