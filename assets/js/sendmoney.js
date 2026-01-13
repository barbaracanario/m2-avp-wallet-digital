//vemos si existe login activo en el local store
let login = localStorage.getItem("login");

if (!login) {

    alert("Usted no tiene los permisos para estar en esta página");
    location.href = "index.html"
}

let contacto1 = {
    nombre: "Bárbara",
    apellido: "Canario",
    cbu: "123456789",
    alias: "Canario",
    nombreBanco: "Banco Estado",
}

let contacto2 = {
    nombre: "Soledad",
    apellido: "Lorca",
    cbu: "987654321",
    alias: "Hermana",
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

function crearInfoContacto(contacto) {

    let { nombre, apellido, cbu, alias, nombreBanco } = contacto;

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

function agregarContactosDom(ListaContactos) {

    let elementosLista = "";
    ListaContactos.forEach(contacto => {

        elementosLista += crearInfoContacto(contacto);
    });
    // document.getElementById("contactList").innerHTML = elementosLista;

    $("#contactList").html(elementosLista);

}


// INCIO FUNCIÓN AGREGAR NUEVOS CONTACTOS.

$("#formAddContacto").on("submit", function (event) {
    event.preventDefault();

    let nombre = $("#nombre").val();
    let apellido = $("#apellido").val();
    let cbu = $("#cbu").val();
    let alias = $("#alias").val();
    let banco = $("#banco").val();

    let nuevoContacto = {
        nombre,
        apellido,
        cbu,
        alias,
        nombreBanco: banco,

    }

    contactos.push(nuevoContacto);

    alert(`Su nuevo contacto ${nombre} ${apellido}, ha sido agregado.`);

    agregarContactosDom(contactos);

    $("#modalAgregarContacto").modal('hide');

})

// FIN FUNCIÓN AGREGAR NUEVOS CONTACTOS.

// INICIO EVENTO BUSCAR CONTACTOS.

$("#buscador").on("input", function (event) {

    let textoBusqueda = $(this).val();

    // CONVERTIR A MINUSCULA Y QUITAR ESPACIOS

    textoBusqueda = textoBusqueda.toLowerCase();

    // AHORA LE QUITAMOS CUALQUIER ESPACIO ADICIONAL

    textoBusqueda = textoBusqueda.trim();

    let contactosFiltrados = contactos.filter(function (contacto) {

        let nombre = contacto.nombre.toLowerCase();
        let apellido = contacto.apellido.toLowerCase();
        let alias = contacto.alias.toLowerCase();

        // CONJUNTO DE REGLAS DE FILTRADO

        let reglaNombre = nombre.includes(textoBusqueda);
        let reglaApellido = apellido.includes(textoBusqueda);
        let reglaAlias = alias.includes(textoBusqueda);

        if (reglaNombre || reglaApellido || reglaAlias) {
            return contacto;

        }


    });

    agregarContactosDom(contactosFiltrados);

});



// FIN EVENTO BUSCAR CONTACTOS.


// INICIO LOGICA FORM ENVIAR DINERO

function crearInfoSelect(contacto) {

    if(!contacto){
        return "";
    }

    let { nombre, apellido, cbu, alias, nombreBanco } = contacto;

    let infoContacto = `<option value="${cbu}"> ${alias} - ${cbu} - ${nombreBanco} </option>`;

    return infoContacto;

}

function agregarContactosSelect(ListaContactos) {

    let elementosSelect = "";
    ListaContactos.forEach(contacto => {

        elementosSelect += crearInfoSelect(contacto);
    });
    // document.getElementById("contactList").innerHTML = elementosLista;

    $("#enviarContacto").html(elementosSelect);

}

const formEnviarDinero = $("#formEnviarDinero");

formEnviarDinero.on("submit", function (event) {
    event.preventDefault();

    let monto = $("#enviarMonto").val();
    let cbuDestino = $("#enviarContacto").val();

    alert(`Se ha enviado el valor de ${monto}. \nCBU n°: ${cbuDestino} correctamente`);
})

// FIN LOGICA ENVIAR DINERO

function main() {

    agregarContactosDom(contactos);
    agregarContactosSelect(contactos);
}

main();
