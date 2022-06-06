function reverseList(head: ListNode | null): ListNode | null {
  let prev = null
  let curr = head
  // 不能成环
  while (curr !== null) {
    const next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }
  return prev
}

// 递归的关键是回到函数定义
// 接受一个head，返回反转后的head
function reverseList2(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) {
    return head
  }
  const newHead = reverseList2(head.next)
  head.next.next = head
  head.next = null
  return newHead
}
