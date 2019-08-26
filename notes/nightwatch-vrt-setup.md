<link rel="stylesheet" href="/main.css"/>

# Nightwatch VRT Setup

August 1, 2019
  
  - Update August 2, 2019

npm Install

```

npm install nightwatch nightwatch-vrt nightwatch-vrt-reporter concurrently selenium-standalone wait-on chromedriver --save-dev

```

Add Run scripts:

```JSON
    "selenium:install": "selenium-standalone install",
    "selenium:start": "selenium-standalone start & echo $! > selenium.pid",
    "selenium:stop": "kill $(< selenium.pid); rm selenium.pid",
    "nightwatch:chrome": "nightwatch -c ./nightwatch.conf.js -e chrome -r ./node_modules/nightwatch-vrt-reporter/lib/index.js",
    "vrt:runner": "npm run selenium:start ; sleep 2 ; npm run nightwatch:chrome; npm run selenium:stop",
    "vrt": "concurrently 'npm run start' '$(npm bin)/wait-on http://localhost:4200 && npm run vrt:runner' --kill-others --success first",
    "vrt:accept": "rm -rf ./visual-regression/screens/baseline; npm run vrt"
```

Create a config for Nightwatch:


```
touch nightWatch.conf.js && cat nightWatch.conf.js <<EOL
const SCREENSHOT_PATH = './visual-regression/screens/';

// we use a nightwatch.conf.js file so we can include comments and helper functions
module.exports = {
  src_folders: [ './visual-regression/tests' ],
  output_folder: './visual-regression/report',
  selenium: {
    start_process: false, // tells nightwatch to start/stop the selenium process
    host: '127.0.0.1',
    port: 4444, // standard selenium port
  },
  globals_path : "./visual-regression/nightwatchGlobals.js",
  custom_commands_path: [ 'node_modules/nightwatch-vrt/commands', './visual-regression/commands' ],
  custom_assertions_path: [ 'node_modules/nightwatch-vrt/assertions' ],
  test_settings: {
    default: {
      silent: true,
      globals: {
        waitForConditionTimeout: 5000, // sometimes internet is slow so wait.
        visual_regression_settings: {
          latest_screenshots_path: "./visual-regression/screens/latest",
          baseline_screenshots_path: "./visual-regression/screens/baseline",
          diff_screenshots_path: "./visual-regression/screens/diff",
          threshold: 0.05,
          prompt: false,
          always_save_diff_screenshot: false
        }
      }
    },
    chrome: {
      desiredCapabilities: {
        browserName: "chrome",
        chromeOptions: { args: [ "--headless", "--disable-gpu", "--window-size=800,600" ] },
        javascriptEnabled: true // turn off to test progressive enhancement
      }
    },
    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        acceptInsecureCerts: true,
        "moz:firefoxOptions": {
          args: ["--headless"]
        },
        javascriptEnabled: true // turn off to test progressive enhancement
      }
    }
  }
}
EOL

```


Create a visual-regression directory in your project root

```javascript

mkdir visual-regression && cd $_ && mkdir commands && mkdir screens && mkdir screens/diff && mkdir screens/baseline && mkdir screens/latest && mkdir tests

```

Add a utils script

(still in the visual-regression directory)

```
touch utils.js && cat utils.js <<EOL
module.exports =  {
  globalThreshold: 0.001,
  getBrowser(config) {
    if (config.test_settings.chrome && config.test_settings.chrome.output) {
      return 'chrome';
    } else if (config.test_settings.firefox && config.test_settings.firefox.output) {
      return 'firefox';
    } else {
      return 'unknown';
    }
  }
}
EOL
```

Setup Globals

(still in the visual-regression directory)

```
touch nightwatchGlobals.js && cat nightwatchGlobals.js <<EOL
module.exports =  {
  // before : function(cb) {
  //   console.log('GLOBAL BEFORE')
  //   cb();
  // },

  // beforeEach : function(browser, cb) {
    // console.log('GLOBAL beforeEach')
    // cb();
  // },

  // after : function(cb) {
    // console.log('GLOBAL AFTER')
    // cb();
  // },

  afterEach : function(browser, cb) {
    browser.perform(function() {
      console.log('GLOBAL afterEach')
      cb();
    })
  }
}
EOL

```



Create some example commands:

(still in the visual-regression directory)

** also this cat command doesn't work :(

```

touch commands/testIndexPage.js && cat commands/testIndexPage.js <<EOL
var util = require('util');
var EventEmitter = require('events');

function TestIndexPage() {
  EventEmitter.call(this);
}

util.inherits(TestIndexPage, EventEmitter);

TestIndexPage.prototype.command = function(screenWidth, browserName, cb) {
  browser = this;
  if (!screenWidth || !browserName) {
    return browser;
  }
  // Replace '.my-element' with a reference for your page
  browser.api.waitForElementPresent('.my-element', 10000);
  browser.api.resizeWindow(screenWidth, 1080)
    .pause(3000)
    .verify.screenshotIdenticalToBaseline('body', `${screenWidth}/body/${browserName}`, {threshold: 0.05})

  setTimeout(function() {
    // if we have a callback, call it right before the complete event
    if (cb) {
      cb.call(browser.client.api);
    }

    browser.emit('complete');
  }, 100);

  return browser;
};

module.exports = TestIndexPage;
EOL


```

Create an example test

```
cat tests/example-page.js <<EOL
let utils = require('../utils');
let config = require('../../nightwatch.conf.js');

module.exports = { // adapted from: https://git.io/vodU0
  'All Components page': function(browser) {
    browser.url('http://localhost:8080/')
      .testIndexPage(320, browser.capabilities.browserName)
      .testIndexPage(600, browser.capabilities.browserName)
      .testIndexPage(1080, browser.capabilities.browserName)
      .end();
  }
}

EOL

```




Setup Selenuim (you'll have to do this in your CI too)
```
npm run selenium:install
```
