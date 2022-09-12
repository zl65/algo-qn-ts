function translateNum(num: number): number {
  const str = num.toString()
  let m = 1
  let n = 1
  let max = 1
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] !== "0" && Number(str[i - 1] + str[i]) <= 25) {
      max = n + m
    } else {
      max = n
    }
    m = n
    n = max
  }
  return max
}
