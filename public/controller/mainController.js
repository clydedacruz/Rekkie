angular.module('rekkie').controller('mainController',
		[ '$scope', '$timeout', function($scope, $timeout) {

			//whether meter
			$scope.CurrentWeather = {
				forecast : {
					icon : "snow",
					iconSize : 50,
					color : "blue",
					animated:true
				}
			};

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

		} ]);
