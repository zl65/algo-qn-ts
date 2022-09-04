function firstUniqChar(s: string): number {
  // Map 存频次
  // Map 也可以存索引
  const arr = s.split('')
  let map = new Map()
  arr.forEach(value => {
    map.set(value, (map.get(value) || 0) + 1)
  })
  for (let i = 0; i < arr.length; i++) {
    if (map.get(arr[i]) === 1) {
      return i
    }
  }
  return -1
}

console.log(firstUniqChar('eetcode'))
