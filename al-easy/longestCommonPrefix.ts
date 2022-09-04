function longestCommonPrefix(strs: string[]): string {
  let res = strs[0]
  for (let j = 0; j < strs.length; j++) {
    if (res === '' || strs[j] === '') {
      return ''
    }
    res = _longestCommonPrefix(res, strs[j])
  }

  function _longestCommonPrefix(str1: string, str2: string) {
    const minLength = str1.length < str2.length ? str1.length : str2.length
    let i = 0
    while (i < minLength) {
      if (str1.substring(0, i + 1) !== str2.substring(0, i + 1)) {
        return str1.substring(0, i)
      }
      i++
    }
    return str1.substring(0, i)
  }

  return res
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight']))
