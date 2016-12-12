var directiveModule = angular.module('dM', []);

directiveModule.directive('myChart', function() {
	return {
		restrict : 'E',
		replace : true,
		scope : {
			myId : '@myId',
			myUrl: '=myUrl',
			myParams: '=myParams'
		},
		controller : ['$scope','$sce','db',function($scope,$sce,db){
			db.getData($scope.myUrl, $scope.myParams).then(function(resData) {
				console.log( resData );
				//$scope.data = resData.data;
				var option = addChartIsPie(resData.data.chartTitle, resData.data.series);
				var myChartId = document.getElementById($scope.myId);
				var myChart = echarts.init(myChartId);
				myChart.setOption(option);
				$scope.hText = $sce.trustAsHtml(resData.data.headerText == null ? '' : resData.data.headerText);
				$scope.fText = $sce.trustAsHtml(resData.data.footerText == null ? '' : resData.data.footerText);
			}, function(error) {

			})
		}],
		templateUrl : 'myTitle.html'
	};
});