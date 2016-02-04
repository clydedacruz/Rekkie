

angular.module('DashboardApp.DashboardController', []).
controller('IssuesController', function($scope,$rootScope,$http, $location,DashboardServices) {
    
    $scope.help = [];
    //$scope.commentValue.bind($scope, 'userComment');
    var latong=MapsLib.getlatlong();
    if (latong==null) {
		$location.path("/noLocation");
		return;
    }
    var raduis=MapsLib.getRaduis();
    console.log(latong);
    DashboardServices.getIssues(latong,raduis).success(function (response) {
        //Dig into the responde to get the relevant data
        $scope.help = response.data;
        //$scope.help[0].comments=[];
         //$scope.help[0].comments.push({name:"sheldon",desc:"hey thats awesome",date:"2 mins ago"});
		GetSelectedOption.setSelecteduser(response.user);
        console.log($scope.help);
    });
	
	$scope.addComment=function(obj){
	    console.log($rootScope.username+"**********");
	    console.log(GetSelectedOption.getSelecteduser());
	    console.log(this.comment);
	    var comment  = this.comment;
	    if(!($scope.help[$scope.help.indexOf(obj)].comments)) {
	    	$scope.help[$scope.help.indexOf(obj)].comments = [];
	    }
		$scope.help[$scope.help.indexOf(obj)].comments.push({created_by:GetSelectedOption.getSelecteduser(),desc:comment, created_at:new Date()});	
		this.comment="";
		$http.post("/saveComment",$scope.help[$scope.help.indexOf(obj)]).success(function(data,status,headers){
			//console.log(data);
		});
	}
	
  }).
controller('PostController', function($scope, $http, $location, DashboardServices) {
    
    
    //$scope.commentValue.bind($scope, 'userComment');
    $scope.saveIssue=function(){
		var latong=MapsLib.getlatlong();
		var data={comments:[], created_by:GetSelectedOption.getSelecteduser(),title:$scope.title,description:$scope.content,tags:$scope.tags,lat:parseFloat((latong.d)),longi:parseFloat((latong.e)), created_at: new Date()}
		$http.post("/saveIssue",data).success(function(data,status,headers){
			$location.path("/issues");
		});
    }
    
	
	
  /*}).controller('TopNavigationController', function($scope, $http,$location) {

  		if(GetSelectedOption.getSelecteduser()) {
  			$scope.loggedIn = true;	
  		} else {
  			$scope.loggedIn = false;	
  		}

  		$scope.loggedInUser = GetSelectedOption.getSelecteduser();
	*/	
}).controller('ServicesController', function($scope, $http,$location,DashboardServices) {
    
   // MapsLib.setSearchParam();
   //MapsLib.doSearch();
   //$location.path("/issues");
    
	
}).controller('LocationSelectController', function($scope, $http,$location,DashboardServices) {
    
   // MapsLib.setSearchParam();
   //MapsLib.doSearch();
   //$location.path("/issues");
    
	
}).controller('SearchController', function($scope, $http,$location,DashboardServices) {
    /*switch(GetSelectedOption.getSelected()) {
	case "Issues":
	     $location.path("/issues");
	    break;
	case "Events":
	     $location.path("/events");
	    break;
	case "Services":
	     $location.path("/services");
	    break;
	default:
	     $location.path("/issues");
	    break;
	//code
    }*/
   
	
	
}).controller('LoginController', function($scope, $rootScope,$http,$location,DashboardServices) {
  		//alert("ddfdf", GetSelectedOption.getSelecteduser());
  		if(GetSelectedOption.getSelecteduser()) {
  			$location.path("/issues");
  			return;
  		}

	  $scope.login=function(){
	    data=$scope.username;
	    $rootScope.username=$scope.username;
		$http.get("/loginCheck?username="+$scope.username+"&password="+$scope.password).success(function(data,status,headers){
			console.log("LOGIN SUCCESS: ", data);
			GetSelectedOption.setSelecteduser(data);
			$location.path("/issues");
			//window.location.href = "/#/issues";
			//window.location.href = "http://localhost:3000/#/issues";
			setTimeout(function(){window.location.reload()}, 1000);
			return;
			//return;
		});
	  }

		$scope.signUp=function(){
			var latong=MapsLib.getlatlong();
			//var latong = {};
			//latong.d = 15.3333;
			//latong.e = 73.23243;
			if(!latong) {
				alert("Please select your location");
				return;
			}

			var data={  email:$scope.email, 
						firstname:$scope.firstname,
						lastname:$scope.lastname,
						password:$scope.password,
						lat:parseFloat((latong.d)),
						longi:parseFloat((latong.e))
					};
			$http.post("/signup",data).success(function(data,status,headers){
				//console.log(data);
				
				if(data.indexOf("ERROR") != -1) {
					alert(data.substr(data.indexOf("ERROR")));
				} else {
					console.log("Save Successful");
					$location.path("/issues");	
				}
				
			});
		  }	  
   
	
	
  }).
  controller('IssueDetailsController', function($scope, $http,DashboardServices, $routeParams) {
	console.log("inside IssueDetailsController");
   	DashboardServices.getIssueDetails($routeParams.id).success(function (response) {
   		console.log("DATA", response.data);
   		$scope.issue = response.data;
   	});

  }).controller('ConnectController', function($scope, $http,$location,DashboardServices) {

    $scope.users = [];
    var latong=MapsLib.getlatlong();
    if (latong==null) {
		$location.path("/noLocation");
		return;
    }
    var raduis=MapsLib.getRaduis();
    console.log(latong);

    DashboardServices.getUsers(latong,raduis).success(function (response) {
    	$scope.users = response.data;
		GetSelectedOption.setSelecteduser(response.user);
        //console.log($scope.users);
    });
	
  });