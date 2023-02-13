var sexo = prompt("Insira M para masculino, F para feminino",);
var idade = prompt("Insira a idade");
var estudanteProg = confirm("É estudante de programação ");
var estudanteLAB = confirm("É estudante do LAB 365");
        
if(idade < 18 && estudanteProg == false){
            document.getElementById("Mensagem").innerHTML = "Ingresso não permitido";
        }
        else if(idade > 60 || estudanteLAB == true){
            document.getElementById("Mensagem").innerHTML = "Entrada gratuita";
        }
        else if(sexo == "M"){
            document.getElementById("Mensagem").innerHTML = "Entrada $80";
        }
        else if(sexo == "F"){
            document.getElementById("Mensagem").innerHTML = "Entrada $50";
        }
