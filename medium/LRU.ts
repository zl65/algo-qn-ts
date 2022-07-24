import { DoubleListNode, DoubleLinkedList } from "./DoubleLInkedList"

interface myHashTable {
  [key: string]: DoubleListNode
}

class LRU {
  capacity: number
  hashtable: myHashTable
  list: DoubleLinkedList
  size: number

  constructor(capacity: number) {
    this.capacity = capacity
    this.hashtable = {}
    this.size = 0
    this.list = new DoubleLinkedList()
  }

  makeRecently(key: number) {
    const node = this.hashtable[key]
    this.list.remove(node)
    this.list.insertToEnd(node)
  }

  addRecently(key: number, value: number) {
    const node = new DoubleListNode(key, value)
    this.list.insertToEnd(node)
    this.hashtable[key] = node
  }
  deleteKey(key: number) {
    const node = this.hashtable[key]
    this.list.remove(node)
    delete this.hashtable[key]
  }
  removeLeastRecently() {
    const deletedNode = this.list.removeFirst()
    const key = deletedNode!.key
    delete this.hashtable[key]
  }

  put(key: number, value: number) {
    if (key in this.hashtable) {
      this.deleteKey(key)
      this.addRecently(key, value)
    } else {
      if (this.list.size === this.capacity) {
        this.removeLeastRecently()
      }
      this.addRecently(key, value)
    }
  }

  get(key: number) {
    if (key in this.hashtable) {
      this.makeRecently(key)
      return this.hashtable[key].value
    }
    return -1
  }
}

const myCache = new LRU(3)
myCache.put(1, 1)
myCache.put(2, 1)
myCache.put(3, 1)
myCache.put(4, 1)
myCache.get(4)
myCache.put(3, 3)
myCache.put(4, 4)
myCache.get(1)
myCache.put(2, 1)
