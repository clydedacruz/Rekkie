angular.module('rekkie').controller('homeController',
		[ '$scope', '$timeout','$localStorage','$http', function($scope, $timeout,$localStorage,$http) {

	
			
			
			
			/*var jsonresult={
				   "took":2,
				   "timed_out":false,
				   "_shards":{
				      "total":5,
				      "successful":5,
				      "failed":0
				   },
				   "hits":{
				      "total":47,
				      "max_score":1.4142135,
				      "hits":[
				         {
				            "_index":"travel",
				            "_type":"place",
				            "_id":"AVKhnim3aRpANl1Xmyz7",
				            "_score":1.4142135,
				            "_source":{
				               "image":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Weekend_in_Goa_%283039180337%29.jpg/144px-Weekend_in_Goa_%283039180337%29.jpg",
				               "tags":[
				                  "beach"
				               ],
				               "wikipedia":"https://en.wikipedia.org/wiki/Anjuna",
				               "location":{
				                  "lat":15.5809248,
				                  "lon":73.74484369999999
				               },
				               "name":"Anjuna"
				            }
				         },
				         {
				            "_index":"travel",
				            "_type":"place",
				            "_id":"AVKhnin5aRpANl1Xmyz8",
				            "_score":1.4142135,
				            "_source":{
				               "image":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Anjuna1.jpg/500px-Anjuna1.jpg",
				               "tags":[
				                  "sea",
				                  "island",
				                  "beach",
				                  "mare"
				               ],
				               "wikipedia":"https://en.wikipedia.org/wiki/Anjuna",
				               "location":{
				                  "lat":15.5809248,
				                  "lon":73.74484369999999
				               },
				               "name":"Anjuna"
				            }
				         },
				         {
				            "_index":"travel",
				            "_type":"place",
				            "_id":"AVKhnjKVaRpANl1Xmy0P",
				            "_score":1.4142135,
				            "_source":{
				               "image":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Bogmalo_beach_1.jpg/500px-Bogmalo_beach_1.jpg",
				               "tags":[
				                  "beach"
				               ],
				               "wikipedia":"https://en.wikipedia.org/wiki/Bogmalo_Beach",
				               "location":{
				                  "lat":15.3725855,
				                  "lon":73.8448469
				               },
				               "name":"Bogmalo"
				            }
				         },
				         {
				            "_index":"travel",
				            "_type":"place",
				            "_id":"AVKhnnXtaRpANl1Xmy1h",
				            "_score":1.4142135,
				            "_source":{
				               "image":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Cabo_da_Rama%2C_View_From_The_Cliff_3.jpg/500px-Cabo_da_Rama%2C_View_From_The_Cliff_3.jpg",
				               "tags":[
				                  "nature",
				                  "beach"
				               ],
				               "wikipedia":"https://en.wikipedia.org/wiki/Colva",
				               "location":{
				                  "lat":15.2993265,
				                  "lon":74.12399599999999
				               },
				               "name":"Beaches of Cabo da Rama"
				            }
				         },
				         {
				            "_index":"travel",
				            "_type":"place",
				            "_id":"AVKhnnaiaRpANl1Xmy1i",
				            "_score":1.4142135,
				            "_source":{
				               "image":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Cabo_de_Rama_beach_%284243%29.jpg/134px-Cabo_de_Rama_beach_%284243%29.jpg",
				               "tags":[
				                  "beach"
				               ],
				               "wikipedia":"https://en.wikipedia.org/wiki/Colva",
				               "location":{
				                  "lat":15.2993265,
				                  "lon":74.12399599999999
				               },
				               "name":"Beaches of Cabo da Rama"
				            }
				         },
				         {
				            "_index":"travel",
				            "_type":"place",
				            "_id":"AVKhnkF1aRpANl1Xmy0i",
				            "_score":1.4142135,
				            "_source":{
				               "image":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Goa.JPG/500px-Goa.JPG",
				               "tags":[
				                  "beach"
				               ],
				               "wikipedia":"https://en.wikipedia.org/wiki/Calangute",
				               "location":{
				                  "lat":15.5311237,
				                  "lon":73.762495
				               },
				               "name":"Calangute"
				            }
				         },
				         {
				            "_index":"travel",
				            "_type":"place",
				            "_id":"AVKhnqGwaRpANl1Xmy27",
				            "_score":1.4142135,
				            "_source":{
				               "image":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Taj_Fort_Aguada_Beach_Resort_Hotel_Goa_3.JPG/500px-Taj_Fort_Aguada_Beach_Resort_Hotel_Goa_3.JPG",
				               "tags":[
				                  "beach",
				                  "holiday"
				               ],
				               "wikipedia":"https://en.wikipedia.org/wiki/Fort_Aguada",
				               "location":{
				                  "lat":15.2993265,
				                  "lon":74.12399599999999
				               },
				               "name":"Aguada Fortress (Lower)"
				            }
				         },
				         {
				            "_index":"travel",
				            "_type":"place",
				            "_id":"AVKhno73aRpANl1Xmy2F",
				            "_score":1.4142135,
				            "_source":{
				               "image":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Cabo_de_Rama.jpg/500px-Cabo_de_Rama.jpg",
				               "tags":[
				                  "nature",
				                  "beach"
				               ],
				               "wikipedia":"https://en.wikipedia.org/wiki/Goa",
				               "location":{
				                  "lat":15.2993265,
				                  "lon":74.12399599999999
				               },
				               "name":"Views of sea coast from the Fort of Cabo da Rama"
				            }
				         },
				         {
				            "_index":"travel",
				            "_type":"place",
				            "_id":"AVKhnpcWaRpANl1Xmy2b",
				            "_score":1.4142135,
				            "_source":{
				               "image":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Goa.in_Palolem_Beach_-_panoramio_-_SINHA.jpg/500px-Goa.in_Palolem_Beach_-_panoramio_-_SINHA.jpg",
				               "tags":[
				                  "nature",
				                  "beach"
				               ],
				               "wikipedia":"https://en.wikipedia.org/wiki/Palolem_Beach",
				               "location":{
				                  "lat":15.0099648,
				                  "lon":74.02321859999999
				               },
				               "name":"Palolem Beach"
				            }
				         },
				         {
				            "_index":"travel",
				            "_type":"place",
				            "_id":"AVKhnpS0aRpANl1Xmy2V",
				            "_score":1.4142135,
				            "_source":{
				               "image":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Palolem_Sunset.JPG/500px-Palolem_Sunset.JPG",
				               "tags":[
				                  "sky",
				                  "nature",
				                  "sunset",
				                  "beach",
				                  "sea",
				                  "sunrise"
				               ],
				               "wikipedia":"https://en.wikipedia.org/wiki/Palolem_Beach",
				               "location":{
				                  "lat":15.0099648,
				                  "lon":74.02321859999999
				               },
				               "name":"Palolem Beach"
				            }
				         }
				      ]
				   }
				};
			$scope.travelList=jsonresult.hits.hits;
			
			
			console.log($scope.travelList);
*/			
			//gauge
			$scope.demoOptions = {
				lines : 12, // The number of lines to draw
				angle : 0, // The length of each line
				lineWidth : 0.4, // The line thickness
				pointer : {
					length : 0.75, // The radius of the inner circle
					strokeWidth : 0.042, // The rotation offset
					color : '#1D212A' // Fill color
				},
				limitMax : 'false', // If true, the pointer will not go past the end of the gauge
				colorStart : '#1ABC9C', // Colors
				colorStop : '#1ABC9C', // just experiment with them
				strokeColor : '#F0F3F3', // to see which ones work best for you
				generateGradient : true,
				maxValue : 5000,
				animationSpeed : 32
			};

			$scope.demoValue = 4000;

			//progress bar
			$scope.dynamic = 30;
            
            
		           
		     var radius=window.localStorage.getItem('radius'); 
		     var lon=window.localStorage.getItem('lat');  
		     var lat=window.localStorage.getItem('long');  
		     var url=window.localStorage.getItem('url');  
		     console.log(window.localStorage.getItem('address'));  
		     
		     var request = $http({
	                cache: true,
	                method: "post",
	                url: "http://localhost:3000/getPlaces",
	                params: {
	            	    lat: lat,
	            	    lon: lon,
	            	    image_url:url,
	            	    radius:radius
	            	}
	            });
	            request.then(function(response) {
	            	console.log("success");
	                console.log(response);
	                $scope.travelList=response.data.hits.hits;
	            }, function(response) {
	            	 console.log(response);
	            });

		} ]);
