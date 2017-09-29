"use strict";
exports.__esModule = true;
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
var vue_1 = require("vue");
var App_1 = require("./App");
var router_1 = require("./router");
vue_1["default"].config.productionTip = false;
function greeter(person) {
    return 'Hello, ' + person;
}
var user = [0, 1, 2];
greeter(user);
/* eslint-disable no-new */
new vue_1["default"]({
    el: '#app',
    router: router_1["default"],
    template: '<App/>',
    components: { App: App_1["default"] }
});
