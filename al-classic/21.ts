function removeNthFromEnd(head: ListNode, n: number): ListNode | null {
  let fast = head
  let slow = head
  let count = 0
  while (count < n) {
    fast = fast.next!
    count++
  }

  if (fast === null) return head.next

  while (fast.next !== null) {
    fast = fast.next
    slow = slow.next!
  }
  slow.next = slow.next!.next
  return head
}
