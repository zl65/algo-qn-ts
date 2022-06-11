function isPalindromeStr(s: string): boolean {
  // 可以用正则替换
  // 字符串可以直接用下标访问字符
  s = s.replace(/[^a-zA-Z0-9]/g, '').replace(/\s/g, '').toLowerCase()
  let left = 0
  let right = s.length - 1
  while (left < right) {
    if (s[left] !== s[right]) {
      return false
    }
    left++
    right--
  }
  return true
}
