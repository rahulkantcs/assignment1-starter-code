(function () {

    var app = angular.module('LunchMenu', []);
    app.controller('MenuController', MenuController);
    MenuController.$inject = ['$scope'];

    function MenuController($scope) {

        $scope.todaysMenu = '';
        $scope.message = '';
        $scope.tasteMenu = function () {
            var menuList = $scope.todaysMenu.split(',');
            if (menuList == '') {
                $scope.message='Please Enter The Menu';
            }else if (menuList.length <= 3) {
                $scope.message='Enjoy';
            }else{
                $scope.message='Too Much!!';
            }
        }

    }

})();