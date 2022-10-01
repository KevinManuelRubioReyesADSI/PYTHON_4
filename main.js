let mes=20;
let suma=0;
let pago = 10;

for (let i=1, j = 21; i<j ; i+=1) {
    pago=pago*2;

    alert("En el mes " + mes + "El pago fue de " +pago );

    let sumaPago=pago+mes;
    alert("El total de pago por los 20 meses fue de " +sumaPago);
}