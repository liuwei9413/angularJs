//多层视图
var myApp = angular.module("myApp", ['ui.router']); //新建angular模块，注入ui.router模板

myApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when("", "/pageTab");    //默认路径

    $stateProvider
        .state("pageTab", {
            url: "/pageTab",    //路径 '/pageTab' 默认值
            templateUrl: "pageTab.html"
        })
        .state("pageTab.page1", {   //
            url:"/page1",   // 这里"根目录"指向/pageTab 此处为二级目录'/pageTab/page1'
            templateUrl: "page1.html"
        })
        .state("pageTab.page2", {
            url:"/page2",
            templateUrl: "page2.html"
        })
        .state("pageTab.page3", {
            url:"/page3",
            templateUrl: "page3.html"
        });
});


//跳到下一个视图 类似下一页
/*
var myApp = angular.module("myApp", ['ui.router']);

myApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when("", "/page1");

    $stateProvider
        .state("page1", {
            url: "/page1",
            templateUrl: "page1.html"
        })
        .state("page2", {
            url:"/page2",
            templateUrl: "page2.html"
        })
        .state("page3", {
            url:"/page3",
            templateUrl: "page3.html"
        });
});*/


//单层导航视图
/*
var myApp = angular.module("myApp", ['ui.router']); //定义angular模块，注入ui.router模块

myApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when("", "/page1");  //默认路径 '/page1'

    $stateProvider
        .state("page1", {   //对应ui-sref
            url: "/page1",  //路径
            templateUrl: "page1.html"   //对应模板
        })
        .state("page2", {
            url: "/page2",
            templateUrl: "page2.html"
        })
        .state("page3", {
            url: "/page3",
            templateUrl: "page3.html"
        });

});
*/

