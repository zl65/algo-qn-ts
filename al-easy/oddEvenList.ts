function oddEvenList(head: ListNode | null): ListNode | null {
  if (head === null) return null

  const evenHead = head.next

  let odd = head
  let even = evenHead

  while (even !== null && even.next !== null) {
    odd.next = even.next
    odd = odd.next
    even.next = odd.next
    even = even.next
  }
  odd.next = evenHead

  return head
}

function oddEvenList2(head: ListNode | null): ListNode | null {
  if (head === null) return null
  const evenHead = head.next
  let odd = head
  let even = evenHead

  while (even !== null && even.next !== null) {
    odd.next = even.next
    odd = odd.next
    even.next = odd.next
    even = even.next
  }
  odd.next = evenHead
  return head
}

// 时间复杂度 O(n)
// 空间复杂度 O(1)

// 生成两个新的链表并不会占用额外的空间，只是改变原链表的指向
// 要求时间复杂度 O(n) 基本就是遍历链表

// 链表的 while 终止条件经常是 当前不空，并且 next 不空

// 奇数的下一个，就是当前偶数的下一个
// 奇数指针往前移动一步
// 当前偶数的下一个，就是移动后的奇数指针的下一个
// 偶数指针对应移动
