let url =
  'http://www.domain.com/?user=anonymous&id=123&id=456&id=789&city=%E5%8C%97%E4%BA%AC&enabled'
console.log(parseParam(url))
/* 结果
{ user: 'anonymous',
  id: [ 123, 456 ], // 重复出现的 key 要组装成数组，能被转成数字的就转成数字类型
  city: '北京', // 中文需解码
  enabled: true, // 未指定值得 key 约定为 true
}
*/

function parseParam(url) {
  let paramsStr = url.split('?')[1]
  let paramsArr = paramsStr.split('&')
  let res = {}
  paramsArr.forEach((element) => {
    let [key, value] = element.split('=')
    // NOTE: 解码
    value = decodeURIComponent(value)
    if (key in res) {
      // NOTE: concat用法
      res[key] = [].concat(res[key], value)
    } else {
      res[key] = value ? value : true
    }
  })
  console.log(res)
}
