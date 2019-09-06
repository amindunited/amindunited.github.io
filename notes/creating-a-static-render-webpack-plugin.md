# Creating a Static Render Webpackplugin

(with jsdom)



Creating a webpack plugin:

```javascript

class WebpackPrerenderPlugin {

  // Webpack will call the apply method on the class
  apply (compiler) {

    compiler
      .hooks
      .done //there are lots of hooks check the docs 
      .tapAsync('WebpackPrerender',
        (compilation, callback) => {
        //...do stuff
        //...then callback(); 
      });
}

```

JSDOM renderer

```javascript
const jsdom = require('@amindunited/jsdom');
const { JSDOM } = jsdom;
const express = require('express');

const app = express();
// Add config directories here...
app.use(express.static('public'));
app.listen(3000, () => console.log('listening on port 3000!'));

// Handle resource loading (src=, href=,...)
const resourceLoader = new jsdom.ResourceLoader({
  proxy: "http://localhost:3000/",
  strictSSL: false,
});

const dom = JSDOM
  .fromURL(`http://localhost:3000/${entry}`,
  {
        runScripts: 'dangerously',
        pretendToBeVisual: true,
        resources: resourceLoader
      }).then((dom) => {
        dom.window.addEventListener("DOMContentLoaded", () => {
          dom.serialize());
        });
      }, () => {
        console.log('errrrrrrr');
      })

```
