function isObject(obj) {
  return typeof obj === 'object' && obj !== null
}
function shallowClone(obj) {
  if (!isObject(obj)) return null

  let newObj = {}

  for (let i in obj) {
    newObj[i] = obj[i]
  }
  return newObj
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
// testShallowClone()

function deepClone(obj) {
  if (!isObject(obj)) return null

  function _deepClone(obj, res = {}) {
    for (const i in obj) {
      if (obj[i] === obj) {
        res[i] = res
        continue
      }

      if (isObject(obj[i])) {
        if (Array.isArray(obj[i])) {
          res[i] = _deepClone(obj[i], [])
        } else {
          res[i] = _deepClone(obj[i], {})
        }
      } else {
        res[i] = obj[i]
      }
    }
    return res
  }
  return _deepClone(obj)
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
testDeepClone()
