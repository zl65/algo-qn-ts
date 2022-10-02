function compareVersion(v1: string, v2: string): number {
  const v1Arr = v1.split(".")
  const v2Arr = v2.split(".")

  let i = 0
  let v1Num
  let v2Num
  while (i < v1.length && i < v2.length) {
    v1Num = Number(v1Arr[i])
    v2Num = Number(v2Arr[i])

    if (v1Num < v2Num) {
      return 0
    } else if (v1Num > v2Num) {
      return 1
    } else {
      i++
    }
  }

  if (i === v1.length) return 0
  if (i === v2.length) return 1
  return 0
}

console.log(compareVersion("3.2", "3.2.1"))
