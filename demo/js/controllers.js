'use strict';

/* Controllers */
var url = 'https://back-school.firebaseio.com/'
angular.module('myApp.controllers', []).
controller('ResearchCtrl', ['$scope', '$http',
    function($scope, $http) {
        $scope.universities = universities;
        $scope.metrics = metrics;
        $scope.comparisons = []

        $scope.addNewComp = function() {
        	var ref = $scope.comparisons
        	var size = ref.length;
            ref.push({
                id: size,
                university: undefined,
                metric: $scope.metric,
                data: undefined
            })

            // initiate data 
            var data = [['Year']];
            for (var i = 2006; i < 2015; i++){
            	data.push(['' + i]);
            }

            ref[size].data = data;

            $http.get([url, 'years', $scope.university + '.json'].join('/'))
                .success(function(response) {
                	processRes(response, ref[size], $scope.university);
                	console.log(ref);
            })
        }

        function processRes(res, ref, university){
        	var metric = ref.metric;
        	var data = ref.data;
        	var prev = 0;

        	data[0].push(university);

        	for (var year = 2006; year < 2015; year++){
        		if (res[year]){
        			var individuals = res[year];
        			var sum = 0;
        			for (var i in individuals){
        				sum += individuals[i][metric];
        			}
        			prev = Math.round(sum/individuals.length)
        			data[year - 2005].push(prev);

        		}
        		else{
        			data[year - 2005].push(prev);
        		}
        	}
        }

    }
])
    .controller('MyCtrl2', [
        function() {

        }
    ]);