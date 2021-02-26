//***CALCULANDO IMC E DASTACANDO DADOS INVALIDOS***

//Pegando informações da Tr
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
		
		var paciente = pacientes[i];

		//Pegando informações das Td
		var tdPeso = paciente.querySelector(".info-peso");
		var peso = tdPeso.textContent;

		var tdAltura = paciente.querySelector(".info-altura");
		var altura = tdAltura.textContent;

		var tdImc = paciente.querySelector(".info-imc");

		//Criando variaveis true de validação
		var pesoEhValido = validaPeso(peso);
		var alturaEhValido = validaAltura(altura);

		//Verificação de peso valido
		if(!pesoEhValido){
			tdImc.textContent = "Peso invalido!";
			pesoEhValido = false;
			paciente.classList.add("paciente-invalido");
		}

		//Verificação de altura valida
		if(!alturaEhValido){
			tdImc.textContent = "Altura invalida!";
			pesoEhValido = false;
			paciente.classList.add("paciente-invalido");
		}

		
		if (pesoEhValido && alturaEhValido) {
			var imc = calculaImc(peso,altura);
			tdImc.textContent = imc;
			
		}
	}


	function validaPeso(peso){
		if (peso >= 0 && peso <1000){
			return true;
		}
		else{
			return false;
		}
	}

	function validaAltura(altura){
		if(altura >= 0 && altura <3){
			return true;
		}
		else{
			return false;
		}
	}

	//Calculando IMC
	function calculaImc(peso,altura){
		var imc = 0;
		var imc = peso/(altura*altura);
		return imc.toFixed(2);
	}