"use strict";

var HPRole = angular.module("HPRole", ["ngRoute"]);

HPRole.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "partials/home"
    });
}]);