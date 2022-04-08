let num1=(Math.round(Math.random() * 100) + "--");
let num2=(Math.round(Math.random() * 100) + "--");
let num3=(Math.round(Math.random() * 100));

let valor=0;
while(valor=0){
    if(num1 != num2 && num1!=num3){
        console.log(num1);
    }else{
        num1=(Math.round(Math.random() * 100) + "--");
    }

    if(num2 != num1 && num1!=num3){
    }else{
        num2=(Math.round(Math.random() * 100) + "--");
    }

    if(num3 != num1 && num1!=num2){
        valor=1;
    }else{
        num3=(Math.round(Math.random() * 100));
        valor=1;
    } 
}

console.log(num1);
console.log(num2);
console.log(num3);
