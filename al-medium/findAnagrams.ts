function findAnagrams(s: string, p: string): number[] {
  const need: Record<string, number> = {}
  for (let i = 0; i < p.length; i++) {
    need[p[i]] = need[p[i]] ? need[p[i]] + 1 : 1
  }

  let left = 0
  let right = 0
  let window: Record<string, number> = {}
  let valid = 0
  let res = []
  while (right < s.length) {
    const c = s[right]
    right++
    if (need[c]) {
      window[c] = window[c] ? window[c] + 1 : 1
      if (need[c] === window[c]) {
        valid++
      }
    }

    while (right - left >= p.length) {
      if (valid === Object.keys(need).length) {
        res.push(left)
      }
      const d = s[left]
      left++
      if (need[d]) {
        if (need[d] === window[d]) {
          valid--
        }
        window[d]--
      }
    }
  }

  return res
}
