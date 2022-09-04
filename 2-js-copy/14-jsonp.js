function handleResult(res) {
  console.log(res)
}

handleResult('res')

function addScript(src) {
  const script = document.createElement('script')
  script.src = src
  script.type = 'text/javascript'
  document.appendChild(script)
}

addScript('http://xx.com/xx.js?callback=handleResult')

function jsonp(baseUrl, params, callback) {
  const getUrl = () => {}
  const addScript = () => {}
  addScript(getUrl())
}
