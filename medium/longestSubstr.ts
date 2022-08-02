function lengthOfLongestSubstring(s: string): number {
  const window: Record<string, number> = {}
  let left = 0
  let right = 0
  let max = 0
  while (right < s.length) {
    const c = s[right]
    right++
    window[c] = window[c] ? window[c] + 1 : 1

    while (window[c] > 1) {
      const d = s[left]
      left++
      window[d]--
    }

    max = Math.max(max, right - left)
  }
  return max
}
