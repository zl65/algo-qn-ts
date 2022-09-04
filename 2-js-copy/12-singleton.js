class Singleton {
  constructor(value) {
    this.value = value
  }
  //静态方法，静态方法无法改变constructor里变量的值
  static getInstance(value) {
    if (!this.instance) {
      this.value = value
      this.instance = new Singleton(value)
    }
    return this.instance
  }
}

let test1 = Singleton.getInstance('hi')
let test2 = Singleton.getInstance('hi2')

console.log(test1, test2, test1 === test2)
