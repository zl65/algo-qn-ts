// 1、构造函数法继承
// 父类
function Parent() {
  this.name = 'Cherry'
}
// 父类的原型方法
Parent.prototype.getName = function () {
  return this.name
}
// 子类
function Child() {
  // NOTE: 继承的实现
  Parent.call(this)
  this.type = 'child'
}
const child = new Child()
console.log(child) // Child { name: 'Cherry', type: 'child' }
console.log(child.getName()) // 报错,找不到getName(), 构造函数继承的方式继承不到父类原型上的属性和方法

// ------------------------------------
// 2、原型链继承
function Parent() {
  this.name = 'Cherry'
  this.play = [1, 2, 3]
}
Parent.prototype.getName = function () {
  return this.name
}
function Child() {
  this.type = 'child'
}
// NOTE:子类的原型对象指向父类实例
Child.prototype = new Parent()
// 根据原型链的规则,顺便绑定一下constructor, 这一步不影响继承, 只是在用到constructor时会需要
Child.prototype.constructor = Child

const child = new Child()
console.log(child) // Parent { type: 'child' }
console.log(child.getName()) // Cherry

// ------------------------------------
// 3、组合式继承
function Parent() {
  this.name = 'Cherry'
  this.play = [1, 2, 3]
}
Parent.prototype.getName = function () {
  return this.name
}
function Child() {
  // NOTE: 构造函数继承
  Parent.call(this)
  this.type = 'child'
}
// NOTE: 原型链继承
Child.prototype = new Parent()
// 如果不指定 Child.prototype.constructor 为 Child，根据原型链规则会默认向上查找，最后会指向 Parent
Child.prototype.constructor = Child

const child1 = new Child()
const child2 = new Child()
console.log(child1) // Child { name: 'Cherry', play: [ 1, 2, 3 ], type: 'child' }
console.log(child1.getName()) // Cherry
child1.play.push(4)
console.log(child1.play, child2.play) // [ 1, 2, 3, 4 ] [ 1, 2, 3 ]

// ---------------------
// 4、寄生式 组合继承
function Parent() {
  this.name = 'Cherry'
  this.play = [1, 2, 3]
}

Parent.prototype.getName = function () {
  return this.name
}

function Child() {
  // NOTE: 构造函数继承
  Parent.call(this)
  this.type = 'child'
}

// NOTE: 将`指向父类实例`改为`指向父类原型`
Child.prototype = Parent.prototype
Child.prototype.constructor = Child

const child1 = new Child()
const child2 = new Child()
console.log(child1) // Child { name: 'Cherry', play: [ 1, 2, 3 ], type: 'child' }
console.log(child1.getName()) // Cherry
child1.play.push(4)
console.log(child1.play, child2.play) // [ 1, 2, 3, 4 ] [ 1, 2, 3 ]

// 新的问题：子类原型和父类原型指向同一个对象，我们对子类原型的操作会影响到父类原型
// 为了解决这个问题，我们会给Parent.prototype做一个浅拷贝

function Parent() {
  this.name = 'Cherry'
  this.play = [1, 2, 3]
}

Parent.prototype.getName = function () {
  return this.name
}

function Child() {
  // NOTE:
  Parent.call(this)
  this.type = 'child'
}
// NOTE: 给Parent.prototype做一个浅拷贝
Child.prototype = Object.create(Parent.prototype)
Child.prototype.constructor = Child

const child1 = new Child()
const child2 = new Child()
console.log(child1) // Child { name: 'Cherry', play: [ 1, 2, 3 ], type: 'child' }
console.log(child1.getName()) // Cherry
child1.play.push(4)
console.log(child1.play, child2.play) // [ 1, 2, 3, 4 ] [ 1, 2, 3 ]
