let contacto1 = {
    nombre: "Bárbara",
    apellido: "Canario",
    cbu: "123456789",
    alias: "Canario",
    nombreBanco: "Banco Estado",
}

let contacto2 = {
    nombre: "Soledad",
    apellido: "lorca",
    cbu: "987654321",
    alias:"Hermana",
    nombreBanco: "Banco Estado",
}

let contacto3 = {
    nombre: "Benjamín",
    apellido: "Silva",
    cbu: "214365879",
    alias: "Benja",
    nombreBanco: "Banco de Chile",
}

let contactos = [contacto1, contacto2, contacto3]; 
// LOS CONTACTO FUNCIONAN CONTANDO DESDE EL 0, EJ: CONTACTO1: 0 CONTACTO2: 1

function crearInfoContacto(contacto){

      let {nombre, apellido, cbu, alias, nombreBanco} = contacto;

    let infoContacto = `  <li class="list-group-item">
                            <div class="contact-info">
                                <span class="contact-name"> <strong>${nombre} ${apellido}</strong></span>
                                <span class="contact-details">
                                   CBU: ${cbu}, Alias: ${alias}, Banco: ${nombreBanco}. 
                                </span>
                            </div>
                        </li>`;

    return infoContacto;

}

function agregarContactosDom(ListaContactos){

    let elementosLista= "";
    ListaContactos.forEach(contacto =>{

        elementosLista += crearInfoContacto(contacto);
    });
    // document.getElementById("contactList").innerHTML = elementosLista;

    $("#contactList").html(elementosLista);
    
}


// INCIO FUNCIÓN AGREGAR NUEVOS CONTACTOS.

// FIN FUNCIÓN AGREGAR NUEVOS CONTACTOS.


function main(){
     
   agregarContactosDom(contactos);
}

main ();
