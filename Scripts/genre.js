$("document").ready(function() {
	var location = window.location.href.split("?id=");
	var api_base = "http://192.168.160.39/api/Genres/";
	var viewGenres = new function(){
		var self = this;
		var genreID = location[1];
		self.genre = ko.observableArray();
		getMovie = function () {
			var final_link = api_base + genreID;
			console.log(final_link);
			$.getJSON(final_link, function(data) {
				console.log(data);
				self.genre(data);
			})			
		}
		getMovie();
	}
	ko.applyBindings(viewGenres);
});
