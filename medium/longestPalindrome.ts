// function longestPalindrome(s: string): string {
//   function longestPalindromeWithStart(s: string, index: number): string {
//     let res = s[index]
//     let left = index - 1
//     let right = index + 1
//     while (left >= 0 && right <= s.length - 1 && s[left] === s[right]) {
//       res = s[left] + res + s[right]
//       left--
//       right++
//     }
//     return res
//   }
//   function longestPalindromeWithDoubleStart(s: string, index: number): string {
//     if (s[index] === s[index + 1]) {
//       let res = s[index] + s[index + 1]
//       let left = index - 1
//       let right = index + 2
//       while (left >= 0 && right <= s.length - 1 && s[left] === s[right]) {
//         res = s[left] + res + s[right]
//         left--
//         right++
//       }
//       return res
//     }
//     return ""
//   }

//   let longestStr = ""
//   for (let i = 0; i < s.length; i++) {
//     const currStr = longestPalindromeWithStart(s, i)
//     if (currStr.length > longestStr.length) {
//       longestStr = currStr
//     }
//   }

//   for (let i = 0; i < s.length - 1; i++) {
//     const currStr = longestPalindromeWithDoubleStart(s, i)
//     if (currStr.length > longestStr.length) {
//       longestStr = currStr
//     }
//   }
//   return longestStr
// }

function longestPalindrome(s: string) {
  const dp: any = new Array(s.length)
    .fill(0)
    .map(() => new Array(s.length).fill(false))
  let start = 0
  let end = 0

  // dp[left][right]的定义是从i到j的字串是回文串,默认都是false
  // 状态转移方程 dp[left][right] = dp [left+1][right-1] && s[left] === s[right]
  // 动态规划一定是有初始值的，有了初始值才能一步步往后推倒，比如常见的dp[0],dp[1]
  // 这道题的初始值是最小的字串，长度为1和长度为2的那些回文串，他们的条件是 rihgt - left <= 1 && s[left] === s[right]
  // 这个可以和状态转移方程合并到一起，不需要单独初始化
  // 在一步步推导 dp 数组全部值的过程中，right由right - 1 推出来，所以可以从小往大循环，即 0 - s.length，right++
  // left 由 left + 1 推导出来，所以需要先有大的，后有小的，所以 left--，初始值是 left = right，显然left > right 是无意义的
  // 除了数学关系，在意义上，对每一个固定右边界 right 进行循环的时候，相当于把 left 在一步步往头走，字串从最小到最长
  // 然后再把字符串每一个字符作为固定的 right 遍历，也就是外层循环

  for (let right = 0; right < s.length; right++) {
    for (let left = right; left >= 0; left--) {
      if (
        (right - left <= 1 || dp[left + 1][right - 1]) &&
        s[left] === s[right]
      ) {
        dp[left][right] = true

        // left到right已经是回文串的情况，如果长度比当前的回文串长，就更新索引
        if (right - left > end - start) {
          start = left
          end = right
        }
      }
    }
  }
  return s.substring(start, end + 1)
}
