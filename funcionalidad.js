function miFuncion() {
	alert("Activaste la función miFuncion()");
}
function mostrar_imagen(id) {
	img = document.getElementById(id);
	img.innerHTML = '<img id="img1" src="descarga.jpg" />';
}
function mostrar_imagen1(id) {
	img = document.getElementById(id);
	img.innerHTML = '<img id="img2" src="descarga2.jpg" />';
}
function mostrar_imagen2(id) {
	img = document.getElementById(id);
	img.innerHTML = '<img id="img3" src="Dr_Vint_Cerf_ForMemRS.jpg" />';
}
function mostrar_imagen3(id) {
	img = document.getElementById(id);
	img.innerHTML = '<img id="img4" src="article_vinton-cerf_1.jpg" />';
}
var i =0;

//alert("Hello! I am an alert box!!");
//console.log("Hello world!");

var elemento = document.getElementById("t1")
elemento.addEventListener("click",function (){
	//alert("realizo cambio");
	elemento.innerHTML = i
})

var elemento = document.getElementById("t1")
elemento.addEventListener("mouseover",function (){
	//i = i + 1
	//console.log(i)
	elemento.classList.add("body1")

})


var list = document.querySelectorAll("tabla cabecera td")
console.log(list)

var list2 = document.querySelectorAll("tabla cabecera td:nth-child(even)")
console.log(list2)

var list3 = document.querySelectorAll("tabla cabecera td:nth-child(add)")
console.log(list3)

//agregar etiquetas o crear elemento

var parrafo = document.createElement("p");
var cont = document.createTextNode("agrregando")
parrafo.appendChild(cont)

function addlist(){
console.log("prueba");
var link = document.createElement("td")
link.innerHTML = "prueba"
var ul = document.querySelector("tabla cabecera td")
ul.appendChild(link)
}

//eliminar una clase

var elementof = document.getElementById("btnBio5")
elemento.addEventListener("click",function (){
	//alert("realizo cambio");
	addlist()
})
//elemento.classList.remove("clase css")