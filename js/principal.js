var titulo = document.querySelector(".titulo");
titulo.textContent = "Financeiro Controle";

var receitas = document.querySelectorAll(".receita");
console.log(receitas);

//FORMA FOR DE REPETICAO

var saldo = 0.0;

for (var registro = 0; registro < receitas.length; registro++) {
    var receita = receitas [registro];
    var tdValor = receita.querySelector(".info-valor");
    var tdSaldo = receita.querySelector(".info-saldo");
    var valor = parseFloat (tdValor.textContent);
    saldo += valor; //saldo = saldo + valor
    tdSaldo.textContent = saldo.toFixed(2);
    
    if (saldo < 0) {
        tdSaldo.classList.add("receita-negativa"); //tdSaldo.style.color = "red";
    }
}

 //FORMA WHILE DE REPETICAO

//var registro = 0;
//var saldo = 0.0;

// while (registro < receitas.length){
//     var receita = receitas[registro];
//     var tdValor = receita.querySelector(".info-valor");
//     var tdSaldo = receita.querySelector(".info-saldo");
//     var valor = parseFloat(tdValor.textContent);
//     saldo+=valor;
//     tdSaldo.textContent = saldo.toFixed(2);       
    
//     if (saldo < 0) {
//         tdSaldo.style.color = "red";
//     }
//     registro++; "é a msm coisa que registro = registro + 1;" 
// }

//______________________________________________________________________________

// FORMA NA UNHA

// var receita2 = document.querySelector ("#segunda-receita");
// var valor2 = receita2.querySelector (".info-valor");
// var saldo2 = receita2.querySelector (".info-saldo");
// saldo2.textContent = parseFloat (valor.textContent) + parseFloat (valor2.textContent);

// var receita3 = document.querySelector ("#terceira-receita");
// var valor3 = receita3.querySelector (".info-valor");
// var saldo3 = receita3.querySelector (".info-saldo");
// saldo3.textContent = parseFloat (valor.textContent) + parseFloat (valor3.textContent);

// var receita4 = document.querySelector ("#quarta-receita");
// var valor4 = receita4.querySelector (".info-valor");
// var saldo4 = receita4.querySelector (".info-saldo");
// saldo4.textContent = parseFloat (valor.textContent) + parseFloat (valor4.textContent);

// var receita5 = document.querySelector ("#quinta-receita");
// var valor5 = receita5.querySelector (".info-valor");
// var saldo5 = receita5.querySelector (".info-saldo");
// saldo5.textContent = parseFloat (valor.textContent) + parseFloat (valor5.textContent);

// if (saldo5.textContent < 0) {
//     saldo5.style.color = "red";
// }

var botao = document.querySelector("#adicionar-receita");
botao.addEventListener("click", function(evento) {
    evento.preventDefault(); //--refresh na tela 
    var form = document.formulario;
    var descricao = form.descricao.value;
    var categoria = form.categoria.value;
    var data = form.data.value;
    var valor = parseFloat (form.valor.value);
    var msgErros = document.querySelector(".erros");
    var erros = [];
    //var erros = document.querySelector (".erros");
    
    if (descricao.length <= 0) {
  erros.push ("A descricao é obrigatória!");
    }
    if (categoria.length <= 0) {
  erros.push ("A categoria é obrigatória!");
    }
    if (data.length <= 0) {
  erros.push ("A data é obrigatória!");
    }
    if (isNaN(valor)) {
  erros.push ("O valor é obrigatório!");
    } 
else {
    if (valor == 0) {
            erros.push ("O valor deve ser diferente de (0)!");
    }
}
if (erros.length > 0) {
    limparErros (msgErros);
    for (var erro = 0; erro < erros.length; erro++){
         var li = document.createElement("li");
         li.textContent = erros[erro];
         msgErros.appendChild(li);
    }
    return;
}
var tabela = document.querySelector("#tabela-receitas");
var tr = document.createElement ("tr");
var tdDescricao = document.createElement("td");
var tdCategoria = document.createElement("td");
var tdData = document.createElement("td");
var tdValor = document.createElement("td");
var tdSaldo = document.createElement("td");

tdDescricao.textContent = descricao;
tdDescricao.classList.add("info-descricao");
tr.appendChild(tdDescricao);
tdCategoria.textContent = categoria;
tdCategoria.classList.add("info-categoria");
tr.appendChild(tdCategoria);
tdData.textContent = data;
tdData.classList.add("info-data");
tr.appendChild(tdData);
tdValor.textContent = valor;
tdValor.classList.add("info-valor");
tr.appendChild(tdValor);
var receitas = document.querySelectorAll(".receita");
var saldoAnterior = parseFloat (receitas[receitas.length - 1].querySelector (".info-saldo").textContent);
var saldo = saldoAnterior + valor;
tdSaldo.textContent = saldo.toFixed(2);
tdSaldo.classList.add("info-saldo");
tr.appendChild (tdSaldo);

if (saldo < 0) {
    tdSaldo.classList.add("receita-negativa");
}
tr.classList.add("receita");
tabela.appendChild(tr);

    limparErros (erros);
    formulario.reset();
});
 function limparErros (erros) {
     erros.innerHTML = "";
 }
