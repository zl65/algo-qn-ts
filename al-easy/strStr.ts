function strStr(haystack: string, needle: string): number {
  if (needle === '') {
    return 0
  }
  if (haystack.length < needle.length) {
    return -1
  }
  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    if (haystack.substring(i, i + needle.length) === needle) {
      return i
    }
  }
  return -1
}

console.log(strStr('abcd', 'cd'))
