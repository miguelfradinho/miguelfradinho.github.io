$(function () {
	var ViewModel = function () {
		var self = this;
		self.pesquisaAtoresTexto = ko.observable("");
		self.atoresNumero = ko.observable(null);
		self.atores = ko.observableArray();
		getAtores = function () {
			$.getJSON("http://192.168.160.39/api/Actors/Count", function(data) {
				self.atoresNumero(data);
			});
			$.getJSON("http://192.168.160.39/api/Actors", function(data) {
				self.atores(data);
			});
		};
		pesquisaAtores = function () {
			if (self.pesquisaAtoresTexto().length >= 3) {
			$.getJSON("http://192.168.160.39/api/Actors/Search/" + self.pesquisaAtoresTexto(), function(data) {
				self.atores(data);
			});

			}
			else if (self.pesquisaAtoresTexto().length == 0) {
				$.getJSON("http://192.168.160.39/api/Actors", function(data) {
				self.atores(data);
			});
			};
		};
		getAtores();
	};

	ko.applyBindings(new ViewModel());
});