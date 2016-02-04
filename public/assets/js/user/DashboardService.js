angular.module('DashboardApp.DashboardServices', []).
  factory('DashboardServices', function($http) {

    var servicesAPI = {};

    servicesAPI.getIssues = function(latlong,raduis) {
      return $http({
        method: 'GET', 
        url: '/getIssues?lat='+latlong.d+'&longi='+latlong.e+'&raduis='+raduis
	
      });
    }
	
	  servicesAPI.getNotify = function() {
      return $http({
        method: 'GET', 
        url: '/getNotify'
      });
    }

    servicesAPI.getIssueDetails = function(id) {
      return $http({
        method: 'GET', 
        url: '/getIssueDetails?id='+id
  
      });
    }

    servicesAPI.getUsers = function(latlong,raduis) {
      return $http({
        method: 'GET', 
        url: '/getUsers?lat='+latlong.d+'&longi='+latlong.e+'&raduis='+raduis
  
      });
    }
    


    return servicesAPI;
  });