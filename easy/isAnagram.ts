function isAnagram(s: string, t: string): boolean {
  const sArr = s.split('')
  const tArr = t.split('')
  const map = new Map()
  sArr.forEach(value => {
    map.set(value, (map.get(value) || 0) + 1)
  })
  tArr.forEach(value => {
    map.set(value, (map.get(value) || 0) - 1)
  })
  // FIXME 这里不用遍历第三次了，在遍历tArr的时候直接比较就可以了
  for (let [key, value] of map) {
    if (value !== 0) {
      return false
    }
  }
  return true
}

//先判断长度
//先排序再变成字符串比较
function isAnagram2(s: string, t: string): boolean {
  return s.length == t.length && [...s].sort().join('') === [...t].sort().join('')
}

console.log(isAnagram2('cat', 'rat'))
