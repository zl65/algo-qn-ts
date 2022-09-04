function permute(nums: number[]): number[][] {
  let res: number[][] = []

  // 最好都传参，函数式编程
  function backtrack(nums: number[], selected: number[]) {

    // 终止条件，什么时候结束，对应的思考，二叉树遍历什么时候到达最底层，比如是null
    if (nums.length === selected.length) {
      // 注意这里直接用selected其实是同一个数组的引用，最后都会是空
      // 即使是传参，每次都是新的，但这个新是一个新的字符串对应selected的引用，但还是引用
      res.push(selected.concat())
      return
    }
    // 思考对应一棵树的一个每一个叶子节点进行遍历
    // 正常不能直接遍历，因为叶子节点的数量不是 nums，要更少，因为这个节点加上它上下所有的连接起来的点正好是 nums
    // 但是巧妙的是，selected 记录了它上边的所有点，所以只要判断当前遍历到的在不在 selected 里即可，不在就可以选
    for (let i = 0; i < nums.length; i++) {
      if (selected.includes(nums[i])) continue

      // 进入到下一层之前，把当前节点记录上
      selected.push(nums[i])
      backtrack(nums, selected)

      // 已经从下一层出来，下边的结果都拿到了，这时候再把自己回退掉

      // 继续同一层的兄弟节点的遍历
      selected.pop()
    }
  }

  backtrack(nums, [])
  return res
}


