//CRIANDO UM SISTEMA DE LOGIN PARA ACESSO AO SISTEMA DA X-CAR
let nomeGerente = 'johnatan';

let cargo1 = 'gerente';

let nomeVendedor = 'Jorge';

let cargo2 = 'vendedor';

let cargo = 'nenhum';

let senhaDeAcesso = 'adm123';




document.getElementById("nomeGerente").innerHTML = "Nome do Gerente:" +nomeGerente



//Regras para acesso autorizado ao sistema

if (nomeGerente === 'johnatan' && cargo1 === 'gerente' && senhaDeAcesso ==='adm123') {
    console.log("Bem vindo de Volta" + cargo1 + ":" + nomeGerente + 'a nossa Plataforma!');
    document.write('Perfil : ADM<br>');
    //NÃO APAGUE ESTA LINHA É NECESSÁRIO MESMO PARECENDO A IDEIA DE REPETIDA
   document.write("Bem vindo de Volta " + cargo1 + ": " + nomeGerente + ' a nossa Plataforma!<br>');
   document.write("Acesso total para configurações!");

  }else if(nomeVendedor==='Jorge' && cargo2==='vendedor' && senhaDeAcesso ==='vend123'){
    console.log("Bem vindo de Volta" + cargo2 + ":" + nomeVendedor + 'a nossa Plataforma!');
    document.write('Perfil : Restrito');    
    document.write("Bem vindo de Volta " + cargo2 + ": " + nomeVendedor + ' a nossa Plataforma!<br>');
  }else {
    document.write('Acesso Negado!');    
    document.write('Acesso Negado!');    

  }






