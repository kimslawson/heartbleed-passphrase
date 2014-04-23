/**
 * Responsive Type jQuery Plugin
 *
 * Version 1.1
 * Updated 31/05/2012
 *
 * Copyright (c) 2012 Zach Inglis   (@zachinglis)
 *                    Laura Sanders (@teawithlemon)
 *
 * Usage: $("html").responsiveType();
 *
 * Or for customisation, you can input options:
 *            $("html").responsiveType(minSize: 62.5,
 *                                     maxSize: 82,
 *                                     minWidth: 320,
 *                                     maxWidth: 1280);
 *
 *
 * If you want to get the font smaller the larger your browser (as requested by @nathan_ford), then you can use the reverse option.
 *            $("html").respnsiveType(…options…
 *                                    reverse: true);
 *
 *
 *
 * NOTE: Don't forget to make a backup CSS rule for font size in case this stops working! It's a progressive enhancement.
 */

// min-size/max-size are %
// min-width/max-width are px

(function($) {
$.fn.responsiveType = function(options) {

  if (!this.length) { return this; }

  var opts = $.extend(true, {}, $.fn.responsiveType.defaults, options);

  this.each(function() {
    var $this = $(this);

    $(document).bind('ready', function () {
      $this.setResponsiveType(opts);
    });

    $(window).bind('resize', function () {
      $this.setResponsiveType(opts);
    });
  });

  return this;
};

$.fn.setResponsiveType = function(opts) {
  var $this = $(this);
  var width = $(window).width();

  if (opts["reverse"] === true) {
    // If window is smaller than minimum width, return.
    if (opts["minWidth"] > width) {
      var fontSize = opts["maxSize"];
    }

    // If window is bigger than maximum width, return.
    else if (opts["maxWidth"] < width) {
      var fontSize = opts["minSize"];
    }

    // The magic happens here.
    else {
      var fontRange     = opts["maxSize"]  - opts["minSize"];
      var widthRange    = opts["maxWidth"] - opts["minWidth"];

      var widthPercent  = (width - opts['minWidth']) / widthRange;
      var fontSize      = opts['minSize'] + (fontRange / widthPercent)
    }
  } else {
    // If window is smaller than minimum width, return.
    if (opts["minWidth"] > width) {
      var fontSize = opts["minSize"];
    }

    // If window is bigger than maximum width, return.
    else if (opts["maxWidth"] < width) {
      var fontSize = opts["maxSize"];
    }

    // The magic happens here.
    else {
      var fontRange     = opts["maxSize"]  - opts["minSize"];
      var widthRange    = opts["maxWidth"] - opts["minWidth"];

      var widthPercent  = (width - opts['minWidth']) / widthRange;
      var fontSize      = opts['minSize'] + (widthPercent * fontRange)
    }
  }

  $this.css('font-size', fontSize + "%");

  return this;
}

// default options
$.fn.responsiveType.defaults = {
  minSize: 62.5,
  maxSize: 82,
  minWidth: 320,
  maxWidth: 1280,
  reverse: false
};

})(jQuery);
