const form = document.getElementById('form-atividade');
const imgValido = '<img src= "./imagens/very.jpg" alt= "conteudo verificado" />';
const imginvalido = '<img src="./imagens/not.jpg" alt= "conteudo invalido" />';

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNomeContato = document.getElementById('nome-completo');
    const inputNumeroTelefone = document.getElementById('numero-telefone');

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroTelefone.value}</td>`;
    linha += `<td>${inputNumeroTelefone.value >= 9 ? imgValido : imginvalido}</td>`;
    linha += `</td>`;

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNomeContato.value = '';
    inputNumeroTelefone.value = '';


});