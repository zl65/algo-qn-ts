class Student {
  constructor() {
    this.name = "Jerry"
  }

  getInfo() {
    return {
      name: "Peter",
      sayName: function () {
        console.log(this.name)
      },
    }
  }
}

const stuIns = new Student()
stuIns.getInfo().sayName()
