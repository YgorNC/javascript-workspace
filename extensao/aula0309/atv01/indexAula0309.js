function calculaJuros(valor) {
    return valor * 0.05; // Calcula 5% de juros
}

function calculaValorJuros(valor) {
    return parseFloat(valor) + calculaJuros(valor); // Soma o valor original com os juros calculados
}

const emprestimo = [];
let tabela = document.getElementById("tabela");

function adicionarItem() {
    let nome = document.getElementById("name").value;
    let valor = parseFloat(document.getElementById("value").value); // Converte o valor para número
    let valorCJuros = calculaValorJuros(valor); // Calcula o valor com juros

    emprestimo.push({
        nome,
        valor,
        valorCJuros
    });

    exibirTabela(emprestimo);

    document.getElementById("name").value = '';
    document.getElementById("value").value = '';
}

function exibirTabela() {
    // Limpa a tabela antes de preencher novamente
    tabela.innerHTML = `
    <tr>
        <th>ID</th>
        <th>Nome cliente</th>
        <th>Valor empréstimo</th>
        <th>Valor com juros</th>
    </tr>
    `;

    // Preenche a tabela com os dados do array de empréstimos
    let innerTabela = "";
    for (let i = 0; i < emprestimo.length; i++) {
        innerTabela += `
        <tr>
            <td>${i + 1}</td>
            <td>${emprestimo[i].nome}</td>
            <td>R$ ${emprestimo[i].valor.toFixed(2)}</td>
            <td>R$ ${emprestimo[i].valorCJuros.toFixed(2)}</td>
        </tr>
        `;
    }

    // Adiciona o conteúdo da tabela ao HTML
    tabela.innerHTML += innerTabela;
}

function excluirItem() {
    emprestimo.pop(); // Remove o último item da lista
    tabela.innerHTML = `
    <tr>
        <th>ID</th>
        <th>Nome cliente</th>
        <th>Valor empréstimo</th>
        <th>Valor com juros</th>
    </tr>
    `;
    exibirTabela(); // Atualiza a tabela com os itens restantes
}
