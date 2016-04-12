/** ////////////////////////////////////////////////////////////////////////
 *
 * Example application to demonstrate importing modules via Browserify
 *
 //////////////////////////////////////////////////////////////////////// */

/**
 * Logger module
 * @type {function}
 */
var logger = require('modules/logger');

/**
 * Stores app name for demo
 * @type {string}
 * @private
 */
var _appName = 'Demo';

/**
 * Registers demo application
 * @private
 */
function _registerApp() {

    /**
     * @name _init
     * @method
     * @description
     * Initializes application by logging its name
     *
     * @private
     */
    function _init() {
        logger('Hello World! This apps name is ', _appName);
    }

    /**
     * On instantiation, initialize app
     */
    _init();
}

/**
 * Startup app on load
 */
document.addEventListener('ready', _registerApp);
