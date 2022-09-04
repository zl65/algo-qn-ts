function thousand(num) {
  let [intStr, others] = num.toString().split('.')
  intStr = intStr
    .split('')
    .reverse()
    .map((item, index) => {
      return (index + 1) % 3 === 0 ? `,${item}` : item
    })
    .reverse()
    .join('')
  console.log(intStr)
  return `${intStr}.${others}`
}

console.log(thousand(2343512324.3423))
