var app = angular.module('sounder');

app.service('soundService', function($http) {
	this.getUser = function(username) {
		return $http({
			method: 'GET',
			//anatomy of url below: (1) main URL (http://api.soundcloud.com/); (2) where we want to go (users/' + username + '/tracks.json); and (3) API Key (?client_id=bda4ada8694db06efcac9cf97b872b3e)
			//this tells SoundCloud that we want to hit their users by the username of the variable username and download all of their tracks in JSON format; the API Key tells SoundCloud who we are
			url: 'http://api.soundcloud.com/users/' + username + '/tracks.json?client_id=bda4ada8694db06efcac9cf97b872b3e'
		}).then(function(res) {
			return res;
		}, function(err) {
			return err;
		});
	};
});