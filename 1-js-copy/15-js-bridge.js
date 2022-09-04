// should be window.jsBridge
let jsBridge = {
  callbacks: {},
  eventCallbacks: {},
  // 客户端调用webDispath来执行前端的回调
  webDispatch: (callbackId, dataFromClient) => {
    // TODO:最好也改成一个promise
    const params = JSON.parse(dataFromClient)
    // 执行前端的回调，带着客户端给的数据，执行之后删除
    if (callbackId in this.callbacks) {
      this.callbacks[callbackId](params)
      delete this.callbacks[callbackId]
    } else {
      const { eventName, data } = params
      this.eventCallbacks[eventName].forEach((func) => {
        func(data)
      })
    }
  },
  // 前端调用nativeDispatch来执行客户端代码
  nativeDispatch: (string) => {},
}

class SDK {
  // 可以改成promise的写法
  isJsBridgeReady() {
    let intervalID = setInterval(() => {
      if (jsBridge.nativeDispatch) {
        clearInterval(intervalID)
        return true
      }
    }, 0)
  }
  callNative(type, payload, func) {
    // type和payload都是和客户端约定好的

    // TODO: 生成一个唯一的字符串，然后把这个函数放到callbacks里
    let callbackID = Math.random() * 10
    jsBridge.callbacks[callbackID] = func

    // 构造nativeDispatch的参数，然后调用
    let action = { type, payload, func }
    jsBridge.nativeDispatch(JSON.stringify(action))
  }
  addEventListener(eventName, func) {
    jsBridge.eventCallbacks[eventName] =
      jsBridge.eventCallbacks[eventName] || {}
    const eventCallbackId = Math.random() * 10
    jsBridge.eventCallbacks[eventName][eventCallbackId] = func
    return eventCallbackId
  }
  removeEventListener(eventName, id) {
    delete jsBridge.eventCallbacks[(eventName, id)]
  }
}

export default new SDK()

window.hybrid = {
  // 这里存的是前端调用客户端时的回调
  callbacks: {
    callbackId: () => {},
  },

  // 这里存的是前端监听客户端的事件，对应的回调
  eventCallbacks: {
    eventName1: {
      eventCallbackId: () => {},
    },
  },

  // 前端调用客户端
  nativeDispatch: (params) => {},

  // 客户端调用前端
  webDispatch: (callbackId, params) => {
    // 有callbackId就去callbacks里找，然后执行，
    // 没有就去eventCallbacks里找
  },
}

// 参数都要变成字符串形式
params = {
  action_type: 'action_type',
  payload: {},
  callbackId: 'callbackId',
}
