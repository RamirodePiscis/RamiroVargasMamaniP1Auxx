function enviar1(){
    let mayor;
    let nomb;

    let nombre1=document.getElementById('nombre1').value;
    let edad1=document.getElementById('edad1').value;
    console.log(nombre1);
    console.log(edad1);

    let nombre2=document.getElementById('nombre2').value;
    let edad2=document.getElementById('edad2').value;
    console.log(nombre2);
    console.log(edad2);

    let nombre3=document.getElementById('nombre3').value;
    let edad3=document.getElementById('edad3').value;
    console.log(nombre3);
    console.log(edad3);

    mayor=edad1;
    nomb=nombre1;
    if(edad2>mayor){
        mayor = edad2;
        nomb=nombre2;
    }else if(edad3>mayor){
        mayor= edad3;
        nomb=nombre3; {

    } 
    }
    console.log("El mayor de todos es: ",nomb);
}
