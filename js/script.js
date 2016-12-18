'use strict';
var myApp = angular.module("myModule" ,[]);

myApp.controller("myController", function($scope){
	$scope.message = "Angular js Learning";
});

myApp.controller("DataBinding", function($scope){
	
	var employee = {
		firtName : "Imran",
		LastName : "Mia",
		Gender : "Male"
	};
	$scope.employee = employee;
});

//AngularJS ng src directive
myApp.controller("AngularJS-ng-Src-directive",function($scope){
	var imagesItem = {
		name : "Banana",
		source : "Tree",
		img: "images/im.jpg"
	};
	$scope.imagesItem = imagesItem;
});

//Two way databinding in AngularJS
myApp.controller("Two-way-databinding-in-AngularJS", function($scope){
	//$scope.message= " Text ";
	
	var TwoWayDatabinding = {
		
		firtName : "Imran",
		LastName : "Mia",
		Gender : "Male"
	};
	$scope.TwoWayDatabinding = TwoWayDatabinding;
});
//AngularJS ng repeat directive
myApp.controller("AngularJSngrepeatdirective", function($scope){
		var emps = [
			{FirstName:"Imran", LastName: "Mia", Gender:"Male", Salary:"1"},
			{FirstName:"Imran", LastName: "Mia", Gender:"Male", Salary:"1"},
			{FirstName:"Imran", LastName: "Mia", Gender:"Male", Salary:"1"},
			{FirstName:"Imran", LastName: "Mia", Gender:"Male", Salary:"1"},
			{FirstName:"Imran", LastName: "Mia", Gender:"Male", Salary:"1"},
			{FirstName:"Imran", LastName: "Mia", Gender:"Male", Salary:"1"}
			 
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

