const sep = ","
const nullStr = "*"

function serialize(root: TreeNode | null): string {
  let res = ""

  function pre(node: TreeNode | null) {
    if (node === null) {
      res = res + nullStr + sep
      return
    }
    res = res + node.val + sep
    pre(node.left)
    pre(node.right)
  }

  function post(node: TreeNode | null) {
    if (node === null) {
      res += nullStr + sep
      return
    }
    post(node.left)
    post(node.right)
    res += node.val + sep
  }

  function bfs() {
    const q = [root]
    while (q.length > 0) {
      const nodeCount = q.length
      for (let i = 0; i < nodeCount; i++) {
        const root = q.shift()
        if (root === null) {
          res += nullStr + sep
        } else {
          res += root!.val + sep
          q.push(root!.left)
          q.push(root!.right)
        }
      }
    }
  }

  // pre(root)
  // post(root)
  bfs()

  // 最后一个是分隔符，把分隔符去掉
  // 前序遍历不去掉也没事，是因为最后到 null 就结束了，最后一个进不去
  // 但后序遍历从后往前，这个就很重要了
  return res.substring(0, res.length - 1)
}

function deserialize(data: string): TreeNode | null {
  const dataArr = data.split(sep)

  function dePre(): TreeNode | null {
    if (dataArr.length === 0) return null
    const first = dataArr.shift()
    if (first === nullStr) return null
    const node = new TreeNode(Number(first))
    // 巧妙的地方就是这里，本来我觉得左右子树的边界没办法确定，这怎么遍历
    // 但实际上每次把 first 取出来，left 构造出来之后，剩下的就是 right 了
    // 后续遍历同理
    node.left = dePre()
    node.right = dePre()
    return node
  }

  function dePost(): TreeNode | null {
    if (dataArr.length === 0) return null
    const last = dataArr.pop()
    if (last === nullStr) return null
    const root = new TreeNode(Number(last))
    root.right = dePost()
    root.left = dePost()
    return root
  }

  function deBfs(): TreeNode | null {
    if (dataArr.length === 0) return null

    const q: (TreeNode | null)[] = []
    const root =
      dataArr[0] === nullStr ? null : new TreeNode(Number(dataArr[0]))
    q.push(root)

    // 注意 0 是 root，第一次的子节点是从 1 开始的
    let i = 1
    while (i < dataArr.length) {
      const parent = q.shift()
      if (parent === null) continue

      const left = dataArr[i++]
      if (left === nullStr) {
        parent!.left = null
      } else {
        parent!.left = left === nullStr ? null : new TreeNode(Number(left))
      }
      q.push(parent!.left)

      const right = dataArr[i++]
      if (right === nullStr) {
        parent!.right = null
      } else {
        parent!.right = right === nullStr ? null : new TreeNode(Number(right))
      }
      q.push(parent!.right)
    }
    return root
  }

  return deBfs()
}
