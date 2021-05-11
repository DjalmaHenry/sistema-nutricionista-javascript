console.log("principal.js");
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutri+";
var subtitulo = document.querySelector(".subtitulo");
subtitulo.textContent = "Lista de pacientes";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
    var tdPeso = pacientes[i].querySelector(".info-peso");
    var peso = tdPeso.textContent;
    var tdAltura = pacientes[i].querySelector(".info-altura");
    var altura = tdAltura.textContent;
    
    var tdImc = pacientes[i].querySelector(".info-imc");
    if(peso <= 0 || peso >= 1000){
        console.log("Peso inválido!");
        tdImc.textContent = "Peso inválido!";
        pacientes[i].classList.add("paciente-invalido");
    } else if(altura <= 0 || altura >= 3.00){
        console.log("Altura inválida!");
        tdImc.textContent = "Altura inválida!";
        pacientes[i].classList.add("paciente-invalido");
    } else {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function calculaImc(peso, altura){
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
}