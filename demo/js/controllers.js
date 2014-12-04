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
                	var data = ref[size].data;



            })
        }

        function processRes(res, ref){
        	var metric = ref.metric;
        	var data = ref.data;
        	
        }

    }
])
    .controller('MyCtrl2', [
        function() {

        }
    ]);