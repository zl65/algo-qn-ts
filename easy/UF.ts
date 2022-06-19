class UF {
  count: number
  parent: number[]

  constructor(n: number) {
    // count 表示连通分量，最开始没有联通，一个点是一个，就是节点数
    this.count = n
    // parent[x] 表示的是 x 这个节点的父节点，最开始都是自己
    this.parent = []
    for (let i = 0; i < n; i++) {
      this.parent.push(i)
    }
  }

  // 连接两个节点，先判断是否已经连接了，如果没有的话，再把一个的根指向另一个的
  union(p: number, q: number) {
    const rootP = this.find(p)
    const rootQ = this.find(q)
    if (rootP === rootQ) return
    this.parent[rootP] = rootQ
    // 联通之后，整体的联通分量 -1
    this.count--
  }

  // 最复杂的逻辑，在找根节点的同时，把树的高度缩短了
  find(x: number): number {
    if (this.parent[x] !== x) {
      // 递归还是要回到定义，find这个函数，返回的是最顶层的父级
      // 要注意后边写的不是 this.find(x)，这样写就死循环了，把自己的父级传进去才能形成递归
      this.parent[x] = this.find(this.parent[x])
    }
    // 注意返回值
    return this.parent[x]
  }

  findUsingWhile(x: number): number {
    while (this.parent[x] !== x) {
      // 这一行是为了路经压缩，把这棵树变得矮一点，变矮的办法是每次更新下自己的 parent，往上挪一层
      // 这一行单独看的话，感觉只是把 x 自己挪到了顶层下边，因为不断在找parent
      // 但实际上，下边一行把 x 的值变成了新的 parent，也就是原来 x 的父级的父级
      // 这感觉是一个蛮基础的使二叉树平衡的办法，这两行代码反过来也能做，只是效率和结果不同了
      this.parent[x] = this.parent[this.parent[x]]

      // 如果不考虑路经缩短，只是找的话，这一行就够了，往上循环而已
      x = this.parent[x]
    }
    return x
  }

  // 判断是否联通就是看根是不是一样
  isConnected(p: number, q: number): boolean {
    const rootP = this.find(p)
    const rootQ = this.find(q)
    return rootP === rootQ
  }

  getCount(): number {
    return this.count
  }
}
