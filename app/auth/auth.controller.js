
// our controller which authenticates users. 

angular.module('angularfireSlackApp').controller('AuthCtrl', function(Auth, $state){
	var authCtrl = this;
// we create a user object and explicitly give 'this' to it - so we can use it through out
	authCtrl.user = {
		email: '',
		password: '',

	};
//the login function using firebase's built in #authWithPassword function, returning a promise. 
//change the state on return of the promise
	authCtrl.login = function() {
		Auth.$authWithPassword(authCtrl.user).then(function(auth){
			$state.go('home');  
		}, function(error){
			authCtrl.error = error;
		});
	};
//the register function using firebase's other build in $createUser function, returning a promise
//run the .login function once it comes back - or send an err

	authCtrl.register = function(){
		Auth.$createUser(authCtrl.user).then(function (user){
			authCtrl.login();
		}, function(error){
			authCtrl.error = err;
		});
	}



});