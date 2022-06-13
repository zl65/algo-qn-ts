const solution = function (isBadVersion: any) {

  return function (n: number): number {
    function search(left: number, right: number): number {
      if (left >= right) return left
      const mid = Math.floor((left + right) / 2)
      if (mid === isBadVersion) {
        return search(left, mid)
      } else {
        return search(mid + 1, right)
      }
    }

    return search(1, n)
  }
}
