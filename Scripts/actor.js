$("document").ready(function() {
	var location = window.location.href.split("#");
	var api_base = "http://192.168.160.39/api/Actors/";
	var viewActors = new function(){
		var self = this;
		var actorID = location[1];
		console.log(actorID);

		self.actor = ko.observableArray();

		getActor = function () {
			var final_link = api_base + actorID;
			console.log(final_link);
			$.getJSON(final_link, function(data) {
				self.actor(data);
				console.log(data);
		})};

		getActor();
		console.log(self.actor);
	}
	ko.applyBindings(viewActors);
});
