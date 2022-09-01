function getType(value) {
  // 判断数据是 null 的情况
  if (value === null) {
    return value + ''
  }
  // 判断数据是引用类型的情况
  if (typeof value === 'object') {
    let valueClass = Object.prototype.toString.call(value)
    let type = valueClass.split(' ')[1].split('')
    type.pop()
    return type.join('').toLowerCase()
  } else {
    // 判断数据是基本数据类型的情况和函数的情况
    return typeof value
  }
}

function practice(value) {
  if (value === null) {
    return 'null'
  }
  if (typeof value === 'object') {
    let tmp = Object.prototype.toString.call(value)
    // [object Array]
    return tmp.split('').slice(8, -1).join('').toLowerCase()
  } else {
    return typeof value
  }
}

console.log(practice([1]))
