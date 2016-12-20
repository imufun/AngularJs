'use strict';
var myApp = angular.module("myModule", []);

myApp.controller("myController", function ($scope) {
    $scope.message = "Angular js Learning";
});

myApp.controller("DataBinding", function ($scope) {

    var employee = {
        firtName: "Imran",
        LastName: "Mia",
        Gender: "Male"
    };
    $scope.employee = employee;
});

//AngularJS ng src directive
myApp.controller("AngularJS-ng-Src-directive", function ($scope) {
    var imagesItem = {
        name: "Banana",
        source: "Tree",
        img: "images/im.jpg"
    };
    $scope.imagesItem = imagesItem;
});

//Two way databinding in AngularJS
myApp.controller("Two-way-databinding-in-AngularJS", function ($scope) {
    //$scope.message= " Text ";

    var TwoWayDatabinding = {

        firtName: "Imran",
        LastName: "Mia",
        Gender: "Male"
    };
    $scope.TwoWayDatabinding = TwoWayDatabinding;
});
//AngularJS ng repeat directive
myApp.controller("AngularJSngrepeatdirective", function ($scope) {
    var emps = [
        {FirstName: "Imran", LastName: "Mia", Gender: "Male", Salary: "1"},
        {FirstName: "Imran", LastName: "Mia", Gender: "Male", Salary: "1"},
        {FirstName: "Imran", LastName: "Mia", Gender: "Male", Salary: "1"},
        {FirstName: "Imran", LastName: "Mia", Gender: "Male", Salary: "1"},
        {FirstName: "Imran", LastName: "Mia", Gender: "Male", Salary: "1"},
        {FirstName: "Imran", LastName: "Mia", Gender: "Male", Salary: "1"}

    ];
    $scope.emps = emps;

    //Nested repeat
    var countries = [
        {
            item: "A",
            Citys: [
                {Name: "A"},
                {Name: "B"},
                {Name: "C"}
            ]
        },
        {
            item: "B",
            Citys: [
                {Name: "1"},
                {Name: "2"},
                {Name: "3"}
            ]
        },
        {
            item: "C",
            Citys: [
                {Name: "iii"},
                {Name: "iiiii"},
                {Name: "iiiiiii"}
            ]
        }
    ];

    $scope.countries = countries;
});
//Handling events in AngularJS
myApp.controller("HandlingEvent", function ($scope) {
    var technologies = [
        {name: "Java", likes: 0, dislikes: 0},
        {name: "Android", likes: 0, dislikes: 0},
        {name: "php", likes: 0, dislikes: 0},
        {name: "Angular", likes: 0, dislikes: 0},
        {name: "Html", likes: 0, dislikes: 0},
        {name: "Css", likes: 0, dislikes: 0},
        {name: "Bootstrap", likes: 0, dislikes: 0},
    ];
    $scope.technologies = technologies;

    $scope.incrementLikes = function (technologie) {
        technologie.likes++;
    };
    $scope.incrementDisLikes = function (technologie) {
        technologie.dislikes++;
    };
});


//AngularJS filters
myApp.controller("AngularJSFilters", function ($scope) {
    var employees = [
        {name: "Aggs", dateOfBirth: new Date("November 8, 2000"), Gender: "Female", salary: 99},
        {name: "Beeeds", dateOfBirth: new Date("November 24, 200"), Gender: "Male", salary: 5345},
        {name: "Cjyt", dateOfBirth: new Date("November 1, 2000"), Gender: "Female", salary: 88},
        {name: "Dss", dateOfBirth: new Date("jan 8, 2000"), Gender: "Male", salary: 33},
        {name: "Eewr", dateOfBirth: new Date("feb 23, 2000"), Gender: "Female", salary: 2},
        {name: "Faa", dateOfBirth: new Date("may 12, 2000"), Gender: "Male", salary: 6},
        {name: "Gsf", dateOfBirth: new Date("jan 1, 2000"), Gender: "Male", salary: 565},
        {name: "Hsfsf", dateOfBirth: new Date("November 23, 2000"), Gender: "Male", salary: 453567},
        {name: "Ifs", dateOfBirth: new Date("November 236 2000"), Gender: "Female", salary: 2313}
    ];
    $scope.employees = employees;
	 
	$scope.rowLimit = 3;
	$scope.selectSort = "name";
	 
});
