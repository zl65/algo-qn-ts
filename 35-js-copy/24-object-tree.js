function buildTree(arr) {
  function _buildTree(arr, superId) {
    let tmpArr = []
    arr.map((item) => {
      if (item.superId === superId) {
        item.children = _buildTree(arr, item.id)
        tmpArr.push(item)
      }
    })
    return tmpArr
  }
  const children = _buildTree(arr, 0)
  let res = {}
  list.map((item) => {
    if (item.id === 0) {
      res = { ...item, children }
    }
  })
  return res
}

const list = [
  { id: 0, name: 'yx' },
  { id: 2, name: 'yj', superId: 0 },
  { id: 4, name: 'yd', superId: 0 },
  { id: 7, name: 'yf', superId: 2 },
]

//转换为

const tree = {
  id: 0,
  name: 'yx',
  children: [
    {
      id: 2,
      name: 'yj',
      children: [{ id: 7, name: 'yf' }],
    },
    { id: 4, name: 'yd' },
  ],
}

console.log(JSON.stringify(buildTree(list), null, 2))
