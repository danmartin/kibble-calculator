"use strict";

var app = angular.module("kibble", []);

app.controller('MainCtrl', ['$scope',  function($scope) {
    const Defaults = function(){
        this.size = 2.5;
        this.cost = 0.00;
        this.weight = 0;
        this.cups = 0;   
    }
    Defaults.prototype = {
        calculate: function(){
            var total = this.cups * (this.cost / (this.weight * this.size));
            if(total > 0){
                this.totals = {
                    day: total,
                    month: total * 30,
                    year: total * 365
                }
            }
        }
    }
    $scope.options = new Defaults();

}]);