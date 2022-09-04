interface MyHashTable {
  [key: string]: DoubleLinkedListNode
}

class DoubleLinkedListNode {
  key: number
  value: number
  prev: DoubleLinkedListNode | null
  next: DoubleLinkedListNode | null

  constructor(key: number, value: number) {
    this.key = key
    this.value = value
    this.prev = null
    this.next = null
  }
}

class DoubleLinkedList {
  head: DoubleLinkedListNode
  tail: DoubleLinkedListNode
  size: number

  constructor() {
    this.head = new DoubleLinkedListNode(0, 0)
    this.tail = new DoubleLinkedListNode(0, 0)
    this.head.next = this.tail
    this.tail.prev = this.head
    this.size = 0
  }
  insertToEnd(node: DoubleLinkedListNode) {
    this.tail.prev!.next = node
    node.prev = this.tail.prev
    node.next = this.tail
    this.tail.prev = node
    this.size++
  }
  deleteNode(node: DoubleLinkedListNode) {
    node.prev!.next = node.next
    node.next!.prev = node.prev
    this.size--
  }
  deleteFirst(): DoubleLinkedListNode | null {
    const first = this.head.next
    // 这里可以直接调用写好的 deleteNode
    this.deleteNode(first!)
    return first
  }
}

class LRUCache {
  capacity: number
  list: DoubleLinkedList
  hashtable: MyHashTable

  constructor(capacity: number) {
    this.capacity = capacity
    this.list = new DoubleLinkedList()
    this.hashtable = {}
  }

  makeRecently(key: number) {
    const node = this.hashtable[key]
    this.list.deleteNode(node)
    this.list.insertToEnd(node)
  }

  addRecently(key: number, value: number) {
    const node = new DoubleLinkedListNode(key, value)
    this.list.insertToEnd(node)
    this.hashtable[key] = node
  }

  deleteOddestNode() {
    const node = this.list.deleteFirst()
    delete this.hashtable[node!.key]
  }

  deleteKey(key: number) {
    const node = this.hashtable[key]
    this.list.deleteNode(node)
    delete this.hashtable[key]
  }

  get(key: number): number {
    if (key in this.hashtable) {
      this.makeRecently(key)
      return this.hashtable[key].value
    }
    return -1
  }

  put(key: number, value: number) {
    // 需要考虑两种前置删除，一个是替换原有的，一个是容量满了
    if (key in this.hashtable) {
      this.deleteKey(key)
    } else if (this.capacity === this.list.size) {
      this.deleteOddestNode()
    }
    this.addRecently(key, value)
  }
}
