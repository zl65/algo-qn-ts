function checkInclusion(s1: string, s2: string): boolean {
  const need: Record<string, number> = {}
  for (let i = 0; i < s1.length; i++) {
    need[s1[i]] = need[s1[i]] ? need[s1[i]] + 1 : 1
  }

  let left = 0
  let right = 0
  let window: Record<string, number> = {}
  let valid = 0
  while (right < s2.length) {
    const c = s2[right]
    right++
    if (need[c]) {
      window[c] = window[c] ? window[c] + 1 : 1
      if (need[c] === window[c]) {
        valid++
      }
    }

    // 根据题目，窗口的长度是固定不变的，所以这里可以用if判断
    if (right - left === s1.length) {
      if (valid === Object.keys(need).length) {
        return true
      }
      const d = s2[left]
      left++
      if (need[d]) {
        if (need[d] === window[d]) {
          valid--
        }
        window[d]--
      }
    }
  }
  return false
}
