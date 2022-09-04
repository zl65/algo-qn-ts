// 原地的话可以从后往前遍历，毕竟数组

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = m - 1
  let j = n - 1
  let k = m + n - 1
  // 逆向时注意循环进入的条件
  while (i >= 0 || j >= 0) {
    // 写法上把 if 合并，实际上可能原来的更好理解
    if (j === -1 || nums1[i] > nums2[j]) {
      nums1[k] = nums1[i]
      i--
    } else {
      nums1[k] = nums2[j]
      j--
    }
    k--
  }
}


// 新开数组来存结果
// function merge(nums1: number[], m: number, nums2: number[], n: number): void {
//   let i = 0
//   let j = 0
//   let k = 0
//   let res: number[] = []
//   while (i < m && j < n) {
//     if (nums1[i] <= nums2[j]) {
//       res[k] = nums1[i]
//       i++
//     } else {
//       res[k] = nums2[j]
//       j++
//     }
//     k++
//   }
//   while (i < m) {
//     res[k] = nums1[i]
//     i++
//     k++
//   }
//   while (j < n) {
//     res[k] = nums2[j]
//     j++
//     k++
//   }
//   for (let l = 0; l < m + n; l++) {
//     nums1[l] = res[l]
//   }
// }
