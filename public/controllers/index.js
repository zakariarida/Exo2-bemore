	var app=angular.module("myApp",[]);

	app.controller("myCtr",['$scope','$http',function ($scope,$http){

		$http.get('/getQuestion').then(function(reponse){
				$scope.question= reponse.data.result;

			},function(error){
				console.log("error");
			});

		$scope.clicme  =  function (res) {
			$http.post('/getReponse',{'DatVar':res}).then(function(reponse){
				$scope.resultfinal= reponse.data.result;

			},function(error){
				console.log("error");
			});

		}

	}]);