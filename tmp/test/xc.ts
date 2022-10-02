function myPow(a: number, b: number): number {
  // Math.pow(a, b)

  const c = Math.floor(b / 2)
  const res = myPow(a, c)

  if (b % 2 === 0) {
    return res * res
  } else {
    return a * res * res
  }
}

function sqrt(n: number): number {
  let transferedN = n
  let length = 0
  let tmp = new Array(length).fill(0)
  let tmpNumber = 1

  if (n.toString().split(".")[1]) {
    length = n.toString().split(".")[1].length
    tmp = new Array(length).fill(0)
    tmpNumber = Number(`1${tmp.join("")}`)

    transferedN = n * tmpNumber
  }

  if (length % 2 !== 0) return NaN

  for (let i = 0; i <= transferedN / 2; i++) {
    if (i * i === transferedN) {
      if (length > 0) {
        tmp = new Array(length / 2).fill(0)
        tmpNumber = Number(`1${tmp.join("")}`)
        transferedN = n * tmpNumber
        return i / tmpNumber
      }
      return i
    }
  }
  return NaN
}

console.log(sqrt(2))
