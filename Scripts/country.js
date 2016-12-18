$("document").ready(function() {
	var location = window.location.href.split("?id=");
	var api_base = "http://192.168.160.39/api/Countries/";
	var viewCountries = new function(){
		var self = this;
		var countryID = location[1];
		self.country = ko.observableArray();
		getMovie = function () {
			var final_link = api_base + countryID;
			console.log(final_link);
			$.getJSON(final_link, function(data) {
				console.log(data);
				self.country(data);
			})			
		}
		getMovie();
	}
	ko.applyBindings(viewCountries);
});
