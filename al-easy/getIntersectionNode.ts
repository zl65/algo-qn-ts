// function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
//   let p1 = headA
//   let p2 = headB
//   let cc1 = true
//   let cc2 = true
//
//   while (p1 !== null && p2 !== null) {
//     if (p1 === p2) return p1
//     p1 = p1.next
//     p2 = p2.next
//
//     if (cc1 && p1 === null) {
//       p1 = headB
//       cc1 = false
//     }
//     if (cc2 && p2 === null) {
//       p2 = headA
//       cc2 = false
//     }
//   }
//   return p1
// }

// 不需要两个 flag 是因为各自走完 2 个链表的长度，就会相遇

function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  let pA = headA
  let pB = headB
  while (pA !== pB) {
    pA = pA !== null ? pA.next : headB
    pB = pB !== null ? pB.next : headA
  }
  return pA
}



// 时间复杂度 O(A+B)
// 空间复杂度 O(1)

// 思路不难想，难的是写法，自己想出来的总是比较麻烦
