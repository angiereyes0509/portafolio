function calcularAreaCi(){
	let radio=document.getElementById('radio').value
	let resultado=document.getElementById('resultado')

	let area=3.14*radio*radio;


	resultado.innerHTML=`el area del radio es : ${area.toFixed(2)} cm <sup>2</sup>`
}


function calcular(){
	let lado=document.getElementById('lado').value
	let resultado1=document.getElementById('resultado1')

	let area=lado*lado


	resultado1.innerHTML=`el resutado del cuadrado es: ${area.toFixed(2)} cm <sup>2</sup>`
}


function areaTriangulo(){
	let base=document.getElementById('base').value
	let resultado2=document.getElementById('resultado2')

	let area=base*base/2


	resultado2.innerHTML=`el area del triangulo es: ${area.toFixed(2)} cm <sup>2</sup>`
}

function areaRectangulo(){
	let base1=document.getElementById('base1').value
	let resultado3=document.getElementById('resultado3')

	let area=base1*base1


	resultado3.innerHTML=`el area del rectangulo es: ${area.toFixed(2)} cm <sup>2</sup>`
}