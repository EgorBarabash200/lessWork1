/*Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.

Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.

решение*/

let age = 12;
/*
if(!( age >= 14 && age <= 90)){
    console.log("Вне диапозона");  первый вариант
}*/

if(age >= 14 && age <= 90){
    console.log("Отлично");
}else{
    console.log("Вне диапозона")
}