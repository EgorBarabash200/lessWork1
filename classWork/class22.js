// Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.

function pow (x , n){
    return x ** n;
}

const x = prompt("Введите число" , );
const n = prompt("Введите степень" , );

console.log(x, 'переменная х', typeof x , 'тип переменной'); 

if(n >= 1 && n % 1 === 0){
     const result = pow (x , n);
    console.log(result);
}else{
    console.log("Степень поддерживает только натуральное число");
}



