// const MAX = Math.pow(2, 31) - 1
// const MIN = -Math.pow(2, 31)

import { resolve } from "node:path/posix"

// function reverse(x: number): number {
//   let res = 0
//   while (x !== 0) {
//     const digit = x % 10
//     if (res > Math.floor((MAX - digit) / 10) || res < Math.ceil((MIN - digit) / 10)) {
//       return 0
//     }
//     x = x > 0 ? Math.floor(x / 10) : Math.ceil(x / 10)
//     res = res * 10 + digit
//   }
//   return res
// }

const MAX = Math.pow(2, 31) - 1
const MIN = -Math.pow(2, 31)

function reverse(x: number): number {
  let res = 0

  while (x !== 0) {
    const digit = x % 10
    if (res > (MAX - digit) / 10 || res < (MIN - digit) / 10) {
      return 0
    }
    res = 10 * res + digit
    x = x > 0 ? Math.floor(x / 10) : Math.ceil(x / 10)
  }
  return res
}
