window.onload = InicioGeneral;

function InicioGeneral(){
	//Localizar elemento id fecha
	var elemento = document.getElementById("fecha");
	//Reemplazar contenido en elemento id por fecha y hora actuales
	elemento.innerHTML = ObtenerFecha() + ". " + ObtenerHora();
}

function ObtenerFecha(){
	var dia = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
	var mes = new Array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
	var fecha = new Date();
	return(dia[fecha.getDay()] + ", " + fecha.getDate() + " de " + mes[fecha.getMonth()] + " de " + fecha.getFullYear());
}

function ObtenerHora(){
	var fecha = new Date();
	return(fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds());
}