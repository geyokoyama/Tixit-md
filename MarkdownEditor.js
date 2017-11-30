var SimpleMDE = require('simplemde')

registerPlugin(proto(Gem, function () {
    this.name = "MarkdownEditor"

    this.requireFields = function(options) {
        var result = {}
        result[ options.field ] = { type:'text' }
        return result
    }

    this.getStyle =  function () {
        return Style({
            width: "100%"
        })
    }

    // Generate <style> in <head>
    var simplemdeStylesheet = require("raw-loader!./node_modules/simplemde/dist/simplemde.min.css")
    var style = document.createElement('style')
    style.innerHTML = simplemdeStylesheet
    style.innerHTML += ".CodeMirror, .CodeMirror-scroll { min-height: 50px }"
    document.head.appendChild(style)

    this.build = function (ticket, options, api) {

        this.mdContainer = TextArea("mdContainer")
        this.add(this.mdContainer)

        var mdeConfig = {
            element: this.mdContainer.domNode,
            placeholder: "description",
            status: false,
            spellChecker: false,
            toolbar: ["bold", "italic", "code", "|", "unordered-list", "ordered-list", "table", "|", "link", "image", "|", "preview", "guide"]
        }

        // Instantiate Markdown Editor
        var simplemde = new SimpleMDE(mdeConfig)

        // Save and Load
        var ignoreObject = {}
        var fieldObservee = ticket.get(options.subject.field)
        // Initialize Markdown Editor
        simplemde.value(fieldObservee.subject)
        simplemde.togglePreview()
        // Save
       simplemde.codemirror.on("change", function () {

            if (simplemde.value() !== fieldObservee.subject){
                ticket.data({ignore: ignoreObject}).set(options.subject.field, simplemde.value())
            }
        })

        // Load
        fieldObservee.on("change", function (change) {
            if (!(change.data && ignoreObject === change.data.ignore)) {
                simplemde.value(fieldObservee.subject)
            }
        })
    }
}))
