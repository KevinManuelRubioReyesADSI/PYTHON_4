let estudiantes = Number(prompt("Digite los estudiantes a hacer la encuesta"))
let notaFinal = 0;
let notaMenor = 10;
let notaMayor = 0;
for (let i = 1; estudiantes >= i; i++) {
    let calificacion = Number(prompt("Ingrese la calificacion que le da a la cafeteria"));
    notaFinal = notaFinal + calificacion;
    if (calificacion > notaMayor) {
        notaMayor = calificacion;
    } else if (calificacion < notaMenor) {
        notaMenor = calificacion;
    } else {
        notaMenor = calificacion;
    }
    let promedio = notaFinal / estudiantes;
    alert("La calificacion mayor es de " + notaMayor + " la calificacion menor es " + notaMenor + " el promedio total es de " + promedio);
}