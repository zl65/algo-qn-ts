function toCamel(str) {
  let arr = str.split('-')
  let res = arr.map((item, index) => {
    if (index !== 0) {
      return item.charAt(0).toUpperCase() + item.slice(1)
    } else {
      return item
    }
  })
  return res.join('')
}

// console.log(toCamel('tet-kj'))

function getCamelCase(str) {
  return str.replace(/_([a-z])/g, function (match) {
    return match.substring(1).toLowerCase()
  })
}

function styleHyphenFormat(propertyName) {
  return propertyName.replace(/[A-Z]/g, function upperToHyphenLower(match) {
    return '-' + match.toLowerCase()
  })
}

// console.log(styleHyphenFormat('borderTop'))

function practice(str) {
  return str.replace(/-[a-z]/g, (match) => {
    return match.substring(1).toUpperCase()
  })
}
console.log(practice('border-top'))
