 var produtosCadastrados = []
 var RegistroDeVendas = []

function ConfirmarValor(){
let produto = document.getElementById('ProdutoDigitado').value
//Peguei o valor do Input
produtosCadastrados.push(produto) //Adicionei esse valor ao meu array
AtualizarLista() //chamei a função para a dicionar o produto a minha lista 
}

function AtualizarLista(){
    let res = document.getElementById('ProdutosRegistrados'); //puxei a lista ul que esta no HTML
    res.innerHTML = ''; //Isso obriga a lista ser limpa antes de ser atualizada, se não fizer isso, ela vai ficar imprimindo duplicado.

    for(let i = 0; i<produtosCadastrados.length; i++){ //criei uma variavel i = 0 e falei para percorrer todos os itens do array com length
        let item = document.createElement('li') //toda vez que percorrer quero que crie um elemento li
        item.textContent = produtosCadastrados[i] //o texto exibido no item de lista será o nome do produto
        item.classList.add('li'); // Adicione uma classe à <li>
        res.appendChild(item) //adiciona o item a ul  criada
    }
}

function registrarvenda() {
    let NomeProduto = document.getElementById('NomeDoProduto').value;
    let ValorDaVenda = document.getElementById('ValorDaVenda').value;
    let DataDaVenda = document.getElementById('DataDaVenda').value;

    if (!NomeProduto || !ValorDaVenda || !DataDaVenda) {
        alert('Preencha todos os campos.');
        return;
    }

    let res = document.getElementById('res');
    let total = { NomeProduto, valor: ValorDaVenda, data: DataDaVenda };
    RegistroDeVendas.push(total);

    // Limpe os campos de entrada
    document.getElementById('NomeDoProduto').value = '';
    document.getElementById('ValorDaVenda').value = '';
    document.getElementById('DataDaVenda').value = '';

    console.log(RegistroDeVendas);




function VendasHoje() {
    
    let lista =document.getElementById('lista')
    let totalHoje = document.getElementById('totalhoje')
    const dataHoje = new Date()
    const ano = dataHoje.getFullYear();
    const mes = String(dataHoje.getMonth() + 1).padStart(2, '0'); // Adicione zero à esquerda se necessário
    const dia = String(dataHoje.getDate()).padStart(2, '0'); // Adicione zero à esquerda se necessário
    const dataHojeFormatada = `${ano}-${mes}-${dia}`;
    console.log(dataHojeFormatada)
    

   const vendasFiltradas = RegistroDeVendas.filter(registro => registro.data === dataHojeFormatada)
   
   lista.innerHTML = ''; //Isso obriga a lista ser limpa antes de ser atualizada, se não fizer isso, ela vai ficar imprimindo duplicado.
   // Variável para armazenar a soma dos valores
let somaValores = 0;
   vendasFiltradas.forEach(registro => {
    let valor = parseFloat(registro.valor); // Converte o valor para número
    
    
     // Adicione o valor à soma
     somaValores += valor;
    totalHoje.textContent =` Total:${somaValores}`
    let saida = document.createElement('li')
    saida.classList.add('saida'); // Adicione uma classe à <li>
    saida.textContent = `Produto: ${registro.NomeProduto} / Valor: R$ ${registro.valor} / Data: ${registro.data}`;
   lista.appendChild(saida)
   
})

}
function vendasmes() {
    const totalElement = document.getElementById('total');
    let listames = document.getElementById('listames');
    const dataHoje = new Date();
    const ano = dataHoje.getFullYear();
    const mes = String(dataHoje.getMonth() + 1).padStart(2, '0');
    const dia = String(dataHoje.getDate()).padStart(2, '0');
    const dataHojeFormatada = `${ano}-${mes}-${dia}`;

    // Puxando o mês passado
    let mespassado = String(dataHoje.getMonth()).padStart(2, '0');
    let datamespassadoFormatada = `${ano}-${mespassado}-${dia}`;

    const vendasessemes = RegistroDeVendas.filter(registro => registro.data >= datamespassadoFormatada && registro.data <= dataHojeFormatada);
    listames.innerHTML = '';
    
    let somaValores = 0; // Variável para armazenar a soma dos valores

    vendasessemes.forEach(registro => {
        let valor = parseFloat(registro.valor); // Converte o valor para número
        somaValores += valor; // Adicione o valor à soma
        let cavalo = document.createElement('li');
        cavalo.classList.add('saida');
        cavalo.textContent =  `Produto: ${registro.NomeProduto} / Valor: R$ ${valor} / Data: ${registro.data}`;
        listames.appendChild(cavalo);
    });

    // Agora você pode exibir a soma na página
    totalElement.textContent = ` Total:${somaValores}`;
}


vendasmes()
VendasHoje()
}

function FiltrarPorProduto() {
    let produto = document.getElementById('ProdutoDesejado').value;
    let periodoInic = new Date(document.getElementById('dataInicial').value);
    let periodoFin = new Date(document.getElementById('dataFinal').value);
    let res = document.getElementById('listaMês');

    if (!produto || !periodoInic || !periodoFin) {
        alert('Preencha todos os campos.');
        return;
    }

    let filtrado = RegistroDeVendas.filter(registro => {
        const registroData = new Date(registro.data);
        return registro.NomeProduto === produto && registroData >= periodoInic && registroData <= periodoFin;
    });

    res.innerHTML = '';
    filtrado.forEach(registro => {
        let saida = document.createElement('li');
        saida.textContent = `Produto: ${registro.NomeProduto} / Valor: R$ ${registro.valor}/ Data: ${registro.data}`;
        res.appendChild(saida);

    });
    document.getElementById('ProdutoDesejado').value = '';
    document.getElementById('dataInicial').value = '';
    document.getElementById('dataFinal').value = '';
}












