const historialTransaccionesDom = $("#historialTransaccionesDom");

function formatearMonto(transaccion) {
    const formatter = new Intl.NumberFormat("es-CL", { 
        style: "currency", 
        currency: "CLP" 
    });
    let formatoMonto = formatter.format(transaccion.monto);
    
    if (transaccion.ingreso) {
        return `<span class="text-success">${formatoMonto}</span>`;
    }else if (transaccion.egreso) {
        return `<span class="text-danger">${formatoMonto}</span>`;
    }
    return formatoMonto;  // Fallback si no es ingreso ni egreso
}

function agregarTransaccionesDom(listaTransacciones) {
    if (!listaTransacciones || listaTransacciones.length === 0) {
        historialTransaccionesDom.html('<li class="list-group-item text-muted">No hay transacciones.</li>');
        return;
    }

    let transacciones = "";
    listaTransacciones.forEach(transaccion => {
        let {glosa, fecha} = transaccion;
        let formatoFecha = moment(fecha).format("DD/MM/YY h:mm:ss a");
        let elementoMonto = formatearMonto(transaccion);
        
        transacciones += `
            <li class="list-group-item">
                Fecha: ${formatoFecha}<br>
                Glosa: ${glosa}<br>
                Monto: ${elementoMonto}
            </li>`;
    });
    
    historialTransaccionesDom.html(transacciones);
    console.log("Transacciones cargadas:", transacciones);  // Para debug
}

function main() {
    agregarTransaccionesDom(historialTransacciones);
}

main();
