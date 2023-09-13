// DECLARACIONES

// DECLARAMOS VARIABLES
let fin = false;
let productos = "";
let subTotal = 0;

// DECLARAMOS FUNCIÓN
const aplicarDescuento = (subTotal, codigoDescuento) => {
    switch (codigoDescuento) {
        case "PRIMAVERA2023":
            return subTotal * 0.80;

            break;
        case "DIADELAMADRE23":
            return subTotal * 0.70;

            break;
        default:
            return subTotal
            break;
    }
}
// FIN DECLARACIONES

// EJECUCIÓN
while (!fin) {
    let producto = prompt("Ingrese nombre del producto, en caso de finalizar colocar FIN");

    if (producto.toUpperCase() == "FIN") {
        fin = true;
    } else {
        let costo = prompt("Ingrese el valor del producto");
        productos += producto + " ";
        subTotal += parseInt(costo);
        console.log("Producto: " + producto + ". Costo: " + costo);
    }
}

const codigoDescuento = prompt("Los productos seleccionados fueron " + productos + " Y el importe Total es " + subTotal + ". Si tiene un código de descuento , ingreselo. Sino presione aceptar para continuar")
if (codigoDescuento != "") {
    const total = aplicarDescuento(subTotal, codigoDescuento.toUpperCase());
    if (total == subTotal) {
        alert("El código de descuento ingresado no es válido. Importe total: $" + total + ". Gracias por tu compra")
    } else {
        alert("El total con el descuento aplicado es de $" + total + ".Gracias por tu compra")
    }
} else {
    alert("El total es $" + subTotal + ". Gracias por tu compra")
}