const { v4: uuidv4 } = require('uuid')

class MyEvent {
  constructor() {
    this.eventList = {}
  }
  on(action, callback) {
    const id = uuidv4()
    this.eventList[action]
      ? (this.eventList[action][id] = callback)
      : (this.eventList[action] = { [id]: callback })
    return id
  }
  emit(action, payload) {
    if (this.eventList[action]) {
      for (let key in this.eventList[action]) {
        this.eventList[action][key](payload)
      }
    } else {
      console.log('There are no callbacks for', action)
    }
  }
  removeEvent(action, id) {
    if (this.eventList[action]) {
      delete this.eventList[action][id]
    }
  }
}

const test = new MyEvent()
const id = test.on('action1', function (data) {
  console.log('action1 triggered', data)
})
test.on('action1', function (data) {
  console.log('action1-2 triggered', data)
})
test.on('action2', function (data) {
  console.log('action2 triggered', data)
})

test.emit('action1', 'payload for action1')
test.emit('action3', 'payload for action3')

test.removeEvent('action1', id)
test.emit('action1', 'payload for action1')
