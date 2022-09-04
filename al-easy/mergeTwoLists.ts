// 循环
// function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
//   let newList = new ListNode(0)
//   let p = newList
//   while (list1 !== null && list2 !== null) {
//     if (list1.val < list2.val) {
//       p.next = list1
//       list1 = list1.next
//     } else {
//       p.next = list2
//       list2 = list2.next
//     }
//     p = p.next
//   }
//   p.next = list1 === null ? list2 : list1
//   return newList.next
// }

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (list1 === null) {
    return list2
  }
  if (list2 === null) {
    return list1
  }
  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2)
    return list1
  } else {
    list2.next = mergeTwoLists(list2.next, list1)
    return list2
  }
}
