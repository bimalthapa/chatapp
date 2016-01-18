/*
 * spa.shell.js
 * Root namespace module
*/

/*jslint browser:true, continue:true,
  devel:true, indent:2, maxerr:50,
  newcap:true, nomen:true, plusplus:true,
  regexp:true, sloppy:true, vars:true,
  white:true
*/
/*global $, spa */

// Module /spa/
// Provides chat slider capability
//
spa.shell = (function() {
  // Module scope variables
  var configMap = {
    main_html : String()
      + '<div class="spa-shell-head">'
        + '<div class="spa-shell-head-logo"></div>'
        + '<div class="spa-shell-head-acct"></div>'
        + '<div class="spa-shell-head-search"></div>'
      + '</div>'
      + '<div class="spa-shell-main">'
        + '<div class="spa-shell-main-nav"></div>'
        + '<div class="spa-shell-main-content"></div>'
      + '</div>'
      + '<div class="spa-shell-foot"></div>'
      + '<div class="spa-shell-chat"></div>'
      + '<div class="spa-shell-modal"></div>'
  },
  stateMap = { $container: null },
  jqueryMap = {},
  setJqueryMap, initModule;

  // Begin DOM method /setJqueryMap/
  setJqueryMap = function() {
    var $container = stateMap.$container;
    jqueryMap = { $container: $container };
  };

  // Public method /initModule/
  // sets initial state and provides feature
  //
  initModule = function($container) {
    stateMap.$container = $container;
    $container.html(configMap.main_html);
    setJqueryMap();
  };
  return { initModule : initModule };
}());