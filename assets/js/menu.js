//vemos si existe login activo en el local store
let login = localStorage.getItem("login");

if (!login) {

    alert("Usted no tiene los permisos para estar en esta página");
    location.href = "index.html"
}

//EJECUTAMOS EL CÓDIGO SI EXISTE LOGIN

const linkDeposit = document.getElementById("link-deposit");

function redireccionar(mensaje, enlace) {
    let mensajeRedireccion = document.getElementById("mensaje-redireccion");

    mensajeRedireccion.textContent = (mensaje);

    setTimeout(function () {
        location.href = (enlace);
    }, 1500);

}

// EVENTO BOTÓN DEPOSITO.
linkDeposit.addEventListener("click", function (event) {
    event.preventDefault();

    redireccionar("Redirigiendo a la página depósito, espere un momento...", "deposit.html");
});

// EVENTO BOTÓN CONTACTOS.

const linkSedmoney = document.getElementById("link-sedmoney");

linkSedmoney.addEventListener("click", function (event) {
    event.preventDefault();

    redireccionar("Redirigiendo a la lista de contactos, espere un momento...", "sendmoney.html");
});

const linkTransacction = document.getElementById("link-transacction");

// EVENTO BOTÓN TRANSACCIONES.
linkTransacction.addEventListener("click", function (event) {
    event.preventDefault();

    redireccionar("Redirigiendo al historial de transacciones, espere un momento...", "transacctions.html");
});

// AGREGAMOS UN SALDO INICIAL

let montoSaldo = document.getElementById("monto-saldo");

montoSaldo.innerText = saldo;