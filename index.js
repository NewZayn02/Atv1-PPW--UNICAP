// Import stylesheets
import './style.css';


		var botao = document.getElementById("botao");
		var resultado = document.getElementById("resultado");

		botao.addEventListener("click", function() {
			var numero = Math.floor(Math.random() * 6) + 1;
			resultado.innerHTML = numero;
		});
	