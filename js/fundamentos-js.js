//Criando variaveis
/*let carro_1 = 'Ferrari';
let carro_2 = 'Mustang';
let carro_3 = 'Dodger Charge';*/

//Atribuindo um novo valor a variavel
veículo = 'Carro';
//veículo = 'Bicicleta';
//veículo = 'Navio';

//Criando Constantes
//const carro_1 = 'Fiat Argo';
let carro_1 = 'Fiat Argo';
let descricaoModelo1 = 'Design esportivo e exclusivo até nos pequenos detalhes.'+
'O Fiat Argo tem a essência italiana, a robustez brasileira e um estilo único ';

//let carro_2 = 'Fiat Chronus';
const carro_2 = 'Fiat Chronus';
let descricaoModelo2 = 'Todo o estilo que só o design italiano pode proporcionar. Surpreenda a si'+
'mesmo e a todos com o novo Cronos';

//const carro_3 = 'Fiat Pulse';
let carro_3 = 'Fiat Pulse';
let descricaoModelo3 = 'Com uma direção fluida e excelente consumo de combustível, esse modelo é ideal para quem preza pela eficiência e economia.';



//PREÇO CARROS
//const  preco_Carro_1 = 'R$'+60.00+'.000';
let    preco_Carro_1 = 'Preço:R$'+60.00+'.000';

//const preco_Carro_2 = 'R$'+80.00+'.000';
let    preco_Carro_2 = 'Preço:R$'+80.00+'.000';

//const preco_Carro_3 = 'R$'+120.00+'.000';
let preco_Carro_3 = 'Preço:R$'+120.00+'.000';


//EXIBINDO INFORMAÇÕES DOS MODELOS DE CARROS NOS CARDS
document.getElementById('carro_1').innerHTML = ""+carro_1;
document.getElementById('descricaoModelo1').innerHTML = ""+descricaoModelo1;
document.getElementById('preco_Carro_1').innerHTML = ""+preco_Carro_1;


document.getElementById('carro_2').innerHTML = ""+carro_2
document.getElementById('descricaoModelo2').innerHTML = ""+descricaoModelo2;
document.getElementById('preco_Carro_2').innerHTML = ""+preco_Carro_2;


document.getElementById('carro_3').innerHTML = ""+carro_3
document.getElementById('descricaoModelo3').innerHTML = ""+descricaoModelo3;
document.getElementById('preco_Carro_3').innerHTML = ""+preco_Carro_3;






```

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

    
 /*-------------
 ULTILIZANDO O OPERADOR NOT SEMPRE SERÁ RESPOSTA NEGATIVA
 OU FALSE
 
 ================================= OPERADOR NOT !=*/
 
let compreiCarro = true;
let naoCompreicarro = false;
let estadoEmocional = !compreiCarro;
document.write(estadoEmocional);

document.
write
(
"<br>Consegui realizar o sonho de comprar meu primeiro Carro! "
+true)

document.
write
(
"<br>Infelizmente não consegui realizar o sonho de comprar meu primeiro Carro! "
+true)

document.
write
(
"<br>Consegui dinheiro o suficiente para comprar meu primeiro Carro? "
+estadoEmocional)

/*====================== IF/ ELSE======================================*/
const modeloCarroDisponivel = 'Fiat Argo'; //ALTERE AQUI A MUDANÇA DO QUE SERÁ APRENSENTADO

if (modeloCarroDisponivel === 'Fiat Punto') {
  document.write('<br>Comprei um Fiat Punto na Web motors');
} else if (modeloCarroDisponivel === 'Fiat Argo') {
  document.write('<br>Comprei um Fiat Argo na Web motors');
} else {
  document.write('<br>Comprei um ' + frutaDisponivel + 'na Web motors');
}

/*====================== 
IF/ ELSE
Encadeamento de condicionais
Eventualmente você vai se deparar com problemas 
que terão mais de duas condições a serem verificadas. 
Para atender a mais de duas condições nós utilizamos o else if.
======================================*/

const valordoVeículo = 150.000;

if (valordoVeículo >= 30.000) {
  document.write(carro_1+'<br>Veículo primeira Linha');
} else if (valordoVeículo >= 80.000 && valordoVeículo < 80.000 ) {
  document.write(carro_2+'<br>Veículo segunda Linha');
} else if (valordoVeículo >= 60.000 && valordoVeículo < 60.000 ) {
  document.write(carro_3+'<br>Veículo Linha econômica');
} else {
  document.write('<br>Veículo sem categoria');
}





  



```