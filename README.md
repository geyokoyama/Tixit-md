![picture of markdown editor without content](https://github.com/GeorgeEYokoyama/Tixit-md/blob/master/plugin-images/default.PNG)  
# Tixit-md

A markdown editor plugin to make creating easier-to-read documentation for [Tixit](https://tixit.me).  
For more information about Tixit plugins go here: [http://docs.tixit.me/d/Plugin_API](http://docs.tixit.me/d/Plugin_API)

## How to Use
The plugin needs configuring in both the layout and the schema in order to be used.  
1. Go into the Tixit Settings and choose `Edit Layouts`. Create a layout with the `Markdown Editor` added.  
2. Then click `Edit Schemas`, then `Add new schema`. Finally, click `Add Field` and enter the name as `description`.  
It should look like the following:  
![schema picture](https://github.com/GeorgeEYokoyama/Tixit-md/blob/master/plugin-images/schema.PNG)  

## Dependency
The  following are APIs that this application is dependent on:
* [SimpleMDE]("https://simplemde.com/") - [GitHub](https://github.com/sparksuite/simplemde-markdown-editor), [npm](https://www.npmjs.com/package/simplemde)

## Todo
* Reduce toolbar height (low priority)
* Allow direct editing in wysiwygmode (low priority)

## Pictures
This is what it looks like when you type:  
![Not rendered](https://github.com/GeorgeEYokoyama/Tixit-md/blob/master/plugin-images/preRender.PNG)

And this is how it looks like when you click on the eye icon on the top right:  
![Rendered](https://github.com/GeorgeEYokoyama/Tixit-md/blob/master/plugin-images/postRender.PNG)

## How to Contribute
How to submit a pull request:
1. Fork the repository
2. Clone your forked repo on your machine and run `npm install` at its root
3. Edit
4. Commit and push your changes
5. Submit a pull request: [http://help.github.com/articles/creating-a-pull-request](http://help.github.com/articles/creating-a-pull-request)

## License
Released under the MIT license: [https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT)
