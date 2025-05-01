function guardar(){
validar();

function validar(){
 let nombre = document.getElementById("id_nombre").value;
 if (nombre == "") {
    alert("Error no ha ingresado el nombre");
   
  }else{
    console.log("el nombre no puede estar vacio");
  }
}
   