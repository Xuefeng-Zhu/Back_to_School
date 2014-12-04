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

var universities = ["clemson university", "colorado state university", "columbia university", "cornell university", "florida institute of technology", "florida international university", "florida state university", "george mason university", "george washington university at mount vernon college", "george washington university virginia campus", "georgia institute of technology", "georgia state university", "illinois institute of technology", "indiana university", "indiana university-bloomington", "johns hopkins university", "kansas state university", "michigan state university", "michigan technological university", "new jersey institute of technology", "new york institute of technology", "new york university", "northern illinois university", "northwestern university", "oregon state university", "polytechnic university of new york", "portland state university", "purdue university", "rensselaer polytechnic institute", "rochester institute of technology", "rutgers university", "stevens institute of technology", "suny albany", "suny binghamton", "suny buffalo", "suny college at buffalo (buffalo state college)", "suny stony brook", "syracuse university", "university of central florida", "university of colorado boulder", "university of florida", "university of illinois chicago", "university of illinois springfield", "university of illinois urbana-champaign", "university of kansas", "university of maryland baltimore county", "university of maryland college park", "university of michigan ann arbor", "university of minnesota twin cities", "university of nebraska omaha", "university of rochester", "university of south florida", "university of utah", "university of virginia", "university of washington", "university of wisconsin madison", "utah state university", "virginia polytechnic institute and state university", "washington state university", "wayne state university", "wichita state university"];
var metrics = ["gre_quant", "gre_verbal", "gre_awa", "toefl", "undergrad_gpa"];