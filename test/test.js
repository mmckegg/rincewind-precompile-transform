var precompile = require('../')

var test = require('tape')

test('fs external view', function(t){
  var p = precompile(__filename)
  
  p.on('data', function(data){
    t.equal(data, 
      'var View = require("rincewind")\n'+
      'var render = View({"c": ["   ",{"c":[" <span>",{"c":["I am strong text"],"v":"strong"},"</span> "],"v":"header"}," <div class=\\"",{"q":":css(Object)","e":"attr"},"\\">Content</div>"], "resources": {"Object": {"key":"RSOTT2TBEG-object","path":"./views/object.css"}}, "views": {"header": {"c": ["<h1>",{"vc":true},"</h1>"], "views": {}},"strong": require("./views/strong.js")}})\n'
    )
    t.end()
  })

  p.write('var View = require("rincewind")\n')
  p.write('var render = View(__dirname + "/views/index.html")\n')
  p.end()
})
