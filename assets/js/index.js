//vemos si existe login activo en el local store
let login = localStorage.getItem("login");

    if(login){

        alert("Usted ya tiene una sesión activada");
        location.href = "menu.html"
    }



const formLogin = document.getElementById("form-login");

//CREDENCIALES DE ACCESO SIMULADAS
const EMAIL_DB = "admin@admin.cl";
const PASSWORD_DB = "123456";


//AGREGAMOS EL ENVENTO AL FORMULARIO 

formLogin.addEventListener("submit", function(event){
    event.preventDefault();
   
    //CAPTURAMOS LOS VALORES DE LOS INPUTS POR SU ID
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(EMAIL_DB == email && PASSWORD_DB == password){
        alert("Se ha iniciado sesión correctamente.");
        formLogin.reset();

        location.href = "menu.html";

        localStorage.setItem("login",true);


    }else{
        alert("Correo o Contraseña incorrectos.");
    }

    
});

