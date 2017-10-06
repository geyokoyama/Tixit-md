var build = require('build-modules')
var emitter = build(__dirname+'/MarkdownEditor.js', {output:{path: __dirname}})
emitter.on('done', function() {
   console.log("Done!")
})
emitter.on('error', function(e) {
   console.log(e)
})
emitter.on('warning', function(w) {
   console.log(w)
})
