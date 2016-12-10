$(function () {
	var ViewModel = function () {
		var self = this;

// Defenir as Pesquisas 

		self.pesquisaAtoresTexto = ko.observable("");
		self.atoresNumero = ko.observable(null);
		self.atores = ko.observableArray();
		self.ator1 = ko.observableArray();
		self.ator2 = ko.observableArray();
		self.ator3 = ko.observableArray();

		self.pesquisaDiretoresTexto = ko.observable("");
		self.diretoresNumero = ko.observable(null);
		self.diretores = ko.observableArray();

		self.pesquisaFilmesTexto = ko.observable("");
		self.filmesNumero = ko.observable(null);
		self.filmes = ko.observableArray();

		self.pesquisaPaisesTexto = ko.observable("");
		self.paisesNumero = ko.observable(null);
		self.paises = ko.observableArray();

		self.pesquisaGenerosTexto = ko.observable("");
		self.generosNumero = ko.observable(null);
		self.generos = ko.observableArray();

		self.pesquisaLinguasTexto = ko.observable("");
		self.linguasNumero = ko.observable(null);
		self.linguas = ko.observableArray();

// Funções para Atores

		getAtores = function () {
			$.getJSON("http://192.168.160.39/api/Actors/Count", function(data) {
				self.atoresNumero(data);

				var numAtores = data;
				var ator1id = Math.floor(Math.random()*numAtores)+1
				var ator2id = Math.floor(Math.random()*numAtores)+1
				var ator3id = Math.floor(Math.random()*numAtores)+1
				$.getJSON("http://192.168.160.39/api/Actors/" + ator1id, function(data) {
					self.ator1(data);
					
				});
				$.getJSON("http://192.168.160.39/api/Actors/" + ator2id, function(data) {
					self.ator2(data);
					console.log(data);
				});
				$.getJSON("http://192.168.160.39/api/Actors/" + ator3id, function(data) {
					self.ator3(data);
					console.log(data);
				});
			});
			$.getJSON("http://192.168.160.39/api/Actors", function(data) {
				self.atores(data);
				console.log(data)
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

// Funções para Diretores

		getDiretores = function () {
			$.getJSON("http://192.168.160.39/api/Directors/Count", function(data) {
				self.diretoresNumero(data);
			});
			$.getJSON("http://192.168.160.39/api/Directors", function(data) {
				self.diretores(data);
			});
		};
		pesquisaDiretores = function () {
			if (self.pesquisaDiretoresTexto().length >= 3) {
			$.getJSON("http://192.168.160.39/api/Directors/Search/" + self.pesquisaDiretoresTexto(), function(data) {
				self.diretores(data);
			});

			}
			else if (self.pesquisaDiretoresTexto().length == 0) {
				$.getJSON("http://192.168.160.39/api/Directors", function(data) {
				self.diretores(data);
			});
			};
		};
		getDiretores();

// Funções para Filmes
	
	getFilmes = function () {
			$.getJSON("http://192.168.160.39/api/Movies/Count", function(data) {
				self.filmesNumero(data);
			});
			$.getJSON("http://192.168.160.39/api/Movies", function(data) {
				self.filmes(data);
			});
		};
		pesquisaFilmes = function () {
			if (self.pesquisaFilmesTexto().length >= 3) {
			$.getJSON("http://192.168.160.39/api/Movies/Search/" + self.pesquisaFilmesTexto(), function(data) {
				self.filmes(data);
			});

			}
			else if (self.pesquisaFilmesTexto().length == 0) {
				$.getJSON("http://192.168.160.39/api/Movies", function(data) {
				self.filmes(data);
			});
			};
		};
		getFilmes();

// Funções para Pesquisa Geográfica

	getPaises = function () {
			$.getJSON("http://192.168.160.39/api/Countries/Count", function(data) {
				self.paisesNumero(data);
			});
			$.getJSON("http://192.168.160.39/api/Countries", function(data) {
				self.paises(data);
			});
		};
		pesquisaPaises = function () {
			if (self.pesquisaPaisesTexto().length >= 3) {
			$.getJSON("http://192.168.160.39/api/Countries/Search/{}?name=" + self.pesquisaPaisesTexto(), function(data) {
				self.paises(data);
			});

			}
			else if (self.pesquisaPaisesTexto().length == 0) {
				$.getJSON("http://192.168.160.39/api/Countries", function(data) {
				self.paises(data);
			});
			};
		};
		getPaises();

// Funções para Pesquisa por Genero

	getGeneros = function () {
			$.getJSON("http://192.168.160.39/api/Genres/Count", function(data) {
				self.generosNumero(data);
			});
			$.getJSON("http://192.168.160.39/api/Genres", function(data) {
				self.generos(data);
			});
		};
		pesquisaGeneros = function () {
			if (self.pesquisaGenerosTexto().length >= 3) {
			$.getJSON("http://192.168.160.39/api/Genres/Search/" + self.pesquisaGenerosTexto(), function(data) {
				self.generos(data);
			});

			}
			else if (self.pesquisaGenerosTexto().length == 0) {
				$.getJSON("http://192.168.160.39/api/Genres", function(data) {
				self.generos(data);
			});
			};
		};
		getGeneros();

// Funções para Pesquisa por Lingua
	
	getLinguas = function () {
			$.getJSON("http://192.168.160.39/api/Languages/Count", function(data) {
				self.linguasNumero(data);
			});
			$.getJSON("http://192.168.160.39/api/Languages", function(data) {
				self.linguas(data);
			});
		};
		pesquisaLinguas = function () {
			if (self.pesquisaLinguasTexto().length >= 3) {
			$.getJSON("http://192.168.160.39/api/Languages/Search/" + self.pesquisaLinguasTexto(), function(data) {
				self.linguas(data);
			});

			}
			else if (self.pesquisaLinguasTexto().length == 0) {
				$.getJSON("http://192.168.160.39/api/Languages", function(data) {
				self.linguas(data);
			});
			};
		};
		getLinguas();


	};
	ko.applyBindings(new ViewModel());
});

// Fim KO
