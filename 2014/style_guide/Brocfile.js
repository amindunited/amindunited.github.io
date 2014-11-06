 var concatenate = require('broccoli-concat'),
    mergeTrees  = require('broccoli-merge-trees'),
    pickFiles   = require('broccoli-static-compiler'),
    /*uglifyJs    = require('broccoli-uglify-js'),*/
    app = '.',//'app',
    appCss,
    appHtml,
    appJs;

var vendorFiles = [

    "./bower_components/jquery/dist/jquery.js",
    /*"bower_components/jquery-ui/jquery-ui.js",*/
    /*"bower_components/gridster/dist/jquery.gridster.css",*/
    /*"bower_components/FileSaver/FileSaver.min.js",*/
    /*"bower_components/jszip/jszip.min.js",*/
    /*"bower_components/jquery-mockjax/jquery.mockjax.js",*/
    "bower_components/handlebars/handlebars.js",
    "bower_components/ember/ember.js",
    /*"bower_components/ember-cloaking/ember-cloaking.js",
    "bower_components/ace-builds/src/ace.js",
    "bower_components/mousetrap/mousetrap.js"*/

    "bower_components/customSelect/jquery.customSelect.js",
    "bower_components/iCheck/icheck.min.js",
    "bower_components/jscrollpane/script/mwheelintent.js",
    "bower_components/jscrollpane/script/jquery.mousewheel.js",
    "bower_components/jscrollpane/script/jquery.jscrollpane.min.js",
    "bower_components/iscroll/build/iscroll.js"
];
//vendorFiles = "./bower_components/jquery/dist/jquery.js";
	/** HTML */

    /** 
     * move the index.html file from the project /app folder
     * into the build production folder
     */
     /*
    appHtml = pickFiles(app, {
        srcDir  : '/',
        files   : ['index.html'],
        destDir : '/production'
    });
	*/



	/** JS */
    /**
     * concatenate and compress all of our JavaScript files in 
     * the project /app folder into a single app.js file in 
     * the build production folder
     */
    vendorJs = concatenate('./', {
        inputFiles : vendorFiles,
        outputFile : '/vendor.js',
        header     : '/** Copyright Robin Buckley. 2014 **/'
    });

    appJs = concatenate('./', {
        inputFiles : ['src/**/*.js'],
        outputFile : '/app.js',
        header     : '/** Copyright Robin Buckley. 2014 **/'
    });
    /*
    appJs = uglifyJs(appJs, {
        compress: true
    });
	*/




	/** CSS */
    /**
     * compile all of the SASS in the project /resources folder into 
     * a single app.css file in the build production/resources folder
     */
     /*
    appCss = compileSass(
        ['resources/sass'],
        '/app.scss',
        'production/resources/app.css'
    );
*/


    // merge HTML, JavaScript and CSS trees into a single tree and export it
    //module.exports = mergeTrees([appHtml, appJs, appCss]);
	module.exports = mergeTrees([vendorJs, appJs]);





