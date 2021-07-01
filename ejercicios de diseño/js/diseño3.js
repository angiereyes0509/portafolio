let convertir=function(){
	let grados=document.getElementById("grados").value
	let opcion1=document.getElementById("opcion1").value
	opcion1=parseInt(opcion1)
	let opcion2=document.getElementById("opcion2").value
	opcion2=parseInt(opcion2)
	let conversion

	if (opcion1===1 && opcion2===2){
		grados=parseFloat(grados)
		conversion=(grados*9/5+32)
		alert("la conversion de "+grados+" centigrados a fahrenheit es " +conversion.toFixed(2))
	}
	

	else if (opcion1===2 && opcion2===1){		
		grados=parseFloat(grados)
		conversion=(5*(grados-32)/9)
		alert("la conversion de "+grados+" centigrados a celcius es " +conversion.toFixed(2))

	}

else if (opcion1===2 && opcion2===3){		
		grados=parseFloat(grados)
		conversion=(5*(grados-32)/9+273.15)
		alert("la conversion de "+grados+" centigrados a kelvin es " +conversion.toFixed(2))

	}

	else if (opcion1===3 && opcion2===2){		
		grados=parseFloat(grados)
		conversion=(9*(grados-273.15)/5+32)
		alert("la conversion de "+grados+" centigrados a fahrenheit es " +conversion.toFixed(2))

	}


	else if (opcion1===3 && opcion2===1){		
		grados=parseFloat(grados)
		conversion=(grados-273.15)
		alert("la conversion de "+grados+" centigrados a celcius es " +conversion.toFixed(2))

	}


	else if (opcion1===1 && opcion2===3){		
		grados=parseFloat(grados)
		conversion=(grados+273.15)
		alert("la conversion de "+grados+" centigrados a kelvin es " +conversion.toFixed(2))

	}
}