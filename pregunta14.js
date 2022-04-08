function contarTotal(texto){
    let contador=0;
    let contador1=0;
    let vocales=['a','e','i','o','u','A','E','I','O','U'];

    for (let i=0; i<texto.length; i++){
        if(vocales.indexOf(texto[i]) >=0){
            contador++;
        }
        else{
            contador1++;
        }
    }
    return contador, contador1;
}
