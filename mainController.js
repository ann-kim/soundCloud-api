var app = angular.module('sounder');

app.controller('mainController', function($scope, soundService, $sce) {
	$scope.getUser = function() {
		soundService.getUser($scope.searchText).then(function(data) {
			$scope.userData = data.data;
		}, function(err){
			console.log(err);
		});
	}

	//this code is calling SoundCloud's function oEmbed and then in the callback is doing some angular magic to sanitize the code ad pass it into our DOM
	//this includes just a little bit of oEmbed which strips out the HTML for our use
	$scope.play = function(track_url) {
		SC.oEmbed(track_url, { auto_play: true }, function(oEmbed) {
      		$scope.$apply($scope.player_html = $sce.trustAsHtml(oEmbed.html));
   		});
	};
});

//need .then b/c $http (in soundService) returns a promise
//.then also takes 2 callback functions with one parameter each instead of one callback with multiple parameters like a promise does