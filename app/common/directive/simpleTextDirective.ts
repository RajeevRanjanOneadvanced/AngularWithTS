module app.common.directive {

    export interface ISimpleTextDirectiveScope extends ng.IScope {
        name: string;
       // color: string;
    }
    export class SimpleTextDirective implements ng.IDirective {
        static instance(): ng.IDirective {
            return new SimpleTextDirective();
        }
        // scope: ISimpleTextDirectiveScope = {
        //     "name": "@",
        //    // "color":"@"
        // };
          scope = {
            "name": "@",
           // "color":"@"
        };
        template: string = "<h1>Hello - {{name}}</h1>";
        restrict: string = "AE";
    }

    angular.module("productManagement").directive("simpleTextDirective", SimpleTextDirective.instance);
}