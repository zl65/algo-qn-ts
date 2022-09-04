function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (head === null) {
    return null
  }

  let fast: ListNode | null = head
  let slow: ListNode | null = head
  // 题目说明 n <= listSize
  for (let i = 0; i < n; i++) {
    fast = fast.next!
  }
  // 起点的时候fast就已经是head，第1个节点，所以1次循环以后就到第2个节点了，
  // n 次循环后，fast 已经到了链表外
  if (fast === null) {
    return head.next
  }
  while (fast.next !== null) {
    fast = fast.next
    slow = slow.next!
  }
  slow.next = slow.next!.next
  return head
}
