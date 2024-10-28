//Criando variaveis
/*let carro_1 = 'Ferrari';
let carro_2 = 'Mustang';
let carro_3 = 'Dodger Charge';*/

//Atribuindo um novo valor a variavel
veículo = 'Carro';
//veículo = 'Bicicleta';
//veículo = 'Navio';

//Criando Constantes
const carro_1 = 'Fiat Argo';
const carro_2 = 'Fiat Chronus';
const carro_3 = 'Fiat Pulse';

//PREÇO CARROS
const  preco_Carro_1 = 60.000;
const preco_Carro_2 = 80.000;
const preco_Carro_3 = 120.000;

//Exibindo em Tela o valor das variaveis
document.write(carro_1);
document.write(" R$"+preco_Carro_1 +".000,00 <br>"
+carro_2+" R$"+preco_Carro_2 +".000,00 <br>"
+ carro_3 + " R$"+preco_Carro_3 +".000,00" );




//Exibindo o valor da Constante
console.log(carro_1);
console.log(carro_2);
console.log(carro_3);
console.log(veículo);

//CRIANDO UMA VARIAVEL STATUS VENDA
let statusVenda = true;
console.log('CARRO VENDIDO:' + statusVenda);

document.write('<br>Se Carro foi vendido,'
+" Retorne: " +statusVenda+";");


//Exibindo preço de carros

/*console.log('R$'+ preco_Carro_1 +',00');
console.log('R$'+preco_Carro_2+',00');
console.log('R$'+preco_Carro_3+',00');*/

//TESTANDO UMA VARIAVEL COM TYPEOF

console.log(typeof statusVenda); // variavel do tipo boolean



//CRIANDO UMA VARIAVEL DE ADIÇÃO DE CARROS
let adicionaCarros = 1 + 1;
//CRIANDO UMA VARIAVEL DE ADIÇÃO DE CARROS
let subtraiCarros = 2 - 1;
//CRIANDO UMA VARIAVEL DE ADIÇÃO DE CARROS
let multiplicaCarros = 2 * 2;
//CRIANDO UMA VARIAVEL DE ADIÇÃO DE CARROS
let divisaoCarros = 4 / 2;

document.write("<h2>Quantidade de itens no Estoque</h2>"
+carro_1 + " : "
+adicionaCarros + " itens em estoque.<br>");
document.write(
carro_2 + " : "
+subtraiCarros + " item em estoque.<br>");
document.write(
carro_3 + " : "
+multiplicaCarros + " itens em estoque. <br>");


console.log(adicionaCarros + " Carros adicionados em nosso estoque");
document.write(
"<h2>Atualização de Estoque</h2>"    
+adicionaCarros + " Carros adicionados em nosso estoque<br>");

console.log(subtraiCarros + " Carros subtraido em nosso estoque");
document.write(subtraiCarros + " Carro removido em nosso estoque<br>");

console.log(multiplicaCarros + " Carros Multiplicado em nosso estoque");
console.log(divisaoCarros + " Carros dividido em nosso estoque");



//Criada uma variavel estoque de veiculos abastecidos
let estoqueVeiculosAbastecidos = 100;
//Criada uma variavel estoque de veiculos em falta
let estoqueVeiculosEscasso = 0; 

//Operadores de Comparação  Verifica  > se um elemento é maior que outro
//retornará o que for especificado em document.write
estoqueVeiculosAbastecidos > estoqueVeiculosEscasso;
document.write(
"Estoque Abastecido com Sucesso ! : "+    
estoqueVeiculosAbastecidos +" Unidades<br>");

estoqueVeiculosEscasso < estoqueVeiculosAbastecidos;
document.write(
"Estoque Em falta, Reponha seu estoque urgente! : "+    
estoqueVeiculosEscasso +" Unidades<br>");

const veiculo = 'Dodger Charger';

const verificaTipoVeiculo = veiculo === 'Dodger Charger';

document.write("Afirmação Correta, é um Veiculo do Tipo Carro e do modelo: "+veiculo+
": "+verificaTipoVeiculo);
document.write(" <br>");

/*
//Verificação de quando o setor de  Compras fará pedido para estoque
let dataCompras = true
let dataNaoCompras = false
let tarefaCompras;
tarefaCompras = dataCompras && dataNaoCompras
console.log(tarefaCompras+": HOJE NÃO É DIA DE FAZER COMPRAS!");

//Foram atendidas as 2 condições como TRUE por isso o operador and responde como verdadeiro a condição
//sim hoje é dia de fazer compras
tarefaCompras = estoqueVeiculosAbastecidos && dataCompras
console.log(tarefaCompras+"HOJE É DIA DE FAZER COMPRAS!");


//ESTA É A LOGICA PARA O SETOR DE COMPRAS  NÃO COMPRAR VEICULOS============================
document.write(tarefaCompras = estoqueVeiculosAbastecidos && dataNaoCompras
+ "<h2>Tarefa:Hoje é dia de fazer Compras ?</h2>" 
);
document.write("O dia de fazer compras é no dia 30 de cada mês: ")

//ESTA É A LOGICA PARA O SETOR DE COMPRAS  NÃO COMPRAR VEICULOS============================



//ESTA É A LOGICA PARA O SETOR DE COMPRAS   COMPRAR VEICULOS============================

document.write(tarefaCompras = estoqueVeiculosAbastecidos && dataCompras

 + "<h2>Tarefa:Hoje é dia de fazer Compras ?</h2>" 
 +tarefaCompras + " : Hoje é dia de fazer compras!<br>");
 document.write("Hoje é dia 30, e o estoque está em falta: ")

 //ESTA É A LOGICA PARA O SETOR DE COMPRAS   COMPRAR VEICULOS============================
*/



//======================= operadores logicos AND && ===============

let naoEdiadeCompras = false;
let diadeCompras    = true;
let decisaoCompras;

//Com as variáveis definidas, podemos usar o operador && (AND).
let decisaodeCompras = naoEdiadeCompras && diadeCompras
//console.log(decisaoCompras); // false
//sempre será negativo condição
document.write("<h2>Tarefa:Hoje é dia de fazer Compras ?</h2>"
+decisaodeCompras+": hoje não é dia de fazer compras, estoque possui alguns produtos diponiveis.");
document.write(": "+estoqueVeiculosAbastecidos+" itens")
document.write("<h2>Tarefa:Hoje é dia de fazer Compras ?</h2>"
    +diadeCompras+": hoje é dia de fazer compras e abastecer seu estoque.");
    document.write(": "+estoqueVeiculosEscasso+" itens");



// ==============  Operador OR - || =================


let PagamentoCredito = false;
let PagamentoDebito = true;
let formaPagamento = PagamentoDebito || PagamentoCredito;
//console.log(formaPagamento); // true

document.write(
    
"<br> Qual  a forma de pagamento, será no Debito? "+formaPagamento);
    

document.write(
    
    "<br> Qual  a forma de pagamento, será no Crédito? "+PagamentoCredito);