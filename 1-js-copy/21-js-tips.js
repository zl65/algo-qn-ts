// 1
10 < 100 ? console.log(true) : console.log(false)

// 2
// const numbers = [10, 20, 30, 40]
// const allNumbers = [...numbers, 50, 60, 70, 80]
// console.log(allNumbers)

// 3
const numbers = [1, 1, 20, 3, 3, 3, 9, 9]
const uniqueNumbers = [...new Set(numbers)]
// const uniqueNumbers = Array.from(new Set(numbers))
console.log(uniqueNumbers)

// 4
// 0，""，null，undefined，NaN，和false总是假
console.log(!null)

// 5
let x = 1
let y = 2
;[x, y] = [y, x]
console.log(x, y)

// 6
// const num = 1 + ''
// console.log(typeof num)
// console.log(num)

// 7
const numStr = '124'
// NOTE: 字符串转数字
const num = +numStr
console.log(typeof num)
console.log(num)

// 8
const age = 41
const sentence = `I'm ${age} years old`
console.log(sentence)

// 9
const str = 'Test'
// NOTE:展开字符串
const strAsArr = [...str]
console.log(strAsArr)

// 10
const data = { test: { value: 1 } }
if (data && data.test) {
  console.log(data.test.value)
}

const value = data?.test?.value

const readableJSON = JSON.stringify({ a: 'A', b: 'B' }, null, 2)
console.log(readableJSON)
