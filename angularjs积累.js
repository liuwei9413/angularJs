//angularjs 自定义服务及ajax缓存
app.factory('getData', function($http, $q) {
    return function() {
        var defer = $q.defer();
        $http.get('http://i.ngroute.com/main', {cache: true}).then(function(res) {
            defer.resolve(res.data);
        }, function() {
            defer.reject('请求失败');
        });
        return defer.promise;
    }
});
//angularjs 使用自定义服务
app.controller('ListController', ['$scope', 'getData', function($scope, getData) {
    getData().then(function(data) {
        if ( !dataList ) {
            dataList = data;
        }
        // console.log(dataList);
        $scope.newsList = dataList;
    }, function(data) {
        alert(data);
    });
}]);


//ng锚点定位
$scope.menuToHtml = function (id) {
    $anchorScroll.yOffset = 100;    //设置y轴偏移量
    // set the location.hash to the id of
    // the element you wish to scroll to.
    $location.hash(id);
    // call $anchorScroll()
    $anchorScroll();
};