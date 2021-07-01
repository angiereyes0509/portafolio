function calcularllamada(){
	let cantidad=document.getElementById("cantidad").value
	let opcion=document.getElementById("opcion").value
	let fijo=100
	let celular=200
	if (opcion==="fijo"){
		let vm1=cantidad*fijo
		alert("su llamada a celular cuesta" + vm1)

	}

	else{
		let vm2=cantidad*celular
		alert("el costo de su llamada a fijo es" + vm2)
	}
}