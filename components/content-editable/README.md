content-editable
============

Custom element making children editable and triggers save event on blur, built with [Polymer](https://www.polymer-project.org/).

See the [component page](http://mikaelharsjo.github.io/content-editable/components/content-editable/) for more information.




## Example
```html
<content-editable>
  <h1>I am an editable heading</h1>
</content-editable>
```

## Contributing

Try out the component via demo.html file via a local web server. There are several ways to do this but one easy method is to run a simple web server that ships with Python, using the commands:

```sh
python -m SimpleHTTPServer
```

Or other method using NodeJS:

```sh
npm install -g http-server
http-server ./ -p 8000
```

This starts a web server on port 8000, so you can try the element by navigating a browser to `localhost:8000/test/index.html`.

### web-component-tester

The tests are also compatible with [web-component-tester](https://github.com/Polymer/web-component-tester). You can run them on multiple local browsers via:

```sh
npm install -g web-component-tester
wct
```
