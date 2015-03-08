





function validacion (){
	
	// variable, que toma el elemento por su id, y tomara su valor
	
	var nombre = document.getElementById("nombre").value;
	var edad = document.getElementById("edad").value;
	var escuela = document.getElementById("escuela").value;
	var correo = document.getElementById("correo").value;
	var carrera = document.getElementById("carrera").value;
	//expresiones regulares de nombre y correo
	var expRegNombre = /^[a-zA-ZÑñÁáÉéÍíÓóÚú\s]+$/;
	var expRegCorreo = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
	if(nombre == ""){
		alert("Por favor introduzca su nombre completo");
		document.getElementById("nombre").focus();
		//retorna falso para no mandar la informacion a la base de datos
		return false;
	}
	//verifica si el nombre 
	else if(!expRegNombre.exec(nombre)){
		alert("El campo nombre completo solo acepta letras y espacios en blanco");
		document.getElementById("nombre").focus();
		//retorna falso para no mandar la informacion a la base de datos
		return false;
	}
	else if(!expRegCorreo.exec(correo)){
		alert("El campo correo electronico no es valido");
		document.getElementById("correo").focus();
		//retorna falso para no mandar la informacion a la base de datos
		return false;
	}
	else if(edad == ""){
		alert("Por favor introduzca su edad");
		document.getElementById("edad").focus();
		//retorna falso para no mandar la informacion a la base de datos
		return false;
	}
	else if(edad != parseInt(edad)){
		alert("Ingresaste un valor no numerico");
		document.getElementById("edad").focus();
		//retorna falso para no mandar la informacion a la base de datos
		return false;
	}
	else if(escuela == ""){
		alert("Por favor introduzca su escuela de prodecencia");
		document.getElementById("escuela").focus();
		//retorna falso para no mandar la informacion a la base de datos
		return false;
	}
	else if(correo == ""){
		alert("Por favor introduzca su correo electronico");
		document.getElementById("correo").focus();
		//retorna falso para no mandar la informacion a la base de datos
		return false;
	}
	else if(carrera == ""){
		alert("Por favor introduzca su carrera de interes");
		document.getElementById("carrera").focus();
		//retorna falso para no mandar la informacion a la base de datos
		return false;
	}
	alert("Gracias por tu preferencia!");
	document.form.submit();
}