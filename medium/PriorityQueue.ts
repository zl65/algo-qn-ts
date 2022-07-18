class PriorityQueue {
  tree: any[]
  compareFunc: Function
  constructor(tree: any[], compareFunc: Function) {
    this.tree = tree
    this.compareFunc = compareFunc
    this.build()
  }

  swap(indexA: number, indexB: number) {
    const tmp = this.tree[indexA]
    this.tree[indexA] = this.tree[indexB]
    this.tree[indexB] = tmp
  }

  shiftDown(index: number, size: number) {
    const left = 2 * index + 1
    const right = 2 * index + 2

    let currIndex = index
    if (
      this.compareFunc(this.tree[left], this.tree[currIndex]) &&
      left < size
    ) {
      currIndex = left
    }
    if (
      this.compareFunc(this.tree[right], this.tree[currIndex]) &&
      right < size
    ) {
      currIndex = right
    }
    if (currIndex !== index) {
      this.swap(index, currIndex)
      this.shiftDown(currIndex, size)
    }
  }

  build() {
    const lastIndex = this.tree.length - 1
    const lastParentIndex = Math.floor((lastIndex - 1) / 2)
    for (let i = lastParentIndex; i > -1; i--) {
      this.shiftDown(i, this.tree.length)
    }
  }

  shiftUp(index: number) {
    while (
      Math.floor((index - 1) / 2) >= 0 &&
      this.compareFunc(this.tree[index], this.tree[Math.floor((index - 1) / 2)])
    ) {
      this.swap(index, Math.floor((index - 1) / 2))
      index = Math.floor((index - 1) / 2)
    }
  }

  insert(item: any) {
    this.tree.push(item)
    this.shiftUp(this.tree.length - 1)
  }
  delete(index: number): any {
    this.swap(index, this.tree.length - 1)
    const deletedItem = this.tree.pop()
    this.shiftDown(index, this.tree.length - 1)
    return deletedItem
  }
  sort() {
    for (let i = 0; i < this.tree.length - 1; i++) {
      this.swap(0, this.tree.length - 1 - i)
      this.shiftDown(0, this.tree.length - 1 - i)
    }
  }
  print() {
    console.log(this.tree)
  }
}

function compare(a: number, b: number) {
  return a < b
}

const myQ = new PriorityQueue([2, 3, 0, 9], compare)
myQ.print()
myQ.insert(-3)
myQ.insert(8)
myQ.print()
myQ.delete(2)
myQ.print()
myQ.delete(2)
myQ.print()
myQ.sort()
myQ.print()
