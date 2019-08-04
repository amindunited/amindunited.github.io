# Concurrently and Wait On

August 2, 2019

## Concurrently

Sometimes you need to run multiple multiple NPM run scripts at once.
One of the most popular ways to do this is with [Concurrently](https://www.npmjs.com/package/concurrently). 

Concurrently is easy to use:

1 - Just npm install

```
npm install concurrently --save-dev
```

2 - Modify your package.json to call your multiple commands with concurrently:

```JSON
...
  "start": "concurrently 'npm run mock-server' 'npm run dev' --kill-others --success first"
  "dev": "webpack-dev-server",
  "mock-server": "node server.js",
...
```

What we've done here is call concurrently and pass the commands that we want to run as strings. At the end of the command we've added "--kill-others --success first". "--kill-others" means that if one command dies, they all die, and "--success first" returns the success response from the first command. In the above case, if 'npm run mock-server' returns a success code on exit, concurrently will return that code too. This helps you find failures in you CI.


## Wait On

There are occasions while running multiple commands that you will need one to wait for another to complete a task, but not finish. An example is trying to run end-to-end tests and needing the pages to be served before the tests run. The solution to this is [Wait-on](https://www.npmjs.com/package/wait-on). Wait-on allows you to wait for a web resource before running another command.

Set up is very easy:

1 - npm install

```
npm install wait-on --save-dev
```

2 - Modify your package.json to use wait-on (using the code from above)

```JSON
...
  "start": "concurrently 'npm run mock-server' 'npm run dev' --kill-others --success first"
  "dev": "webpack-dev-server",
  "mock-server": "node server.js",
  "vrt:runner": "node vrt.js",
  "vrt": "concurrently 'npm run mock-server' 'npm run dev' '$(npm bin)/wait-on http://localhost:4200 && npm run vrt:runner'  --kill-others --success first"
...

```

Here we've added a script that runs our VRT code, but because we need the server to be up before is runs, we call wait-on, and pass it the server url, and the vrt run script as a follow up command. We've used the $(npm bin)/ variable because wait-on can lose reference when calling the follow up command.


