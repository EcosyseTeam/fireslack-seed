// md5 is for getting the gravatar - using a third party library called angular md5

angular.module('angularfireSlackApp')
	.controller('ProfileCtrl', function($state, md5, auth, profile){
		var profileCtrl = this;
		console.log("hello");

		profileCtrl.profile = profile;
		

	profileCtrl.updateProfile = function(){
  		profileCtrl.profile.emailHash = md5.createHash(auth.password.email);
  		profileCtrl.profile.$save().then(function(){
  			$state.go('channels');
  		});
	};
	



	});