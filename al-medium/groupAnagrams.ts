function groupAnagrams(strs: string[]): string[][] {
  const map = new Map()

  for (let i = 0; i < strs.length; i++) {
    let str = strs[i].split("").sort().join("")

    const list = map.has(str) ? map.get(str) : []
    list.push(strs[i])

    map.set(str, list)
  }
  return Array.from(map.values())
}
