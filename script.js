

var iso = "Isósceles"
var esc = "Escaleno"
var equi = "Equilatero"
var erro = "não é um triângulo."

function resultado(){

    let ladoUm = parseInt(document.getElementById('ladoUm').value);
    let ladoDois = parseInt(document.getElementById('ladoDois').value);
    let ladoTres = parseInt(document.getElementById('ladoTres').value);
    
    
    if(ladoUm <= (ladoDois + ladoTres) && ladoDois <= (ladoUm + ladoTres) && ladoTres <= (ladoDois + ladoUm)){
        if(ladoUm == ladoDois && ladoDois == ladoTres){
            document.getElementById('resultado').innerHTML = equi;
        }
        else if(ladoUm == ladoDois || ladoUm == ladoTres || ladoTres == ladoDois){
            document.getElementById('resultado').innerHTML = iso;    
        }
        else{
            document.getElementById('resultado').innerHTML = esc;
        }
    }
    else{
        document.getElementById('resultado').innerHTML = erro;
        

    }
}