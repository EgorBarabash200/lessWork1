//Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

function chekMin( a , b ){

   if( a > b){
    return b;
   }else {
    return a;
   }

}
//a = prompt("Введите первое число", );
//b = prompt("Введите второе число", );
//let min = chekMin(a , b);
let min = chekMin(4 , 4);

console.log("Минимальное число:",min);

