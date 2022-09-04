function myAtoi(s: string): number {
  const INT_MAX = Math.pow(2, 31) - 1
  const INT_MIN = -Math.pow(2, 31)
  const table = {
    'start': ['start', 'signed', 'in_number', 'end'],
    'signed': ['end', 'end', 'in_number', 'end'],
    'in_number': ['end', 'end', 'in_number', 'end'],
    'end': ['end', 'end', 'end', 'end'],
  }

  function getColumn(input: string) {
    if (input === ' ') {
      return 0
    }
    if (input === '+' || input === '-') {
      return 1
    }
    if (input.charCodeAt(0) >= 48 && input.charCodeAt(0) <= 57) {
      return 2
    }
    return 3
  }

  let state = 'start'
  let res = 0
  let sign = 1
  for (let i = 0; i < s.length; i++) {
    // @ts-ignore
    state = table[state][getColumn(s[i])]
    console.log(res, s[i], state)

    switch (state) {
      case 'signed':
        if (s[i] === '-') {
          sign = -1
        }
        break
      case 'in_number':
        if (sign > 0) {
          res = res <= ((INT_MAX - Number(s[i])) / 10) ? res * 10 + Number(s[i]) : INT_MAX
        } else {
          res = res <= ((-INT_MIN - Number(s[i])) / 10) ? res * 10 + Number(s[i]) : -INT_MIN
        }
        break
      default:
        break
    }
  }
  return res * sign
}

console.log(myAtoi('  -42'))
