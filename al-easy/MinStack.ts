class MinStack {
  stack: number[]
  minStack: number[]

  constructor() {
    this.stack = []
    this.minStack = []
  }

  push(val: number): void {
    this.stack.push(val)
    const min = this.minStack.length > 0 ? this.minStack[this.minStack.length - 1] : val
    this.minStack.push(Math.min(val, min))
  }

  pop(): void {
    this.stack.pop()
    this.minStack.pop()
  }

  top(): number {
    return this.stack[this.minStack.length - 1]
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1]
  }
}
