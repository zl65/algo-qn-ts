function cycle(obj, parent) {
  //表示调用的父级数组
  var parentArr = parent || [obj]
  for (var i in obj) {
    if (typeof obj[i] === 'object') {
      //判断是否有循环引用
      parentArr.forEach((pObj) => {
        if (pObj === obj[i]) {
          obj[i] = '[cycle]'
        }
      })
      cycle(obj[i], [...parentArr, obj[i]])
    }
  }
  return obj
}
var a = {
  b: {
    c: {},
  },
}

a.b.c.d = a

// console.log(cycle(a))
let flag = false

function hasCycle(obj, arr) {
  let parentArr = arr || [obj]
  for (let i in obj) {
    if (typeof obj[i] === 'object' && obj[i] !== null) {
      for (let j = 0; j < parentArr.length; j++) {
        if (parentArr[j] === obj[i]) {
          flag = true
          return
        }
      }
      hasCycle(obj[i], [...parentArr, obj[i]])
    }
    // if (flag === true) return flag
  }
  return flag
}
// console.log(hasCycle(a))

function dfsCycle(param) {
  let hasCycle = false

  function _dfsCycle(obj, parArr) {
    if (hasCycle) return
    if (typeof obj !== 'object' || obj === null) return
    for (let i in obj) {
      for (let j = 0; j < parArr.length; j++) {
        if (obj[i] === parArr[j]) {
          hasCycle = true
          return
        }
      }
      _dfsCycle(obj[i], [...parArr, obj[i]])
    }
  }

  _dfsCycle(param, [])
  return hasCycle
}

console.log(dfsCycle(a))
