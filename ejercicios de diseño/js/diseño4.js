function calcular(){

let numero1=document.getElementById("pnumero").value
numero1=parseInt(numero1)
let numero2=document.getElementById("snumero").value
numero2=parseInt(numero2)
let op=document.getElementById("op").value
op=parseInt(op)
let resultado

switch(op){

	case 1:
    resultado=numero1+numero2
    alert("la suma del "+ numero1 + " y el " + numero2 +" es "+ resultado)
	break;

	case 2:
    resultado=numero1-numero2
    alert("la resta del"+ numero1 + "y el" + numero2 +"es" + resultado)
	break;

    case 3:
    resultado=numero1*numero2
    alert("la multiplicacion del"+ numero1 + "y el" + numero2 + "es" + resultado)

    break;

    case 4:
    resultado=numero1/numero2
    alert("la division del" + numero1 + "y el" + numero2 + "es" + resultado)

    break ;

    default:
        alert("opcion incorrecta")
    

    break; 


}
}
