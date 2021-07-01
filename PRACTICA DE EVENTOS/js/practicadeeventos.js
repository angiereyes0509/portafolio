boton.addEventListener('click',e=>{
	e.preventDefault()

	let nombre=document.getElementById('nombre').value
	nombre=parseInt(nombre)

	let apellido=document.getElementById('apellido').value
	apellido=parseInt(apellido)
   
    let correcto=document.getElementById('correcto')
	if(nombre==1 && apellido==3){
		texto=`<p>la respuesta es correcta  <img src="imagenes/cheques.png"></p>`
       correcto.innerHTML=texto
       correcto.style.setProperty("visibility","visible")
	   correcto.style.setProperty("opacity","1")
	   correcto.style.setProperty("transition","3s ease")
	}

	else if(nombre==2 && apellido==1){
		texto=`<p>la respuesta es correcta  <img src="imagenes/cheques.png"></p>`
       correcto.innerHTML=texto
       correcto.style.setProperty("visibility","visible")
	   correcto.style.setProperty("opacity","1")
	   correcto.style.setProperty("transition","3s ease")

	}

	else if(nombre==3 && apellido==2){
		texto=`<p>la respuesta es correcta  <img src="imagenes/cheques.png"></p>`
       correcto.innerHTML=texto
       correcto.style.setProperty("visibility","visible")
	   correcto.style.setProperty("opacity","1")
	   correcto.style.setProperty("transition","3s ease")

	}

	else{
		texto=`<p>la respuesta es incorrecta  <img src="imagenes/marca.png"></p>`
       correcto.innerHTML=texto
       correcto.style.setProperty("visibility","visible")
	   correcto.style.setProperty("opacity","1")
	   correcto.style.setProperty("transition","3s ease")
		
	}
})


num3.addEventListener('click', e=>{
	e.preventDefault()

	let respuesta=document.getElementById('acertijo')
	texto=`<p>la respuesta es incorrecta  <img src="imagenes/marca.png"></p>`
       respuesta.innerHTML=texto
       respuesta.style.setProperty("visibility","visible")
	   respuesta.style.setProperty("opacity","1")
	   respuesta.style.setProperty("transition","3s ease")		

})

num4.addEventListener('click', e=>{
	e.preventDefault()

	let respuesta=document.getElementById('acertijo')
	texto=`<p>la respuesta es correcta  <img src="imagenes/cheques.png"></p>`
       respuesta.innerHTML=texto
       respuesta.style.setProperty("visibility","visible")
	   respuesta.style.setProperty("opacity","1")
	   respuesta.style.setProperty("transition","3s ease")
})


num5.addEventListener('click', e=>{
	e.preventDefault()

	let respuesta=document.getElementById('acertijo')
	texto=`<p>la respuesta es incorrecta  <img src="imagenes/marca.png"></p>`
       respuesta.innerHTML=texto
       respuesta.style.setProperty("visibility","visible")
	   respuesta.style.setProperty("opacity","1")
	   respuesta.style.setProperty("transition","3s ease")
})


refran.addEventListener('click',e=>{
	e.preventDefault();
	let palabra=document.querySelector('input[name="palabra"]:checked').value
	palabra=parseInt(palabra)

	let correcto=document.getElementById('respuesta')

	if (palabra===1){
		texto=`<p>la respuesta es correcta
         <img src="imagenes/cheques.png"</p>`
         correcto.innerHTML=texto
         //correcto.style.setProperty("visibility","visible")

         correcto.setAttribute("class","prueba")

	}

	else{
		texto=`<p>la respuesta es incorrecta
         <img src="imagenes/marca.png"</p>`
         correcto.innerHTML=texto
         //correcto.style.setProperty("visibility","visible")
         //correcto.setAttribute("class","prueba"
         correcto.clasLit("prueba")
	}
})


pista.addEventListener('click', e=>{
	e.preventDefault()

	let repta1=document.getElementById('repta1')
	texto=`<p>Pista: PES_ _    _ GU_ L</p>`
       respuesta.innerHTML=texto
       respuesta.style.setProperty("visibility","visible")
	   respuesta.style.setProperty("opacity","1")
	   respuesta.style.setProperty("transition","3s ease")
	   })

solucion.addEventListener('click', e=>{
	e.preventDefault()

	let repta1=document.getElementById('repta1')
	texto=`<p>Solución: Pesan igual</p>`
       respuesta.innerHTML=texto
       respuesta.style.setProperty("visibility","visible")
	   respuesta.style.setProperty("opacity","1")
	   respuesta.style.setProperty("transition","3s ease")
	   })
