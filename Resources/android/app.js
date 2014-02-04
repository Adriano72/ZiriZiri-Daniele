var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

var icons = require("/icons");

var dFactor = Ti.Platform.displayCaps.logicalDensityFactor ? Ti.Platform.displayCaps.logicalDensityFactor : 1;

Alloy.Globals.borderRad = 4 * dFactor;

Alloy.Globals.extentedDate = require("extendedDate");

Alloy.createController("index");