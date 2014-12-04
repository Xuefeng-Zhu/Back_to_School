'use strict';
google.load("visualization", "1", {
    packages: ["corechart"]
});

/* Controllers */
var url = 'https://back-school.firebaseio.com/'
angular.module('myApp.controllers', [])
    .controller('MainCtrl', ['$scope', '$location',
        function($scope, $location) {
            $scope.universities = universities;
            $scope.metrics = metrics;

            $scope.$on('$locationChangeSuccess', function(){
            	$scope.tab = $location.path();
            })
        }
    ])
    .controller('ResearchCtrl', ['$scope', '$http',
        function($scope, $http) {
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
                var data = [
                    ['Year']
                ];
                for (var i = 2006; i < 2015; i++) {
                    data.push(['' + i]);
                }

                ref[size].data = data;

                $http.get([url, 'years', $scope.university + '.json'].join('/'))
                    .success(function(response) {
                        processRes(response, ref[size], $scope.university);
                        plotChart(ref[size]);
                        $scope.university = null;
                        $scope.metric = null;
                    });
            }

            $scope.addNewUniversity = function(ref) {
                $http.get([url, 'years', ref.university + '.json'].join('/'))
                    .success(function(response) {
                        processRes(response, ref, ref.university);
                        plotChart(ref);
                        ref.university = null;
                    });
            }

            function processRes(res, ref, university) {
                var metric = ref.metric;
                var data = ref.data;
                var prev = null;

                data[0].push(university);

                for (var year = 2006; year < 2015; year++) {
                    if (res[year]) {
                        var individuals = res[year];
                        var sum = 0;
                        for (var i in individuals) {
                            sum += individuals[i][metric];
                        }
                        prev = Math.round(sum / individuals.length)
                        data[year - 2005].push(prev);

                    } else {
                        data[year - 2005].push(prev);
                    }
                }
            }

            function plotChart(ref) {
                var data = google.visualization.arrayToDataTable(ref.data);
                var options = {
                    title: 'Comparison between Universities on ' + ref.metric,
                    curveType: 'function',
                };
                var chart = new google.visualization.LineChart(document.getElementById('chart_div' + ref.id));

                chart.draw(data, options);
            }

        }
    ])
    .controller('SearchCtrl', ['$scope', '$http',
        function($scope, $http) {
            $scope.searchUni = function() {
            	$scope.search = true;
                $http.get([url, 'scatter', $scope.university, $scope.metric + '.json'].join('/'))
                    .success(function(response) {
                        var data = processRes(response);
                        plotChart(data);
                        console.log(data)
                    });
            };

            function processRes(response) {
                var data = [];
                data.push(['Score', 'Admit', 'Reject']);
                if ($scope.metric == 'gre_awa') {
                    var upper = 6
                    var step = 1
                } else {
                    var upper = 100
                    var step = 5
                }
                for (var i = 0; i <= upper; i += step) {
                    var flag = false;
                    var tmp = [i];
                    if (response.admit[i]) {
                        tmp.push(response.admit[i]);
                        flag = true;
                    } else {
                        tmp.push(null);
                    }

                    if (response.reject[i]) {
                        tmp.push(response.reject[i]);
                        flag = true;
                    } else {
                        tmp.push(null);
                    }
                    if (flag) {
                        data.push(tmp);
                    }
                }
                return data;
            };

            function plotChart(d) {
                var data = google.visualization.arrayToDataTable(d);
                var options = {
                    title: 'Admit vs Reject ScatterChart Based on ' + $scope.metric,
                    hAxis: {
                        title: 'Score',
                    },
                    vAxis: {
                        title: 'Count',
                        minValue: 0
                    }
                };

                var chart = new google.visualization.ScatterChart(document.getElementById('chart_div'));

                chart.draw(data, options);


            }
        }
    ]);