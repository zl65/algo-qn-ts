function trap(height: number[]): number {
  let res = 0
  for (let i = 0; i < height.length; i++) {
    let lmax = height[i]
    let rmax = height[i]
    for (let l = 0; l < i; l++) {
      lmax = Math.max(lmax, height[l])
    }
    for (let r = i + 1; r < height.length; r++) {
      rmax = Math.max(rmax, height[r])
    }
    res += Math.min(lmax - height[i], rmax - height[i])
  }
  return res
}

function trap2(height: number[]): number {
  let left = 0
  let right = height.length - 1
  let lmax = 0
  let rmax = 0
  let res = 0

  while (left < right) {
    lmax = Math.max(lmax, height[left])
    rmax = Math.max(rmax, height[right])

    if (lmax < rmax) {
      res += lmax - height[left]
      left++
    } else {
      res += rmax - height[right]
      right--
    }
  }

  return res
}
