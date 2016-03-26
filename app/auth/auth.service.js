angular.module('angularfireSlackApp')
//making a factory and injecting the $firebaseAuth and my FirebaseUrl into it
//pass the reference of the firebase into the $firebaseAuth service.
//have the factory return the service associated with the firebase 
	.factory('Auth', function($firebaseAuth, FirebaseUrl){
		var ref = new Firebase(FirebaseUrl);
		var auth = $firebaseAuth(ref);
		return auth;

	});