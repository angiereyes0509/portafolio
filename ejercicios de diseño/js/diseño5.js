function calcular(){
	let a=document.getElementById("lado1").value
    a=parseInt(a)

    let b=document.getElementById("lado2").value
    b=parseInt(b)

    let c=document.getElementById("lado3").value
    c=parseInt(c)


     if (a===b && b===c && c===a){
	  alert("el triangulo es equilatero")
     }

      else if ((a===b && b!==c)||(a==c && b!=a)||(b==c && a!=b)){
	   alert("el triangulo es isoceles")
      }

      else if (a!==b && b!==c){
	  alert("el triangulo es escaleno")
	}
      else{
    alert("valores no validos")
}

}