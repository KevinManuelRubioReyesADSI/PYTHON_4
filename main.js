let numeros=Number(prompt('Digite la cantidad de numeros que desee hacer: '));
let num=1;
let suma=0;
for (let i=1;i<numeros;i++){
  let total=i**b;
  suma=total+suma;
  alert("El resultado de elevar"+i+"a"+num+"es"+total);
  num+=1;
}
alert("El resultado de sumar los otros resultados es:"+suma);