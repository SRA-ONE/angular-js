var app=angular.module('AngularuiAPP', ['ngRoute']);

app.config([ '$routeProvider', '$locationProvider', '$httpProvider', function($routeProvider, $locationProvider, $httpProvider) {
			
			$routeProvider.when('main',{
				templateUrl:'views/main.html',
				//controller: LoginController 	
			}).when('main.about', {
				templateUrl:'views/about.html',
				//controller: changePasswordControllerController
	        }).when('contact', {
				templateUrl:'views/contact.html',
				//controller: changePasswordControllerController
	        }).when('login', {
			    templateUrl: 'views/login.html',
			    //controller: 'forgotPasswordController'
		    })
		    .otherwise({
		        templateUrl: 'views/main.html',
			    //controller: IndexController
		    });
			  $locationProvider.hashPrefix('!');
			//http://localhost:8085/DbUbora/home.html
			  
			  // $httpProvider.interceptors.push(function ($q, $rootScope, $location) {
                  // return {
                      // 'request': function (config) {
                          // var isRestCall = config.url.indexOf('rest') == 0;
                          // if (isRestCall && angular.isDefined($rootScope.accessToken)) {
                              // var accessToken = $rootScope.accessToken;
                              // if (loginAp.useAccessTokenHeader) {
                                  // config.headers['X-Access-Token'] = accessToken;
                              // } else {
                                  // config.url = config.url + "?token=" + accessToken;
                              // }
                          // }
                          // return config || $q.when(config);
                      // }
                  // };
              // }
          // );

	function LoginController($scope, $rootScope, $location, $http, $window ) {
		$scope.rememberMe = false;
		//var loginUrl = $location.protocol() + "://" + $location.host() + ":" + $location.port() + "/dbubora";
		$scope.login = function() {
	$window.location.href =$location.protocol() + "://" + $location.host() + ":" + $location.port()+ 
	"new.html" ;

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
	}
	;
} ]);