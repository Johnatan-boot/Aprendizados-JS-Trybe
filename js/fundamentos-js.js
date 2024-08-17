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
document.write(subtraiCarros + " Carro removido em nosso estoque");

console.log(multiplicaCarros + " Carros Multiplicado em nosso estoque");
console.log(divisaoCarros + " Carros dividido em nosso estoque");



