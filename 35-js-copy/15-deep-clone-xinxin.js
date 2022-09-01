function shallowClone(obj) {
  if (!obj) {
    return null
  }
  const res = {}
  for (const key in obj) {
    res[key] = obj[key]
  }
  return res
}

function shallowClone1(obj) {
  return { ...obj }
}

function testShallowClone() {
  const obj = {
    a: 1,
    b: { c: 2 },
    c: { d: { e: true } },
    f: [1, 2, 3],
  }
  obj.g = obj

  const obj1 = shallowClone(obj)
  obj.a = 111
  obj.b.c = 222
  obj.c.d.e = false
  obj.f[0] = 111
  console.log('obj: ', obj)
  console.log('obj1: ', obj1)
}
testShallowClone()

/** ================================================== */

function deepClone(obj) {
  if (!obj) {
    return null
  }

  function recur(obj, res = {}) {
    for (const key in obj) {
      // 处理循环引用的情况
      if (obj[key] === obj) {
        res[key] = res
        continue
      }

      if (typeof obj[key] === 'object') {
        res[key] = Array.isArray(obj[key]) ? [] : {}
        recur(obj[key], res[key])
      } else {
        res[key] = obj[key]
      }
    }
    return res
  }
  return recur(obj)
}

function deepClone1(obj) {
  return JSON.parse(JSON.stringify(obj))
}

function testDeepClone() {
  const obj = {
    a: 1,
    b: { c: 2 },
    c: { d: { e: true } },
    f: [1, 2, 3],
  }
  obj.g = obj

  const obj1 = deepClone(obj)
  obj.a = 111
  obj.b.c = 222
  obj.c.d.e = false
  obj.f[0] = 111
  console.log('obj: ', obj)
  console.log('obj1: ', obj1)
}
// testDeepClone();
