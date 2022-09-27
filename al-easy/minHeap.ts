import { swap } from "./utils"

export class MinHeap {
  tree: number[]

  constructor(nums: number[]) {
    this.tree = nums
    this.build()
  }

  shiftDown(i: number, size: number = this.tree.length) {
    let currIndex = i
    let left = i * 2 + 1
    let right = i * 2 + 2

    if (left < size && this.tree[left] < this.tree[currIndex]) {
      currIndex = left
    }
    if (right < size && this.tree[right] < this.tree[currIndex]) {
      currIndex = right
    }
    if (currIndex !== i) {
      swap(this.tree, i, currIndex)
      this.shiftDown(currIndex, size)
    }
  }

  shiftUp(i: number) {
    while (
      Math.floor((i - 1) / 2) >= 0 &&
      this.tree[Math.floor((i - 1) / 2)] > this.tree[i]
    ) {
      swap(this.tree, Math.floor((i - 1) / 2), i)
      i = Math.floor((i - 1) / 2)
    }
  }

  build() {
    const lastNodeIndex = this.tree.length

    const lastParent = Math.floor((lastNodeIndex - 1) / 2)
    for (let i = lastParent; i >= 0; i--) {
      this.shiftDown(i)
    }
  }

  insert(val: number) {
    const lastNodeIndex = this.tree.length
    this.tree.push(val)
    this.shiftUp(lastNodeIndex)
  }

  delete(i: number): number {
    swap(this.tree, i, this.tree.length - 1)
    const value = this.tree.pop()
    this.shiftDown(i)
    return value!
  }

  sort() {
    for (let i = 0; i < this.tree.length - 1; i++) {
      swap(this.tree, 0, this.tree.length - 1 - i)
      this.shiftDown(0, this.tree.length - 1 - i)
    }
    return this.tree
  }

  getter() {
    return this.tree
  }

  peak() {
    return this.tree[0]
  }

  print() {
    console.log(this.tree)
  }
}

// const myMinHeap = new MinHeap([2, 3, 4, 1, 6, 9, 0, 8])
// myMinHeap.print()
// myMinHeap.insert(-1)
// myMinHeap.print()
// myMinHeap.delete(0)
// myMinHeap.print()
// myMinHeap.sort()
// myMinHeap.print()
