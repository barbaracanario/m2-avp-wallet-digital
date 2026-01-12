let login = localStorage.getItem("login");


if (!login) {

    alert("Usted no tiene los permisos para estar en esta página");
    location.href = "index.html"
}


//DESDE AQUÍ EJECUTAR EL CÓDIGO

let saldo = localStorage.getItem("saldo");

if (saldo) {
    saldo = Number(saldo);
} else {
    saldo = 15_000;
}


const montoSaldo = document.getElementById("monto-saldo");

montoSaldo.innerText = saldo;

function actualizarSaldo(monto) {

    saldo += monto;  // saldo = saldo + monto.

    alert("Se ha recibido un monto a depositar de: $" + monto);

    // GUARDAMOS DE FORMA PERSISTENTE EL NUEVO SALDO
    montoSaldo.innerText = saldo;

    localStorage.setItem("saldo", saldo);

}


// PREOCEDEMOS A CAPTURAR EL EVENTO SUBMIT DEL FORMULARIO

const deposit = document.getElementById("deposit");


deposit.addEventListener("submit", function (event) {
    event.preventDefault();

    let montoDeposit = document.getElementById("montoDeposit").value;
    //CON NUMBER CONVERTIMOS EL STRING EN UN NUMBER
    montoDeposit = Number(montoDeposit);

    actualizarSaldo(montoDeposit);

});

