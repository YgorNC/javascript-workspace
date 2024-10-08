let investido = [];
let tabela = document.querySelector("#tabela tbody");

// Função que cria inputs dinamicamente para os valores de cada CD
function gerarInputsQuantidade(quantidade) {
    let inputsCds = document.getElementById("inputsCds");
    inputsCds.innerHTML = '';

    for (let i = 1; i <= quantidade; i++) {
        let input = document.createElement('input');
        input.type = 'number';
        input.classList.add('form-control', 'mb-2');
        input.id = `cdValue${i}`;
        input.placeholder = `Valor unitário do CD ${i}`;
        inputsCds.appendChild(input);
    }
}

// Função que adiciona um item à tabela
function adicionarItem() {
    let nome = document.getElementById("name").value;
    let quantidade = parseInt(document.getElementById("value").value);

    // Verifica se os valores estão preenchidos corretamente
    if (!nome || isNaN(quantidade) || quantidade <= 0) {
        alert("Preencha os campos corretamente.");
        return;
    }

    // Verifica se o valor unitário de cada CD foi preenchido, se houver mais de um CD
    let valoresCDs = [];
    if (quantidade > 1) {
        for (let i = 1; i <= quantidade; i++) {
            let valorCD = parseFloat(document.getElementById(`cdValue${i}`).value);
            if (isNaN(valorCD) || valorCD <= 0) {
                alert(`Preencha corretamente o valor unitário do CD ${i}`);
                return;
            }
            valoresCDs.push(valorCD);
        }
    } else {
        let valorCD = parseFloat(document.getElementById('cdValue1').value);
        if (isNaN(valorCD) || valorCD <= 0) {
            alert('Preencha corretamente o valor unitário do CD.');
            return;
        }
        valoresCDs.push(valorCD);
    }

    // Calcula o valor total investido e a média de gastos por CD
    let valorTotal = 0;

    // Loop para somar todos os valores do array
    for (let i = 0; i < valoresCDs.length; i++) {
        valorTotal += valoresCDs[i];
    }
    let media = valorTotal / quantidade;

    investido.push({
        nome,
        quantidade,
        valorTotal,
        media
    });

    exibirTabela(investido);

    // Limpa os campos após adicionar
    document.getElementById("name").value = '';
    document.getElementById("value").value = '';
    document.getElementById("inputsCds").innerHTML = '';
}

// Função que exibe a tabela
function exibirTabela() {
    tabela.innerHTML = '';

    investido.forEach((investido, i) => {
        let row = `
        <tr>
            <td>${i + 1}</td>
            <td>${investido.nome}</td>
            <td>${investido.quantidade}</td>
            <td>R$ ${investido.valorTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
            <td>R$ ${investido.media.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
        </tr>
        `;
        tabela.innerHTML += row;
    });
}

// Função que gera os inputs de acordo com a quantidade de CDs
document.getElementById("value").addEventListener('input', function () {
    let quantidade = parseInt(this.value);
    if (quantidade > 1) {
        gerarInputsQuantidade(quantidade);
    } else {
        document.getElementById("inputsCds").innerHTML = '';
    }
});

// Função que remove o último item da tabela
function excluirItem() {
    investido.pop();
    exibirTabela();
}
