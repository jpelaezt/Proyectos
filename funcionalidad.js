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

alert("Hello! I am an alert box!!");
console.log("Hello world!");

var elemento = document.getElementById("btnBio1")
elemento.addEventListener("click",function (){
	alert("realizo cambio");
})
var i =0;
var elemento = document.getElementById("btnBio1")
elemento.addEventListener("mouseover",function (){
	i = i + 1
	console.log(i);
})
