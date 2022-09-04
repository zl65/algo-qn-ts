class Solution {
  nums: number[]
  originNums: number[]

  constructor(nums: number[]) {
    this.nums = nums
    this.originNums = this.nums.slice()
  }

  reset(): number[] {
    this.nums = this.originNums.slice()
    return this.nums
  }

  // 这个题目写完不对后来又调了很久，思想上没什么问题，主要是循环里用到的变量的取值，小问题很多
  shuffle(): number[] {
    let end = this.nums.length - 1
    while (end >= 0) {
      // 随机数范围很重要
      const random: number = Math.floor(Math.random() * (end + 1))
      const tmp = this.nums[random]
      this.nums[random] = this.nums[end]
      this.nums[end] = tmp
      end--
    }
    console.log(this.nums)
    return this.nums
  }
}


const obj = new Solution([-6, 10, 184])
obj.reset()
obj.shuffle()
obj.reset()
obj.shuffle()
obj.reset()
obj.shuffle()

obj.reset()
obj.shuffle()
obj.reset()
obj.shuffle()
obj.reset()
obj.shuffle()
obj.reset()
obj.shuffle()
obj.reset()
obj.shuffle()
obj.reset()
obj.shuffle()
obj.reset()
obj.shuffle()
obj.reset()
obj.shuffle()


// 方法一，遍历，每次选一个，选完就删掉，js 的 splice函数 可以做到删除数组中的一个元素
