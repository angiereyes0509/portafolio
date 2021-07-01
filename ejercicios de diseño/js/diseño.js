/*let calcularlongitud= function longitud(){
	let palabra=document.getElementById("palabra").value
    alert("la extension de la palabra " +palabra+" \n es "+palabra.length+ " letras")
}

let convertirmayus= function convertir(){
	let palabra=document.getElementById("palabra").value
	let mayusculas=palabra.toUpperCase()
    alert("convertir a mayusculas " +mayusculas)
}

let convertirminus= function(){
	let palabra=document.getElementById("palabra").value
	let minusculas=palabra.toLowerCase()
    alert("convertir a minusculas " +minusculas)
}


function extraerInicial(){
	let palabra=document.getElementById("palabra").value
	let inicial=palabra.substring(0,1)
    alert("letra inicial es " +inicial)
}

let unirnombre= function(){
	let nombre=document.getElementById("nombre").value
	let apellido=document.getElementById("apellido").value
	let completo=nombre.concat(" ",apellido)
    alert("nombre completo " +completo)
}*/




const validar=/[a-z A-Z]{5,10}\s\./

function validar(event){
e.preventDefault()

let palabra=document.querySelector('#palabra .feedback')
	

	if(palabra.test(palabra)){
		console.log("palabra correcta")
	}

	else{
		console.log("no es un valor valido")
		
	}
})

}