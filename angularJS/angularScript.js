/*
* @Author: MD NOORUL NABI ANSARI
* @Date:   2017-01-24 14:37:00
* @Last Modified by:   noor
* @Last Modified time: 2017-01-25 13:07:02
*/

/**
*  Module
*
* Description
*/
var myApp = angular.module('myModule', []);

myApp.controller('apController_b',function($scope,$stringParse){
	$scope.process = function(inputStr){
		$scope.outputStr = $stringParse.breakCamelCase(inputStr);
	}
});

myApp.controller('apController_a',function($scope){
	$scope.saluation = "Hi!";
	$scope.message = "You are with NOOR";
	$scope.flag = "indian-flag.png";
	
	var technologies = [
		    { "salary": 994650, "dislikes": 30, "likes": 25, "name": "C++" },
		    { "salary": 930735, "dislikes": 27, "likes": 37, "name": "C#" },
		    { "salary": 537540, "dislikes": 22, "likes": 36, "name": "html" },
		    { "salary": 734583, "dislikes": 18, "likes": 40, "name": "C++" },
		    { "salary": 145006, "dislikes": 22, "likes": 30, "name": "Asp.net" },
		    { "salary": 918651, "dislikes": 16, "likes": 20, "name": "Javascript" },
		    { "salary": 222049, "dislikes": 30, "likes": 38, "name": "C#" },
		    { "salary": 611686, "dislikes": 20, "likes": 37, "name": "C++" },
		    { "salary": 978867, "dislikes": 27, "likes": 30, "name": "Nodejs" },
		    { "salary": 905449, "dislikes": 10, "likes": 29, "name": "C++" },
		    { "salary": 476587, "dislikes": 17, "likes": 24, "name": "html" },
		    { "salary": 32993,  "dislikes": 11, "likes": 25, "name": "C++" },
		    { "salary": 741869, "dislikes": 21, "likes": 29, "name": "Python" },
		    { "salary": 755880, "dislikes": 17, "likes": 30, "name": "html" },
		    { "salary": 531257, "dislikes": 16, "likes": 21, "name": "Javascript" }
		];

	$scope.rowLimit = 5;
	$scope.beginFrom = 0;
	$scope.technologies = technologies;

	$scope.next = function(){
		var len = $scope.technologies.length;

		if((len-$scope.beginFrom) == 0)
			$scope.beginFrom = 1;
		else if((len-$scope.beginFrom) >= $scope.rowLimit)
			$scope.beginFrom += $scope.rowLimit;
		else
			$scope.beginFrom += len-$scope.beginFrom;
	}

	$scope.ascDsc = true;
	$scope.sortOn = 'likes';
	$scope.sortBy = function(that){
		$scope.ascDsc = $scope.ascDsc ? false : true;
		$scope.sortOn = that;
	}

	$scope.like = function(technology){
		technology.likes++;
	};

	$scope.dislike = function(technology){
		technology.dislikes++;
	};
 });
