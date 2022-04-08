function mayor_edad(){
    let edad=document.getElementById('edad').value;
    if(edad >= 18){
        alert("YA PUEDE CONDUCIR");
    }else{
        alert("ES MENOR DE EDAD")
    }
}