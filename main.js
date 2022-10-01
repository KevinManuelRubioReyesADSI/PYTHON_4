let trabajadores = Number(prompt("Ingrese el numero de trabajadores"));
        for (let i=1; i<=trabajadores;i++){
            let tiempo = Number(prompt("Ingrese el tiempo que lleva en la empresa"));
            if (tiempo>0 && tiempo<=5){
                alert("iene un aumento de 100 pesos");
            } else if (tiempo >5 && tiempo<=10 ){
                alert("Tiene un aumento de  250 pesos");
            } else if (tiempo >10 && tiempo<=20 ){
                alert("Tiene un aumento de 400 pesos");
            } else {
                alert("Tiene un aumento de 550 pesos");
            }
        }
alert("Fin del programa")