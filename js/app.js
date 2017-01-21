(function () {

    var app = angular.module('LunchMenu', []);
    app.controller('MenuController', MenuControllerFactory());
    MenuControllerFactory.$inject = ['$scope'];

})();