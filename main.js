let ventas = Number(prompt("Ingrese el numero de ventas : "));
let ventaMenor = 0;
let ventaMediana = 0;
let ventaMayor = 0;
for (let i; i <= ventas; i++) {
    let precio = Number(prompt("Digite el precio de la venta "));
    if (precio < 500) {
        ventaMenor++
    } else if (precio > 500 && precio < 1000) {
        ventaMediana++
    } else {
        ventaMayor++
    }
    alert("Las ventas menores a 500 fueron " + ventaMenor);
    alert("Las ventas menores a 1000 pero mayores a 500 fueron " + ventaMediana);
    alert("Las ventas mayores a 1000 fueron " + ventaMayor);
}