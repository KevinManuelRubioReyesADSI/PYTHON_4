let angulo=Number(prompt("Digite el angulo :"));
let serie=Number(prompt("Digite la serie : "));

let res=0,num=3,facto=1;
        for (let i=1; i<=serie;i++){
            for (let j=1;j<=num;j++){
                facto *= j; 
            }   
            if (i%2==0){
                res+=(angulo*num)/facto;
                num+=2;
            } else{
                res-=(angulo*num)/facto; 
                num+=2;
            }   
        alert("El seno del angulo "+angulo + "es" +res); }