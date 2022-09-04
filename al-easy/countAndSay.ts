function countAndSay(n: number): string {
  function _countAndSay(str: string): string {
    console.log(str)
    let res = ''
    let i = 0
    let j = 0
    while (i < str.length) {
      const value = str[i]
      let count = 1
      j = i + 1
      while (j < str.length) {
        if (str[j] !== value) {
          break
        }
        j++
      }
      count = j - i
      res += '' + count + value
      i = j
    }
    return res
  }

  let result = '1'
  for (let k = 1; k < n; k++) {
    result = _countAndSay(result)
  }
  return result
}

console.log(countAndSay(4))
