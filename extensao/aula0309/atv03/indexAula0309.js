function calculaImposto(valor) {
    return valor * 0.12; // Calcula 12% sobre o valor do produto para o imposto
}

function calculaValorImposto(valor) {
    return parseFloat(valor) + calculaImposto(valor); // Soma do valor do produto + imposto
}

const imposto = [];
let tabela = document.getElementById("tabela");

function adicionarItem() {
    let produto = document.getElementById("product").value;
    let valor = parseFloat(document.getElementById("value").value);

    if (!produto || isNaN(valor)) {
        alert("Preencha os campos corretamente.");
        return;
    }

    let valorCImposto = calculaValorImposto(valor);

    imposto.push({
        produto,
        valor,
        valorCImposto
    });

    exibirTabela(imposto);

    document.getElementById("product").value = '';
    document.getElementById("value").value = '';
}

function exibirTabela() {
    tabela.innerHTML = `
    <tr>
        <th>ID</th>
        <th>NOME PRODUTO</th>
        <th>VALOR DO PRODUTO</th>
        <th>VALOR COM IMPOSTO</th>
    </tr>
    `;

    let innerTabela = "";
    for (let i = 0; i < imposto.length; i++) {
        innerTabela += `
        <tr>
            <td>${i + 1}</td>
            <td>${imposto[i].produto}</td>
            <td>R$ ${imposto[i].valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
            <td>R$ ${imposto[i].valorCImposto.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
        </tr>
        `;
    }

    tabela.innerHTML += innerTabela;
}

function excluirItem() {
    imposto.pop();
    tabela.innerHTML = `
    <tr>
        <th>ID</th>
        <th>NOME PRODUTO</th>
        <th>VALOR DO PRODUTO</th>
        <th>VALOR COM IMPOSTO</th>
    </tr>
    `;
    exibirTabela();
}
