![picture of markdown editor without content]()  
# Tixit-md

A markdown editor plugin to make creating easier-to-read documentation for [Tixit](https://tixit.me).  
For more information about Tixit plugins go here: [http://docs.tixit.me/d/Plugin_API](http://docs.tixit.me/d/Plugin_API)

## How to Use
The plugin needs configuring in both the layout and the schema in order to be used.  
1. Go into the Tixit Settings and choose `Edit Layouts`. Create a layout with the `Markdown Editor` added.  
2. Then click `Edit Schemas`, then `Add new schema`. Finally, click `Add Field` and enter the name as `description`.  
It should look like the following:  
![schema picture]()  

## Dependency
The  following are APIs that this application is dependent on:
* [SimpleMDE]("https://simplemde.com/") - [GitHub](https://github.com/sparksuite/simplemde-markdown-editor), [npm](https://www.npmjs.com/package/simplemde)

## Todo
* Reduce toolbar height (low priority)
* Allow direct editing in wysiwygmode (low priority)

## Pictures
![Not rendered]()
![Rendered]()

## License
Released under the MIT license: [https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT)
