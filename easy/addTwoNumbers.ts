function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let dummy = new ListNode(0)
  let p3 = dummy
  let sum = 0
  let curr = 0
  let extra = 0

  while (!(l1 === null && l2 === null)) {
    sum = (l1?.val || 0) + (l2?.val || 0) + extra
    curr = sum % 10
    extra = sum > 9 ? 1 : 0

    p3.next = new ListNode(curr)
    p3 = p3.next
    l1 = l1?.next || null
    l2 = l2?.next || null
  }

  if (extra === 1) {
    p3.next = new ListNode(1)
  }

  return dummy.next
}

// 时间复杂度 O(max(l1.length, l2.length))
// 空间复杂度 O(1)

// 如果最后不用返回 head，就直接用 head 去遍历链表
