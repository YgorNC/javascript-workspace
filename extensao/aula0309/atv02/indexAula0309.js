function calculaGorjeta(valor) {
    return valor * 0.15; // Calcula 15% sobre a conta para ter o valor da gorjeta
}

function calculaValorGorjeta(valor) {
    return parseFloat(valor) + calculaGorjeta(valor); // Soma da conta + gorjeta
}

const gorjeta = [];
let tabela = document.getElementById("tabela");

function adicionarItem() {
    let nome = document.getElementById("name").value;
    let valor = parseFloat(document.getElementById("value").value);
    
    if (!nome || isNaN(valor)) {
        alert("Preencha os campos corretamente.");
        return;
    }

    let valorCGorjeta = calculaValorGorjeta(valor);

    gorjeta.push({
        nome,
        valor,
        valorCGorjeta
    });

    exibirTabela(gorjeta);

    document.getElementById("name").value = '';
    document.getElementById("value").value = '';
}

function exibirTabela() {
    tabela.innerHTML = `
    <tr>
        <th>ID</th>
        <th>NOME CLIENTE</th>
        <th>VALOR DA CONTA</th>
        <th>VALOR COM GORJETA</th>
    </tr>
    `;

    let innerTabela = "";
    for (let i = 0; i < gorjeta.length; i++) {
        innerTabela += `
        <tr>
            <td>${i + 1}</td>
            <td>${gorjeta[i].nome}</td>
            <td>R$ ${gorjeta[i].valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
            <td>R$ ${gorjeta[i].valorCGorjeta.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
        </tr>
        `;
    }

    tabela.innerHTML += innerTabela;
}

function excluirItem() {
    gorjeta.pop();
    tabela.innerHTML = `
    <tr>
        <th>ID</th>
        <th>NOME CLIENTE</th>
        <th>VALOR DA CONTA</th>
        <th>VALOR COM GORJETA</th>
    </tr>
    `;
    exibirTabela();
}