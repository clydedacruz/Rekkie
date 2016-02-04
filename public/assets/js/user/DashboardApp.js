angular.module('DashboardApp', [
  'DashboardApp.DashboardController',
  'DashboardApp.DashboardServices',
  'ngRoute'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/issues", {templateUrl: "assets/partials/Issues.html", controller: "IssuesController"}).
	when("/postNews", {templateUrl: "assets/partials/Post.html", controller: "PostController"}).
	when("/noLocation", {templateUrl: "assets/partials/LocationSelect.html", controller: "LocationSelectController"}).
	when("/search", {templateUrl: "assets/partials/Issues.html", controller: "SearchController"}).
	when("/events", {templateUrl: "assets/partials/Events.html", controller: "LocationSelectController"}).
	when("/services", {templateUrl: "assets/partials/Services.html", controller: "ServicesController"}).
	when("/login", {templateUrl: "assets/partials/Login.html", controller: "LoginController"}).
	when("/signup", {templateUrl: "assets/partials/Signup.html", controller: "LoginController"}).
	when("/issueDetails/:id", {templateUrl: "assets/partials/IssueDetails.html", controller: "IssueDetailsController"}).
	when("/connect", {templateUrl: "assets/partials/users.html", controller: "ConnectController"}).
	otherwise({redirectTo: '/#'});
}]);