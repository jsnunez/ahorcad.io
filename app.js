


let p=1;
let objeto1={};
let letras=[]

function ocultar(){
    document.getElementById('operando1').style.display = 'none';
    document.getElementById('bot1').style.display = 'none';
    document.getElementById('adivinar').style.display = 'inline-block';
    document.getElementById('reiniciar').style.display = 'inline-block';
    document.getElementById('iletra').style.display = 'inline-block';
    document.getElementById('operando2').style.display = 'inline-block';
    }
const inicializarJuego = function () {
    const operando1 = (document.getElementById("operando1").value).toLowerCase();

    document.getElementById("operando2").value = "";
objeto1=ingresar(operando1)
document.getElementById("titulo").innerHTML = "YA PUEDES EMPEZAR A JUGAR";

console.log(objeto1)
}
const adivinarLetra = function () {
    let operando2 = (document.getElementById("operando2").value).toLowerCase();
    if(letras.indexOf(operando2)==-1){
    letras.push(operando2)
    }
    else{    objeto1.intenstosRestantes=objeto1.intenstosRestantes+1
        alert("esa letra esta repetida")
    }
    document.getElementById("letras").innerHTML =letras
    adivinar(objeto1,operando2)
    document.getElementById("operando2").value = "";
   if(objeto1.letrasAdivinadas.indexOf("_")==-1){
   alert("ganaste el juego")
   document.getElementById('adivinar').style.display = 'none';
    }
}


function ingresar(palabra){


var objeto=
{

 palabraOculta:palabra.split(''),
letrasAdivinadas:palabra.split('').fill("_"),
intenstosRestantes:6,
letrasIncorrectas:[]
}
document.getElementById("resultado").innerHTML = objeto.letrasAdivinadas;


return objeto


}
function adivinar(objeto,operando2){
    console.log(objeto)
palabra=objeto.palabraOculta;
padivinada=objeto.letrasAdivinadas
console.log(palabra)
console.log(padivinada)


if(palabra.indexOf(operando2)==-1){
    objeto.intenstosRestantes=objeto.intenstosRestantes-1
    console.log("menos uno")
    if( objeto.intenstosRestantes==0){
        alert("el juego termino")
        document.getElementById('adivinar').style.display = 'none';
    }
    
}
while(palabra.indexOf(operando2)>=0){
  


    padivinada[palabra.indexOf(operando2)]=operando2
    palabra.splice(palabra.indexOf(operando2),1,"_")

    objeto.letrasAdivinadas=padivinada
    console.log(objeto)
  

}


document.getElementById("resultado").innerHTML = objeto.letrasAdivinadas;

document.getElementById("intentos").innerHTML = objeto.intenstosRestantes;

return(padivinada,intentos)





}