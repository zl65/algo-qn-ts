class ListNode {
  val: number
  next: ListNode | null

  constructor(val: number) {
    this.val = val
    this.next = null
  }
}

function hasCycle(head: ListNode | null): boolean {
  let fast = head
  let slow = head
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next!
    slow = slow!.next!
    if (fast === slow) {
      return true
    }
  }

  return false
}
