

class Producto {
    constructor(articulo, precio, temporada) {
        this.articulo = articulo;
        this.precio = precio;
        this.temporada = temporada;
    }

    sumarIva() {
        this.precio = this.precio * 1.21;
    }

    aplicarDescuento(descuento) {
        this.precio = this.precio - (this.precio * descuento);
    }
}


// DECLARACIONES

// DECLARAMOS VARIABLES
let fin = false;
let productos = [];
let carrito = [];
let listProductos = '';


// DECLARAMOS FUNCIÓN
const aplicarDescuento = (codigoDescuento, productos) => {
    let descuento;
    switch (codigoDescuento) {
        case "VERANO2024":
            descuento = 0.10;
            for (const producto of productos) {
                if (producto.temporada === 'Verano') {
                    producto.aplicarDescuento(descuento);
                }
            }
            break;
        case "INVIERNO2023":
            descuento = 0.25; 
            for (const producto of productos) {
                if (producto.temporada === 'Invierno') {
                    producto.aplicarDescuento(descuento);
                }
            }
            break;
        default:
            break;
    }
}


const calcularTotal = (carrito) => {
    let total = 0;
    for (const prod of carrito) {
        listProductos += prod.articulo + ",";
        total += prod.precio;
    }
    return total;
}
// FIN DECLARACIONES

productos.push (new Producto ("jean",8000,"invierno"));
productos.push (new Producto ("remera",4000,"verano"));
productos.push (new Producto ("musculosa",3200, "verano"));
productos.push (new Producto ("buzo",6600,"invierno"));
productos.push (new Producto ("joggins",5000, "invierno"));
productos.push (new Producto ("campera",10400,"invierno"));
productos.push (new Producto ("short",5500,"verano"));




// FUNCIONES DE ORDEN SUPERIOR

productos.forEach((producto) => {
    console.log(producto)
}
)

for ( producto of productos){
    producto.sumarIva ();
    }

 for(producto of productos) {
    console.log(producto.precio);
  };

  const invierno = productos.filter ((producto) => producto.temporada.includes ("invierno"));
  console.log (invierno)

  const verano = productos.filter ((producto) => producto.temporada.includes ("verano"));
  console.log (verano)

  const productosActualizados = productos.map((producto) => {
      return { 
        articulo: producto.articulo,
        precio: Math.floor(producto.precio * 1.15),
        temporada: producto.temporada,
    }
});
console.log(productosActualizados)

// FIN DE FUNCIONES DE ORDEN SUPERIOR


// EJECUCIÓN
while (!fin) {
    let productoIngresado = prompt("Ingrese nombre del producto, en caso de finalizar colocar FIN");
    if (productoIngresado.toUpperCase() == "FIN") {
        fin = true;
    } else {
        const productoSeleccionado = productos.find(producto => producto.articulo.toUpperCase() == productoIngresado.toUpperCase());
        if (productoSeleccionado) {
            carrito.push(productoSeleccionado);
            alert('El valor del producto es: ' + productoSeleccionado.precio);
        } else {
            alert('El producto no existe.');
        }
    }
}
const subTotal = calcularTotal(carrito);

const codigoDescuento = prompt("Los productos seleccionados fueron " + listProductos + " Y el importe Total es " + subTotal + ". Si tiene un código de descuento , ingreselo. Sino presione aceptar para continuar")
if (codigoDescuento != "") {
    aplicarDescuento(codigoDescuento.toUpperCase(), carrito);
    const total = calcularTotal(carrito);
    alert("El total con el descuento aplicado es de $" + total + ".Gracias por tu compra");
} else {
    alert("El total es $" + subTotal + ". Gracias por tu compra");
}

