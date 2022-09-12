function validateStackSequences(pushed: number[], popped: number[]): boolean {
  const stack: number[] = []
  let j = 0
  for (let i = 0; i < pushed.length; i++) {
    stack.push(pushed[i])
    while (stack.length > 0 && stack[stack.length - 1] === popped[j]) {
      stack.pop()
      j++
    }
  }
  return stack.length === 0
}
