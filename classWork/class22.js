// Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.

function caclStep (x , n){
    return x ** n;
}

x = prompt("Введите число" , );
n = prompt("Введите степень" , );

if(n >= 1 && n % 1 == 0){
    result = caclStep (x , n);
    alert(result);
}else{
    alert("Степень поддерживает только натуральное число");
}



