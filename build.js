const fs = require('fs');
const fetch = require('node-fetch');

fetch('http://registry.npmjs.com/-/v1/search?text="@amindunited"')
.then((blob) => blob.json())
.then((result) => {
  fs.writeFileSync('./npm-files.js', `const amuNPMModules = ${JSON.stringify(result.objects, null, 2)}`);
});
