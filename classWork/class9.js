/*Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“
Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»*/


let eсmascript = prompt("Какое оффициальное название Java Script?", '');
if(eсmascript === "ECMAScript"){
    console.log("Верно");
} else{
    console.log("Не знаете? “ECMAScript”!");
}