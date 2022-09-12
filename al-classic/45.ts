function minNumber(nums: number[]): string {
  function compare(a: number, b: number) {
    const ab = "" + a + b
    const ba = "+" + b + a
    if (Number(ab) > Number(ba)) {
      return 1
    }
    return -1
  }

  return nums.sort(compare).join("")
}
