  document.getElementById("adicionar-contato").addEventListener("click", function(e) {
	e.preventDefault();
	var nome = document.getElementById("nome-contato").value;
	var telefone = document.getElementById("telefone-contato").value;

	var tabela = document.querySelector("table tbody");
	var novaLinha = tabela.insertRow();
	var colunaNome = novaLinha.insertCell();
	var colunaTelefone = novaLinha.insertCell();

	colunaNome.innerText = nome;
	colunaTelefone.innerText = telefone;

	document.getElementById("nome-contato").value = "";
	document.getElementById("telefone-contato").value = "";
});
