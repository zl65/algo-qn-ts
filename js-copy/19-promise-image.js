function loadImageWithPromise(src) {
  return new Promise((resolve, reject) => {
    const image = new Image()
    image.onload = () => {
      resolve('success')
    }
    image.onerror = () => {
      reject(new Error('error'))
    }
    image.src = src
  })
}
