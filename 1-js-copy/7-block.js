var a = []
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i)
  }
}
a[0]() // 10
a[1]() // 10
a[6]() // 10

var b = []
for (let i = 0; i < 10; i++) {
  b[i] = function () {
    console.log(i)
  }
}
b[0]() // 0
b[1]() // 1
b[6]() // 6
