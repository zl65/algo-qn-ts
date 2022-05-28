function singleNumber(nums: number[]): number {
  let set = new Set<number>()
  nums.forEach((item) => {
    if (set.has(item)) {
      set.delete(item)
    } else {
      set.add(item)
    }
  })
  
  // for (const value of set) {
  //   return value;
  // }
}
