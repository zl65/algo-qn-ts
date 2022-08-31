function myNew(constructor, args) {
  // NOTE: const obj = Object.create(constructor.prototype)
  const obj = {}
  obj.__proto__ = constructor.prototype
  const result = constructor.apply(obj, args)
  // NOTE: 考虑构造函数有返回值的情况
  return result instanceof Object ? result : obj
}
