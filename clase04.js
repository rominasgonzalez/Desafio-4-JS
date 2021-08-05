function pedido() {
    let cantidad = prompt("¿Cuantos panchos desea agregar al pedido?");
    let sabores = prompt("¿Que sabores deseas agregar?");
    alert("Se han agregado " + cantidad + " panchos de " + sabores + " a su pedido");
}
pedido();

function sumarProductos() {
    var montoTotal = panchos * 4 ;
    return montoTotal;
}

let cantidad = 4 ;
let panchos = 500;
let compraTotal = sumarProductos (panchos * cantidad);

console.log("El total de tu compra es de $" + compraTotal)
console.log ("Gracias por tu compra, que lo difrutes! :)")

function saludar() {
    let nombre = prompt("Ingresa tu nombre:");
    let apellido = prompt("Ingresa tu apellido:");
    alert("Gracias por tu compra " + nombre + " " + apellido);
}
saludar();