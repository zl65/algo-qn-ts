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

function test(strs: string[]): string[][] {
  const map = new Map()
  for (let i = 0; i < strs.length; i++) {
    const str = strs[i].split("").sort().join("")
    if (map.has(str)) {
      map.get(str).push(strs[i])
    } else {
      map.set(str, [str])
    }
  }
  return Array.from(map.values())
}
