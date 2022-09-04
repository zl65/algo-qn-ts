class LRUCacheUsingMap {
  capacity: number
  map: Map<number, number>

  constructor(capacity: number) {
    this.capacity = capacity
    this.map = new Map()
  }

  get(key: number) {
    if (this.map.has(key)) {
      const value = this.map.get(key)
      this.map.delete(key)
      this.map.set(key, value!)
      return value
    }
    return -1
  }
  put(key: number, value: number) {
    const keys = Array.from(this.map.keys())

    if (this.map.has(key)) {
      this.map.delete(key)
    } else if (keys.length === this.capacity) {
      this.map.delete(keys[0])
    }
    this.map.set(key, value)
  }
}
