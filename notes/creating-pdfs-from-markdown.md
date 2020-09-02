# Creating PDFs from Markdown

## Install

```
npm install md-to-pdf --save-dev
```


## Script

```
// create-pdf.js
const path = require('path');
const { promises } = require('fs');
const { writeFile } = promises;
const { mdToPdf } = require('md-to-pdf');

const entryPoint = process.argv[2];

const convert = async (entryPoint) => {

  const fullPath = path.resolve(process.cwd(), entryPoint);
  const pdfFileName = path.basename(fullPath).replace(/\.(md|markdown)/, '.pdf');
  const pdfOutput = path.resolve(path.dirname(fullPath), pdfFileName);
  
  const pdf = await mdToPdf({
    path: fullPath,
    marked_options: {
      gfm: true, // Github Flavoured Markdown
      breaks: true // Github Syle Line Breaks
    }
  }).catch(console.error);
  
  if (pdf) {
    await writeFile(pdfOutput, pdf.content);
  }

};

if (entryPoint) {
  convert(entryPoint);
} else {
  console.error('Error entry point not set')
}
```

## Run Command
```
node ./create-pdf.js ./path/to/file.md
```
