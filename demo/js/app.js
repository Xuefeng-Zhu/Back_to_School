'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/research', 
  	{templateUrl: 'partials/research_universities.html', controller: 'ResearchCtrl'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/research'});
}]);

var universities = ["polytechnic university of new york", "university of washington", "purdue university", "university of rochester", "rensselaer polytechnic institute", "new york institute of technology", "university of nebraska omaha", "university of virginia", "stevens institute of technology", "university of central florida", "university of maryland college park", "georgia institute of technology", "new jersey institute of technology", "university of south florida", "florida institute of technology", "michigan technological university", "new york university", "illinois institute of technology", "kansas state university", "university of minnesota twin cities", "university of illinois chicago", "suny college at buffalo (buffalo state college)", "university of utah", "suny albany", "rutgers university", "university of florida", "university of wisconsin madison", "indiana university-bloomington", "rochester institute of technology", "george mason university", "michigan state university", "columbia university", "university of michigan ann arbor", "university of illinois springfield", "syracuse university", "university of maryland baltimore county", "university of colorado boulder", "university of illinois urbana-champaign", "wayne state university", "johns hopkins university", "cornell university", "suny binghamton", "university of kansas", "florida state university", "utah state university", "george washington university virginia campus", "oregon state university", "suny stony brook", "wichita state university", "colorado state university", "indiana university", "northwestern university", "virginia polytechnic institute and state university", "clemson university", "washington state university", "georgia state university", "portland state university", "northern illinois university", "suny buffalo", "florida international university", "george washington university at mount vernon college"]
var metrics = ["gre_quant", "gre_verbal", "gre_awa", "toefl", "undergrad_gpa"]