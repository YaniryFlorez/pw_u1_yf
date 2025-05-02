function guardar(){
  validar();
  //validar todos los campos Tarea.
} 

function validar(){
  let nombre = document.getElementById('id_nombre').value;
  if (nombre =="") {
    console.log("Error no ha ingresado el nombre");
    
    
  } else {
    console.log("Nombre ingresado correctamente");
  
  }
  //validar el campo apellido
  let apellido = document.getElementById('id_apellido').value;  
  if (apellido =="") {
    console.log("Error no ha ingresado el apellido");
    
    
  } else {
    console.log("Apellido ingresado correctamente");
  
  }
  //validar el campo Fecha de nacimiento
  let fecha_nacimiento = document.getElementById('id_fecha_nacimiento').value;
  if (fecha_nacimiento =="") {
    console.log("Error no ha ingresado la fecha de nacimiento");
    
  } else {
    console.log("Fecha de nacimiento ingresada correctamente");
  
  }

 
  //validar el campo correo
  let correo = document.getElementById('id_correo').value;  
  if (correo =="") {
    console.log("Error no ha ingresado el correo");
  }
  else {
    console.log("Correo ingresado correctamente");
  
  }
  //validar el campo password
  let password = document.getElementById('id_password').value;
  if (password =="") {
    console.log("Error no ha ingresado la contraseña");
    
  } else {
    console.log("Contraseña ingresada correctamente");
  
  }

}
   
