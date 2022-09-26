function Node(val, next, random) {
  this.val = val
  this.next = next
  this.random = random
}

function copyRandomList(head) {
  if (head === null) return null

  const map = new Map()
  let p = head
  while (p !== null) {
    map.set(p, new Node(p.val))
    p = p.next
  }
  p = head
  while (p !== null) {
    map.get(p).next = p.next ? map.get(p.next) : null
    map.get(p).random = p.random ? map.get(p.random) : null
    p = p.next
  }
  return map.get(head)
}
