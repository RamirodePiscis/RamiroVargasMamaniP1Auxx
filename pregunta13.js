function f_fecha(){
    let fecha = document.getElementById("fecha").value;
    let fechaInic = new Date(fecha);
    let mesF =fechaInic.getMonth() +1;
    let anioF = fechaInic.getFullYear();
    let diaF = fechaInic.getDate();

    if(isNaN(mesF)){
        alert("No definida la fecha");
        return;
    }
    let fechaAct = new Date();
    let mesA =fechaAct.getMonth() +1;
    let anioA = fechaAct.getFullYear();
    let diaA = fechaAct.getDate();

    let diasSum = diasFin(anioF, mesF);

    let mesAdicional=0;
    if(diaF > diaA){
        diaA= parseInt(diaA) +parseInt(diasSum);
        mesAdicional=1;
    }

    var dias=diaA-diaF;
    var anioAditional=0;
    if(mesF > mesA){
        mesA= parseInt(mesA) +12;
        mesAdicional=1;
    }

    let meses =parseInt(mesA) - (parseInt(mesF)+ parseInt(mesAdicional));
    let anios =parseInt(anioA) - (parseInt(anioF)+ parseInt(anioAditional));
    alert(anios+" Años "+meses+" meses "+dias+" dias ");
}
function diasFin(anio, mes){
    let anioAux=anio;
    if(anio<12){
        let mesSig =parseInt(mes)+1;
    }else{
        let mesSig=1;
        anioAux=anio+1;
    }
    let fecha=anioAux+"-"+mesSig+"-01";

    ms=Date.parse(fecha);
    fechaD=new Date(ms);
    fechaD.setDate(fechaD.getDate()-1);
    let diaA = fechaD.getDate();
return diaA;
}