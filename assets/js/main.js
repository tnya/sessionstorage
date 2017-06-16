/* Recuperamos los datos ingresados por el usuario y con setItem los guardamos */
function saveData(){
	var name=document.getElementById("name").value;
	var clave=document.getElementById("clave").value;
	sessionStorage.setItem(name,clave);
}

/* for que recorre sessionStorage donde getItem recupera los datos guardados anteriormente */
function recoverData(){
	for(var i=0;i<sessionStorage.length;i++){
		var name=sessionStorage.key(i);
		var clave=sessionStorage.getItem(name);
		document.getElementById("data").innerHTML="<div>" + "Nombre:" + name + "<br/> Clave:" + clave + "</div>";
	}
}
/* Limpiamos los datos, pero si los consultamos se muestran nuevamente en pantalla, siempre que no cerremos la pag */
function cleanData(){
	document.getElementById("data").innerHTML="Limpiada vista. Los datos permanecen.";
}
function borrarTodo() {sessionStorage.clear(); recoverData(); }

/* NOTA: la info va a estar disponible solo hasta que cerremos la pag */

/**/