export class DoubleListNode {
  key: number
  value: number
  prev: DoubleListNode | null
  next: DoubleListNode | null
  constructor(key: number, value: number) {
    this.key = key
    this.value = value
    this.prev = null
    this.next = null
  }
}

export class DoubleLinkedList {
  head: DoubleListNode
  tail: DoubleListNode
  size: number

  constructor() {
    this.head = new DoubleListNode(0, 0)
    this.tail = new DoubleListNode(0, 0)
    this.head.next = this.tail
    this.tail.prev = this.head
    this.size = 0
  }
  insertToEnd(node: DoubleListNode) {
    this.tail.prev!.next = node
    node.prev = this.tail.prev
    node.next = this.tail
    this.tail.prev = node
    this.size++
  }

  remove(node: DoubleListNode) {
    node.prev!.next = node.next
    node.next!.prev = node.prev
    this.size--
  }

  removeFirst() {
    if (this.head.next === this.tail) return null
    const firstNode = this.head.next
    this.remove(firstNode!)
    return firstNode
  }

  // MRU
  removeLast() {
    if (this.tail.prev === this.head) return null
    const lastNode = this.tail.prev
    this.remove(lastNode!)
    return lastNode
  }
}
