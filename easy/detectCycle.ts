function detectCycle(head: ListNode | null): ListNode | null {
  let fast = head
  let slow = head
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next
    slow = slow!.next
    if (fast === slow) {
      break
    }
  }
  if (fast === null || fast.next === null) return null
  slow = head
  while (fast !== slow) {
    fast = fast!.next
    slow = slow!.next
  }
  return slow
}
