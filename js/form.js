//***PEGAR DADOS DO FORMULARIO E ADICIONAR NA TABELA***

var adicionarPaciente = document.querySelector("#adicionar-paciente");

adicionarPaciente.addEventListener("click", function(event) {
	event.preventDefault();
	
	var form = document.querySelector("#form-adiciona");
	var paciente = obetemDadosDoForm(form);

	var erros = validaPaciente(paciente);

	if(erros.length >0 ){
		exibeMensagemErro(erros);
		return;
	}

	adicionarPacienteNaTabela(paciente);
	
	form.reset();

	var mensagemErro = document.querySelector("#mensagem-erro");
	mensagemErro.innerHTML = "";
});

function obetemDadosDoForm(form){
	
	var paciente = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calculaImc(form.peso.value, form.altura.value)
	}

	return paciente;
}

function montaTr(paciente){

	//Criando o Tr
	var pacienteTr = document.createElement("tr");
	pacienteTr.classList.add("paciente");

	//Adicionando os td no tr
	pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
	pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
	pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
	pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
	pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

	return pacienteTr;
}

function montaTd(dado, classe){
	var td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe);

	return td;
}

function validaPaciente(paciente){
	
	var erros =[];
	if (!validaPeso(paciente.peso))		erros.push("Peso é inválido!!!");
	if (!validaAltura(paciente.altura)) erros.push("Altura é inválida!!!");
	if (paciente.nome.length == 0)      erros.push("Sem informação no Nome!!!");
	if (paciente.peso.length = 0)		erros.push("Sem informação no peso!!!");
	if (paciente.altura.length == 0)	erros.push("Sem informação na Altura!!!")
	if (paciente.gordura.length == 0)	erros.push("Sem informação em gordura!!!");
	return erros;
}

function exibeMensagemErro(erros){
	var ul = document.querySelector("#mensagem-erro");
	ul.innerHTML = "";
	erros.forEach(function(erro){
		
		var li = document.createElement("li");
		li.textContent = erro;
		ul.appendChild(li);
	});
}

function adicionarPacienteNaTabela(paciente){
	var pacienteTr = montaTr(paciente);
	var tabela = document.querySelector("#tabela-pacientes");
	tabela.appendChild(pacienteTr);
}