// 比较简单的递归，有很多情况没有考虑
// NOTE: lodash有 clone()和cloneDeep()
function deepCopy(obj) {
  let result = {}
  for (let i in obj) {
    // NOTE:这里不要用typeof，因为null也会得到object
    if (obj[i] != null && typeof obj[i] === 'object') {
      result[i] = deepCopy(obj[i])
    } else {
      result[i] = obj[i]
    }
  }
  return result
}
// test
const obj1 = { a: { b: 1 }, c: { d: 2 } }
const obj2 = deepCopy(obj1)
obj1.a = 2
console.log(obj2.a)

function shallowEqual(object1, object2) {
  const keys1 = Object.keys(object1)
  const keys2 = Object.keys(object2)

  if (keys1.length !== keys2.length) {
    return false
  }

  for (let index = 0; index < keys1.length; index++) {
    const val1 = object1[keys1[index]]
    const val2 = object2[keys2[index]]
    if (val1 !== val2) {
      return false
    }
  }

  return true
}

// NOTE: lodash isEqual()
function deepEqual(object1, object2) {
  const keys1 = Object.keys(object1)
  const keys2 = Object.keys(object2)

  if (keys1.length !== keys2.length) {
    return false
  }

  for (let index = 0; index < keys1.length; index++) {
    const val1 = object1[keys1[index]]
    const val2 = object2[keys2[index]]
    const areObjects = isObject(val1) && isObject(val2)
    if (
      (areObjects && !deepEqual(val1, val2)) ||
      (!areObjects && val1 !== val2)
    ) {
      return false
    }
  }

  return true
}

function isObject(object) {
  return object != null && typeof object === 'object'
}
