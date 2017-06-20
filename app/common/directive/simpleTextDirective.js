"use strict";
var app;
(function (app) {
    var common;
    (function (common) {
        var directive;
        (function (directive) {
            var SimpleTextDirective = (function () {
                function SimpleTextDirective() {
                    // scope: ISimpleTextDirectiveScope = {
                    //     "name": "@",
                    //    // "color":"@"
                    // };
                    this.scope = {
                        "name": "@",
                    };
                    this.template = "<h1>Hello - {{name}}</h1>";
                    this.restrict = "AE";
                }
                SimpleTextDirective.instance = function () {
                    return new SimpleTextDirective();
                };
                return SimpleTextDirective;
            }());
            directive.SimpleTextDirective = SimpleTextDirective;
            angular.module("productManagement").directive("simpleTextDirective", SimpleTextDirective.instance);
        })(directive = common.directive || (common.directive = {}));
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
