$("document").ready(function() {
	var location = window.location.href.split("?id=");
	var api_base = "http://192.168.160.39/api/Actors/";
	var viewActors = new function(){
		var self = this;
		var actorID = location[1];
		console.log(actorID);

		self.actor = ko.observableArray();
		self.previousActor = ko.observableArray();
		self.nextActor = ko.observableArray();
		
		getActor = function () {
			var final_link = api_base + actorID;
			console.log(final_link);
			$.getJSON(final_link, function(data) {
				if (data[0].photo === '/images/nophoto.png') {
					data[0].photo = './images/nophoto.png';
				};
				data[0].actorFacebookLikes = "Facebook Likes: " + data[0].actorFacebookLikes + "<i class='fa fa-thumbs-o-up' aria-hidden='true'></i>"
				self.actor(data);
				console.log(data);
			})
		}
		getActor();
		getPreviousActor = function() {
			if (actorID != 1){
				var final_link = api_base + (parseInt(actorID-1)).toString();;
				console.log(final_link);
				$.getJSON(final_link, function(data) {
					if (data[0].photo === '/images/nophoto.png') {
						data[0].photo = './images/nophoto.png';
					};
					self.previousActor(data);
					console.log(self.previousActor());
				})
			}
			else{
				var data = {photo:"", actorID:"", actorName: ""};
				self.previousActor(data);
			};
		}
		getPreviousActor();
		getNextActor = function () {
			var final_link = api_base + (parseInt(actorID)+1).toString();
			console.log(final_link);
			$.getJSON(final_link, function(data) {
				if (data[0].photo === '/images/nophoto.png') {
					data[0].photo = './images/nophoto.png';
				};
				self.nextActor(data);
				console.log(data);
			})
		}
		getNextActor();
	}
	ko.applyBindings(viewActors);
});
