var tpl =
  '<% for(var i = 0; i < this.posts.length; i++) {' +
  'var post = posts[i]; %>' +
  '<% if(!post.expert){ %>' +
  '<span>post is null</span>' +
  '<% } else { %>' +
  '<a href="#"><% post.expert %> at <% post.time %></a>' +
  '<% } %>' +
  '<% } %>'

var data = {
  posts: [1, 2, 3],
}

var tplEngine = function (tpl, data) {
  var reg = /<%([^%>]+)?%>/g,
    regOut = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g,
    code = 'var r=[];\n',
    cursor = 0

  var add = function (line, js) {
    js
      ? (code += line.match(regOut) ? line + '\n' : 'r.push(' + line + ');\n')
      : (code +=
          line != '' ? 'r.push("' + line.replace(/"/g, '\\"') + '");\n' : '')
    return add
  }
  while ((match = reg.exec(tpl))) {
    add(tpl.slice(cursor, match.index))(match[1], true)
    cursor = match.index + match[0].length
  }
  add(tpl.substr(cursor, tpl.length - cursor))
  code += 'return r.join("");'
  return new Function(code.replace(/[\r\t\n]/g, '')).apply(data)
}
console.log(tplEngine(tpl, data))
