var APP = angular.module("AngularuiAPP", ["ui.router"]);

APP.config(function($stateProvider, $urlRouterProvider,$locationProvider,$httpProvider){
	$urlRouterProvider.otherwise("/main")
	$stateProvider
	.state('main', {
		url: "/main",
		templateUrl: "views/main.html"
	})
	.state('main.about', {
		url: "/about",
		templateUrl: "views/about.html"
	})
	.state('main.about.about-one', {
		url: "/about-one",
		templateUrl: "views/about-one.html"
	})
	.state('main.main-inner', {
		url: "/main-inner",
		templateUrl: "views/main-inner.html"
	})
	// mian section end
	.state('contact', {
		url: "/contact",
		templateUrl: "views/contact.html"
	})
	.state('contact.contact-one', {
		url:"/contact-one",
		templateUrl: "views/contact-one.html"
	})
	.state('contact.contact-two', {
		url:"/contact-two",
		templateUrl: "views/contact-two.html"
	})
	.state('contact.contact-three',{
		url:"/contact-three",
		templateUrl: "views/contact-three.html"
	})
	.state('login', {
		url: "/login",
		templateUrl: "views/login.html"
	})
	.state('login1', {
		url: "/login1",
		templateUrl: "views/login1.html"
	})
	APP.controller("UiCtrl", function($scope, $rootScope, $location, $http, $window ){
	//$(".li").addClass(active);
		$scope.rememberMe = false;
		//var loginUrl = $location.protocol() + "://" + $location.host() + ":" + $location.port() + "/dbubora";
		$scope.login = function() {
	$window.location.href =$location.protocol() + "://" + $location.host() + ":" + $location.port()+ 
	"/main.html" ;

			/*var data = {
				userName : $scope.username,
				passWord : $scope.password
			}
			console.log(data);

			$http.post("rest/user/authenticate",data)
				.then(function(response) {
					console.log(response);
					if (response.data.token != null) {
						$rootScope.Token = response.data.token;
						$window.localStorage.setItem('Token', $rootScope.Token);
						$window.location.href = loginUrl + "/home.html";

					} else {
						$location.path("/error");
					}
				});*/

		};
	







});
});

