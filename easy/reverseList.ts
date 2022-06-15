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

// 未验证过：建立一个dummy的头，每次都把原链表当前的节点放到dummy的下一个，最后返回dummy.next
