'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/research', 
  	{templateUrl: 'partials/research_universities.html', controller: 'ResearchCtrl'});
  $routeProvider.when('/search', {templateUrl: 'partials/search_university.html', controller: 'SearchCtrl'});
  $routeProvider.otherwise({redirectTo: '/research'});
}]);

var universities = ["Clemson University", "Colorado State University", "Columbia University", "Cornell University", "Florida Institute Of Technology", "Florida International University", "Florida State University", "George Mason University", "George Washington University At Mount Vernon College", "George Washington University Virginia Campus", "Georgia Institute Of Technology", "Georgia State University", "Illinois Institute Of Technology", "Indiana University", "Indiana University-Bloomington", "Johns Hopkins University", "Kansas State University", "Michigan State University", "Michigan Technological University", "New Jersey Institute Of Technology", "New York Institute Of Technology", "New York University", "Northern Illinois University", "Northwestern University", "Oregon State University", "Polytechnic University Of New York", "Portland State University", "Purdue University", "Rensselaer Polytechnic Institute", "Rochester Institute Of Technology", "Rutgers University", "Stevens Institute Of Technology", "Suny Albany", "Suny Binghamton", "Suny Buffalo", "Suny College At Buffalo (Buffalo State College)", "Suny Stony Brook", "Syracuse University", "University Of Central Florida", "University Of Colorado Boulder", "University Of Florida", "University Of Illinois Chicago", "University Of Illinois Springfield", "University Of Illinois Urbana-Champaign", "University Of Kansas", "University Of Maryland Baltimore County", "University Of Maryland College Park", "University Of Michigan Ann Arbor", "University Of Minnesota Twin Cities", "University Of Nebraska Omaha", "University Of Rochester", "University Of South Florida", "University Of Utah", "University Of Virginia", "University Of Washington", "University Of Wisconsin Madison", "Utah State University", "Virginia Polytechnic Institute And State University", "Washington State University", "Wayne State University", "Wichita State University"];
var metrics = ["gre_quant", "gre_verbal", "gre_awa", "toefl", "undergrad_gpa"];