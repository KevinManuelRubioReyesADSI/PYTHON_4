const iva=0.16
const descuento=0.15
const precio = 100000;
        let total=0;
        let cantidad = Number(prompt("Ingrese la cantidad de productos"))
        for (let i=1; i<=cantidad;i++){
            total+=precio;
        }
        let totalPagar= total+(total*iva);
        if (totalPagar>500000){
            let totalDesc = totalPagar-(totalPagar*descuento);
            alert("El total a pagar es de " +totalDesc);
        } else {
            alert("El total a pagar es de "+totalPagar );
        }