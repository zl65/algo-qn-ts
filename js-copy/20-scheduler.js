class Scheduler {
  constructor(count) {
    this.count = count
    this.queue = []
    this.run = []
  }
  add(task) {
    this.queue.push(task)
    this.schedule()
  }
  schedule() {
    if (this.run.length < this.count && this.queue.length > 0) {
      const task = this.queue.shift()
      const promise = task().then(() => {
        this.run.splice(this.run.indexOf(promise), 1)
      })
      this.run.push(promise)
    } else {
      Promise.race(this.run).then(() => {
        console.log('race')
        this.schedule()
      })
    }
  }
}

const scheduler = new Scheduler(2)

function task(type, timer) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('task', type, 'resolved')
      resolve(type)
    }, timer)
  })
}
function addTask(type, timer) {
  scheduler.add(() => {
    return task(type, timer)
  })
  // .then(() => {
  //   console.log('task-', type, 'has been resolved.')
  // })
}

addTask(1, 1000)
addTask(2, 300)
addTask(3, 300)
addTask(4, 1000)
