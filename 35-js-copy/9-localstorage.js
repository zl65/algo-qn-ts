class MyLocalStorage {
  constructor() {
    this.data = {}
  }
  setItem(key, value) {
    this.data = {
      ...this.data,
      [key]: value,
    }
  }
  getItem(key) {
    return this.data[key]
  }
  removeItem(key) {
    this.data[key] && delete this.data[key]
  }
  clear() {
    this.data = {}
  }
  print() {
    console.log(this.data)
  }
}

let test = new MyLocalStorage()
test.setItem('a', 'A')
test.print()
console.log(test.getItem('a'))
test.removeItem('a')
test.print()
