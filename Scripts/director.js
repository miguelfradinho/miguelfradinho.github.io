$("document").ready(function() {
	var location = window.location.href.split("?id=");
	var api_base = "http://192.168.160.39/api/Directors/";
	var viewDirectors = new function(){
		var self = this;
		var directorID = location[1];
		console.log(directorID);

		self.director = ko.observableArray();
		self.previousDirector = ko.observableArray();
		self.nextDirector = ko.observableArray();

		getDirector = function () {
			var final_link = api_base + directorID;
			console.log(final_link);
			$.getJSON(final_link, function(data) {
				if (data[0].photo === '/images/nophoto.png') {
					data[0].photo = './images/nophoto.png';
				};
				data[0].directorFacebookLikes = "Facebook Likes: "+ data[0].directorFacebookLikes + " <i class='fa fa-thumbs-o-up' aria-hidden='true'></i>"
				self.director(data);
				console.log(data);
		})};
		getDirector();
		getPreviousDirector = function() {
			if (directorID != 1){
				var final_link = api_base + (parseInt(directorID-1)).toString();
				console.log(final_link);
				$.getJSON(final_link, function(data) {
					if (data[0].photo === '/images/nophoto.png') {
						data[0].photo = './images/nophoto.png';
					};
					self.previousDirector(data);
					console.log(self.previousDirector());
				})
			}
			else{
				var data = {photo:"", directorID:"", actorName: ""};
				self.previousDirector(data);
			};
		}
		getPreviousDirector();
		getNextActor = function () {
			var final_link = api_base + (parseInt(directorID)+1).toString();
			console.log(final_link);
			$.getJSON(final_link, function(data) {
				if (data[0].photo === '/images/nophoto.png') {
					data[0].photo = './images/nophoto.png';
				};
				self.nextDirector(data);
				console.log(data);
			})
		}
		getNextActor();
	}
	ko.applyBindings(viewDirectors);
});
