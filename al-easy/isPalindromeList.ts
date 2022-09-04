function isSame(list1: ListNode, list2: ListNode): boolean {
  let p1 = list1
  let p2 = list2
  while (p1 !== null) {
    if (p1.val !== p2.val) {
      return false
    }
    p1 = p1.next!
    p2 = p2.next!
  }
  return true
}

function isPalindrome(head: ListNode | null): boolean {
  if (head === null) {
    return false
  }
  let fast = head
  let slow = head
  // 关键问题还是链表迭代是从第二个开始的
  while (fast.next !== null && fast.next.next !== null) {
    fast = fast.next.next
    slow = slow.next!
  }
  const newHead = reverseList(slow.next)

  let p1 = head
  let p2 = newHead
  let result = true
  while (result && p2 != null) {
    if (p1.val !== p2.val) {
      result = false
    }
    p1 = p1.next!
    p2 = p2.next
  }

  // 还原链表并返回结果
  slow.next = reverseList(newHead)
  return result
}
