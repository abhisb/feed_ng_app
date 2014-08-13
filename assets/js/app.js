var feedApp = angular.module('feedApp', ['ngRoute']);

feedApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'templates/home.html',
        //controller: 'homeCtrl'
      })
      .when('/work', {
        templateUrl: 'templates/work.html',
        //controller: 'homeCtrl'
      })
      .when('/about', {
        templateUrl: 'templates/about.html',
      })
      .when('/blog', {
        templateUrl: 'templates/blog.html',
      })
      .when('/contact', {
        templateUrl: 'templates/contact.html',
      })
      .otherwise({
        redirectTo: '/home'
      });
  }]);

feedApp.controller('recentProjects', ['$scope', '$location', function($scope, $location) {

   /* $scope.projectDetails = function(page) {
        var currentRoute = $location.path().substring(1) || 'home';
        return page === currentRoute ? 'active' : '';
    };*/
    $scope.projectDetails = [{
      "title": "Savi Insight",
      "technologies_used": ["HTML 5", "JavaScript", "SmartAdmin", "Bootstrap","D3"],
      "client": "Savi Technologies",
      "Project Manager": "Jimmy Kappen",
      "resources": {
      "architect": "Arun Shankar Prasad",
      "Developers": ["Abhilash SB", "Shinoj VM", "Nishin Nisthar", "Shyam S Kumar","Rollin Mendez"]
        },      
      "version control":"git",
      "functional_description":"Develop the front end and visualizations for the Insight web application",
      "vertical":"Logistics and Distribution",
      "category":"webapp",
      "image_url":"../images/savi.jpg"
      },
      {
      "title": "IDonor",
      "technologies_used": ["HTML 5", "JavaScript", "SmartAdmin", "Bootstrap","D3"],
      "client": "Savi Technologies",
      "Project Manager": "Jimmy Kappen",
      "resources": {
      "architect": "Arun Shankar Prasad",
      "Developers": ["Abhilash SB", "Shinoj VM", "Nishin Nisthar", "Shyam S Kumar","Rollin Mendez"]
        },      
      "version control":"git",
      "functional_description":"Develop the front end and visualizations for the Insight web application",
      "vertical":"Logistics and Distribution",
      "category":"webapp",
      "image_url":"../images/savi.jpg"
      },
      {
      "title": "Synopsis",
      "technologies_used": ["HTML 5", "JavaScript", "SmartAdmin", "Bootstrap","D3"],
      "client": "Savi Technologies",
      "Project Manager": "Jimmy Kappen",
      "resources": {
      "architect": "Arun Shankar Prasad",
      "Developers": ["Abhilash SB", "Shinoj VM", "Nishin Nisthar", "Shyam S Kumar","Rollin Mendez"]
        },      
      "version control":"git",
      "functional_description":"Develop the front end and visualizations for the Insight web application",
      "vertical":"Logistics and Distribution",
      "category":"webapp",
      "image_url":"../images/savi.jpg"
      }]

}]);