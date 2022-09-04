function minWindow(s: string, t: string): string {
  const need: Record<string, number> = {}
  for (let i = 0; i < t.length; i++) {
    need[t[i]] = need[t[i]] ? need[t[i]] + 1 : 1
  }

  let left = 0
  let right = 0
  const window: Record<string, number> = {}
  let valid = 0
  let minLength = s.length + 1
  let start = left

  while (right < s.length) {
    const c = s[right]
    right++

    if (need[c]) {
      window[c] = window[c] ? window[c] + 1 : 1

      if (window[c] === need[c]) {
        valid++
      }

      while (valid === Object.keys(need).length) {
        // 注意减小的时候会同时更新两个值
        if (right - left < minLength) {
          minLength = right - left
          start = left
        }
        const d = s[left]
        left++

        if (need[d]) {
          if (window[d] === need[d]) {
            valid--
          }
          window[d]--
        }
      }
    }
  }
  return minLength > s.length ? "" : s.substring(start, start + minLength)
}
