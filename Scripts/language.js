$("document").ready(function() {
	var location = window.location.href.split("?id=");
	var api_base = "http://192.168.160.39/api/Languages/";
	var viewLanguages = new function(){
		var self = this;
		var languageID = location[1];
		self.language = ko.observableArray();
		getMovie = function () {
			var final_link = api_base + languageID;
			console.log(final_link);
			$.getJSON(final_link, function(data) {
				console.log(data);
				self.language(data);
			})			
		}
		getMovie();
	}
	ko.applyBindings(viewLanguages);
});
