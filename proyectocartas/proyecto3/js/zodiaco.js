
boton.addEventListener('click', e=>{
     e.preventDefault()

     let Dia=document.getElementById('Dia').value
     Dia=parseInt(Dia)

     let Mes=document.getElementById('Mes').value
     Mes=parseInt(Mes)

    let correcto=document.getElementById('correcto')
    if (Dia==0 || Mes==0) {
        alert("No has llenado todos los campos")
    }

   else if(Dia>=21 && Mes==3 || Dia<=19 && Mes==4){ 
        texto=`<p>Tu signo del zodiaco es Aries. Perteneces a los signos de fuego<img src="imagenes/ariesicon.png"></p>`
        correcto.innerHTML=texto
        correcto.style.setProperty("visibility","visible")
        correcto.style.setProperty("opacity","1")
        correcto.style.setProperty("transition","all 1s ease") 

     }

    else if(Dia>=20 && Mes==4 || Dia<=21 && Mes==5){ 
        texto=`<p>Tu signo del zodiaco es Tauro. Perteneces a los signos de tierra<img src="imagenes/tauroicon.png"></p>`
        correcto.innerHTML=texto
        correcto.style.setProperty("visibility","visible")
        correcto.style.setProperty("opacity","1")
        correcto.style.setProperty("transition","all 1s ease")

     }

    else if(Dia>=22 && Mes==5 || Dia<=20 && Mes==6){ 
        texto=`<p>Tu signo del zodiaco es Geminis. Perteneces a los signos de aire<img src="imagenes/geminisicon.png"></p>`
        correcto.innerHTML=texto
        correcto.style.setProperty("visibility","visible")
        correcto.style.setProperty("opacity","1")
        correcto.style.setProperty("transition","all 1s ease")

     }

     else if(Dia>=21 && Mes==6 || Dia<=22 && Mes==7){ 
        texto=`<p>Tu signo del zodiaco es Cancer. Perteneces a los signos de agua<img src="imagenes/tauroicon.png"></p>`
        correcto.innerHTML=texto
        correcto.style.setProperty("visibility","visible")
        correcto.style.setProperty("opacity","1")
        correcto.style.setProperty("transition","all 1s ease")
     }

    else if(Dia>=23 && Mes==7 || Dia<=22 && Mes==8){ 
        texto=`<p>Tu signo del zodiaco es Leo. Perteneces a los signos de fuego<img src="imagenes/leoicon.png"></p>`
        correcto.innerHTML=texto
        correcto.style.setProperty("visibility","visible")
        correcto.style.setProperty("opacity","1")
        correcto.style.setProperty("transition","all 1s ease")

     }

    else if(Dia>=23 && Mes==8 || Dia<=22 && Mes==9){ 
        texto=`<p>Tu signo del zodiaco es Virgo. Perteneces a los signos de tierra<img src="imagenes/virgoicon.png"></p>`
        correcto.innerHTML=texto
        correcto.style.setProperty("visibility","visible")
        correcto.style.setProperty("opacity","1")
        correcto.style.setProperty("transition","all 1s ease")

     }
        else if(Dia>=23 && Mes==9 || Dia<=22 && Mes==10){ 
        texto=`<p>Tu signo del zodiaco es Libra. Perteneces a los signos de aire<img src="imagenes/libraicon.png"></p>`
        correcto.innerHTML=texto
        correcto.style.setProperty("visibility","visible")
        correcto.style.setProperty("opacity","1")
        correcto.style.setProperty("transition","all 1s ease")

     }
       else if(Dia>=23 && Mes==10 || Dia<=21 && Mes==11){ 
        texto=`<p>Tu signo del zodiaco es Escorpio. Perteneces a los signos de agua<img src="imagenes/scorpioicon.png"></p>`
        correcto.innerHTML=texto
        correcto.style.setProperty("visibility","visible")
        correcto.style.setProperty("opacity","1")
        correcto.style.setProperty("transition","all 1s ease")

     }
       else if(Dia>=22 && Mes==11 || Dia<=21 && Mes==12){ 
        texto=`<p>Tu signo del zodiaco es Sagitario. Perteneces a los signos de fuego<img src="imagenes/sagitarioicon.png"></p>`
        correcto.innerHTML=texto
        correcto.style.setProperty("visibility","visible")
        correcto.style.setProperty("opacity","1")
        correcto.style.setProperty("transition","all 1s ease")

     }

       else if(Dia>=22 && Mes==12 || Dia<=19 && Mes==1){ 
        texto=`<p>Tu signo del zodiaco es Capricornio. Perteneces a los signos de tierra<img src="imagenes/capricornioicon.png"></p>`
        correcto.innerHTML=texto
        correcto.style.setProperty("visibility","visible")
        correcto.style.setProperty("opacity","1")
        correcto.style.setProperty("transition","all 1s ease")

     }
       else if(Dia>=20 && Mes==1 || Dia<=18 && Mes==2){ 
        texto=`<p>Tu signo del zodiaco es Acuario. Perteneces a los signos de aire<img src="imagenes/acuarioicon.png"></p>`
        correcto.innerHTML=texto
        correcto.style.setProperty("visibility","visible")
        correcto.style.setProperty("opacity","1")
        correcto.style.setProperty("transition","all 1s ease")

     }
       else if(Dia>=19 && Mes==2 || Dia<=20 && Mes==3){ 
        texto=`<p>Tu signo del zodiaco es Piscis. Perteneces a los signos de agua<img src="imagenes/piscisicon.png"></p>`
        correcto.innerHTML=texto
        correcto.style.setProperty("visibility","visible")
        correcto.style.setProperty("opacity","1")
        correcto.style.setProperty("transition","all 1s ease")

     }
     else{
        texto=`<p>Tu signo del zodiaco es Piscis. Perteneces a los signos de agua<img src="imagenes/piscisicon.png"></p>`
        correcto.innerHTML=texto
        correcto.style.setProperty("visibility","visible")
        correcto.style.setProperty("opacity","1")
        correcto.style.setProperty("transition","all 1s ease")
     }




    
})



