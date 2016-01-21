/*
 * spa.chat.js
 * Chat feature module for SPA
*/

/*jslint browser : true, container : true,
  devel : true, indent : 2, maxerr : 50,
  newcap : true, nomen : true, plusplus : true,
  regexp : true, sloppy : true, vars : false,
  white : true
*/

/*global $, spa */

spa.chat = (function(){
  var
    configMap = {
      main_html : String()
        + '<div style="padding:1em; color:#fff;">'
          + 'Say hello to chat'
        + '</div>',
      settable_map : {}
    },
    stateMap = { $container: null },
    jqueryMap = {},
    setJqueryMap, configModule, initModule;

    // Begin DOM method /setJqueryMap/
    setJqueryMap = function() {
      var $container = stateMap.$container;
      jqueryMap = { $container : $container };
    };

    // Begin public method /configModule/
    // Purpose    : Adjust configuration of allowed keys
    // Arguments  : A map of settable keys and values
    //    * color_name - color to use
    // Settings   :
    //    * configMap.settable_map declares allowed keys
    // Returns    : true
    // Throws     : none
    //
    configModule = function (input_map) {
      spa.util.setConfigMap({
        input_map : input_map,
        settable_map : configMap.settable_map,
        configMap : configMap
      });
      return true;
    };

    // Begin public method /initModule/
    // Purpose    : Initializes module
    // Arguments  :
    //    * $container the jquery element used by this feature
    // Returns    : true
    // Throws     : none
    //
    initModule = function ($container) {
      $container.html(configMap.main_html);
      stateMap.$container = $container;
      setJqueryMap();
      return true;
    };

    // return public methods
    return {
      configModule : configModule,
      initModule : initModule
    };
}());