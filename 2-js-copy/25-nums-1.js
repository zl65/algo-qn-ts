function format(num) {
  if (!num) {
    return 'NaN'
  }
  /**
   * 要点
   * 1. reduce函数不传初始值的时候，prev会取数组的index 0，curr会从index 1开始，index也会从1开始，直接跳过0（我也第一次知道，惊
   * 2. 所以不用考虑index为0的时候，0%3=0，的情况，因为直接从1开始了
   * 3. 所以num=1234567时，index为3的时候（倒着数第4个数字），就是4，4的后面加上逗号刚好是对的，后面的情况依此类推
   * 4. 这个方法没有考虑有小数的情况
   */
  return num
    .toString()
    .split('')
    .reverse() // 反过来
    .reduce((prev, curr, index) => {
      console.log(prev, curr, index)
      return (index % 3 === 0 ? curr + ',' : curr) + prev
    })
}

function main() {
  const res = format(1234567)
  console.log('res: ', res)
}

main()
