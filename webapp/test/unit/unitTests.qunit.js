/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ZTEST_Day2Activities/ZTEST_Day2Activities/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});