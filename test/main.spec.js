"use strict";
require("core-js");
require("zone.js/dist/zone");
require("zone.js/dist/proxy");
require("zone.js/dist/sync-test");
require("zone.js/dist/async-test");
require("zone.js/dist/jasmine-patch");
var testing_1 = require("@angular/core/testing");
var testing_2 = require("@angular/platform-browser-dynamic/testing");
testing_1.TestBed.initTestEnvironment(testing_2.BrowserDynamicTestingModule, testing_2.platformBrowserDynamicTesting());
var a = require.context('./', true, /\.spec\.js$/);
var b = require.context('../map', true, /\.spec\.js$/);
a.keys().map(a);
b.keys().map(b);
//# sourceMappingURL=main.spec.js.map