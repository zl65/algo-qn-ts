class RandomizedSet {
  arr: number[]
  obj: any
  constructor() {
    this.arr = []
    this.obj = {}
  }

  insert(val: number): boolean {
    if (val in this.obj) return false

    this.arr.push(val)
    this.obj[val] = this.arr.length - 1
    return true
  }

  remove(val: number): boolean {
    if (val.toString() in this.obj) {
      const removeIndex = this.obj[val]
      const lastIndex = this.arr.length - 1
      const lastVal = this.arr[lastIndex]

      this.arr[removeIndex] = lastVal
      this.obj[lastVal] = removeIndex
      delete this.obj[val]

      this.arr.pop()
      return true
    }
    return false
  }

  getRandom(): number {
    const index = Math.floor(this.arr.length * Math.random())
    return this.arr[index]
  }
}

const test = new RandomizedSet()
test.insert(1)
test.remove(1)
