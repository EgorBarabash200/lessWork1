// урок 4 Переменные и типы данных в JS
/*var num = 1 ;
a=3.5;
b="Hello world";
c=true;
console.log("Переменная" + num);*/


// урок 5 Математические действия

/*num_1=10; 
num=4;
res=num_1-num;
console.log("10-4=" +res);
console.log("Результат:" + (num_1%num));

num_3=5;
num_3=num_3+8;
console.log("Результат:" + num_3);

num_4=5;
num_4*=8;
console.log("Результат:" + num_4);

str_1="132a";
str_2="231d";
console.log("Результат" + (str_1+str_2))

str_3=Number("132");
str_4=Number("231");
console.log("Результат" + (str_3+str_4));

console.log("Math" + Math.PI);
console.log("Math" + Math.min(0, 14, 21, -4, 5, 8));*/

// Урок 6 Условные операторы

/*number=15;
isHasHouse=false

if(number!=15 || isHasHouse==true){
    console.log("OK");
}
else if(number<10){
    console.log("OK");
}
else if(number!=122 && isHasHouse==false){
    console.log("OK");
}
else{
    console.log("Error");
}

str="work"

switch(str){
    case "4":
        console.log("Переменная со значением 4");
        break;
    case "45":
        console.log("Переменная со значением 45");
        break;
    case "work":
        console.log("Переменная со значением work");
        break;
    default:
        console.log("Error");
    }*/

// Урок 7 Массивы данных. Одномерные и многомерные массивы

/*arr=[3,14,100,-5,70]
console.log(arr[4]);
console.log(arr.length);

matrich=[[3,14], [100,-5],[70,180]];

matrich[1][0]=90;
console.log(matrich);*/

// Урок 8 Циклы в JavaScript. Операторы циклов

/*for(i=0; i<10; i++) {
    console.log(i);
}

for(i=100; i>5; i/=2) {
    console.log(i);
}

j=1000;
while(j>100){
    console.log(j);
    j-=100;
}

isHasCar=true;
while(isHasCar){                   //Бесконечный цикл

}
*/
/*x=100;
do{
    console.log(x);

}while(x < 50);

m=0;
do{
    console.log(m);
    m++;
}while(m < 10);

for(p = 10; p <= 20 ; p+=2){
    if(p > 15)
        break;                   
    console.log(p);
}
                                               //Операторы для циклов break и continue
for(p = 10; p <= 20 ; p++){
    if(p % 2 == 0)
        continue;
    console.log(p);
}*/
 // Работа цикла for с массивами
/*arr=[1, 2, 4, 6, 10, 12];
for(i = 0; i < arr.length; i++){
    console.log("Элемент" + i + ":" + arr[i]);
}

arr=[1, 2, 4, 6, 10, 12];
for(i = 0; i < arr.length; i++){
    console.log("Элемент" + (i + 1) + ":" + arr[i]);
}

arr=[1, 2, 4, 6, 10, 12];
for(i = 0; i < arr.length; i++){
    arr[i] *= 2;
    console.log("Элемент" + i + ":" + arr[i]);
}*/

// Урок 9 Всплывающие окна (alert, prompt, confirm)

// alert("Привет");
/*for(i = 1; i <= 5; i++){
    alert("Какая сегодня хорошая погода");     // Цикл с alert
}*/

//confirm("Вы сейчас дома?");
/*
data = confirm("Хотите перейти в нашу группу в ВК?");        // confim
if(data){
    alert("Вы молодец!");
} */
/*god = prompt("Введите ваш возраст" );
if(god>=18){
    alert("Отлично");
}                                            // promt
else{
    alert("Извините вы несовершеннолетний");
}*/
/*
person = null;
if(confirm("Вы точно уверены?")){
    person = prompt("Введите ваше имя");
    alert("Привет "   + person)
}else{
    alert("Видно не судьба");
}*/

// Урок 10 Функции в языке JavaScript

/*function info(){
    console.log("Привет");
    console.log("!");
}

function naw(word){
    console.log(word + "!");
}

function summa(a , b){
    res= a + b;
    console.log(res);
}

function ses(a , b){
    r = a + b;
    naw(r);
}

info();

naw("Hello");

summa(4 , 8);

ses(5 , 10);*/

/*function sum(arr){
    cumma = 0;
    for(i =0 ; i < arr.length; i++){
        cumma += arr[i];
    }
    console.log(cumma);
}

array = [6, 8, 1];

sum(array);*/

/*function sum(arr){
    cumma = 0;
    for(i =0 ; i < arr.length; i++){
        cumma += arr[i];        
    }
    return cumma;                                   // Оператор возвращения значений return
}
array = [6, 8, 1];

res = sum(array);

console.log(res);*/
/*
 num = 20;
 function info (){
    var num = 10;
    console.log(num);             //Локальные и глобальные переменные
 }

 info();

 console.log(num);*/

 // Урок 11 События и обработчик событий в JavaScript
/*
 caunter = 0;
 function OnClickButton(element){
       caunter++;
       element.innerHTML = "Вы нажали на кнопку" + caunter;
       console.log(caunter);
       console.log(element.name);
       element.style.background = "red";
       element.style.color = "blue";
       element.style.cssText = "border-radius: 20px ; font-size: 20px";
 }
 function OnInput(element){
    if(element.value == "Hello")
        alert("И тебе привет");
    console.log(element.value);
 }*/


    
// Урок 12  Управление HTML и обработка форм при помощи JS
/*
text = document.getElementById('text');
console.log(text.id);
console.log(text.title);
text.style.color = "red";
text.style.backgroundColor = "blue";
text.innerHTML = "New <br> string";
document.getElementById('text').style.color = "white";              //Если нужно изменить свойство тега всего 1 раз

//Нахождение объектов 

spans = document.getElementsByTagName('span');     //Нахождение элемента по тегу

for(i=0; i < spans.length; i++){
    console.log(spans[i].innerHTML);

}

spanses = document.getElementsByClassName('simple-text')   // Нахождение элемента по классу

for(i=0; i < spanses.length; i++){
    console.log(spanses[i].innerHTML);

} */

// Создание формы
/*
function chekForm(el){
    
   // var name = document.getElementById('name').value; можно так обратится

   var name = el.name.value;
   var pass = el.pass.value;
   var repass = el.repass.value;
   var state = el.state.value;

   var fail = "";

   if ( name == "" || pass == "" || state == "")
    fail = "Заполните все поля";
   else if (name.lenght <=5 || name.lenght >= 50)
    fail = "Введите корректное имя";
   else if ( pass != repass)
    fail = "Ваши пароли не совпадают";
   else if (pass.split('&').lenght > 1)
    fail = "Не корректный пароль";

   if(fail != "")
    document.getElementById('error').innerHTML = fail;
   else{
    alert("Все данные корректно заполнены");
    window.location = 'index.html'
   }

   return false;


   console.log(name);
   console.log(pass);
   console.log(repass);
   console.log(state);

    return false;
} */

    // Отделение JS кода от Html

    /*

    document.getElementById('main-form').addEventListener("submit" , chekForm);
    function chekForm(event){

        event.preventDefault();
        
        var el = document.getElementById('main-form');

        var name = el.name.value;
        var pass = el.pass.value;
        var repass = el.repass.value;
        var state = el.state.value;
     
        var fail = "";
     
        if ( name == "" || pass == "" || state == "")
         fail = "Заполните все поля";
        else if (name.lenght <=5 || name.lenght >= 50)
         fail = "Введите корректное имя";
        else if ( pass != repass)
         fail = "Ваши пароли не совпадают";
        else if (pass.split('&').lenght > 1)
         fail = "Не корректный пароль";
     
        if(fail != "")
         document.getElementById('error').innerHTML = fail;
        else{
         alert("Все данные корректно заполнены");
         window.location = 'index.html'
        }
     
    } */


        // Урок 13  Создание таймеров и интервалов

        // Создание интервалов
       /* setInterval(my_func, 1000);
        
        counter = 0;
                                                           // Способ 1
        function my_func(){
            counter++;
            console.log("Counter" + counter);
 
        }*/
/*
       counter = 0;
        setInterval(function(){
            counter++;                                     // Способ 2
            console.log("Прошло секунд:" + counter);
             
        } ,1000); */

        //Остановка интервала
/*
      id = setInterval(my_func, 1000);
        
        counter = 0;
                                                           
        function my_func(){
            counter++;
            console.log("Counter" + counter);
            if ( counter == 3)
                clearInterval(id);
        } */

        // Создание таймера

        /*setTimeout( function(){
            console.log("Timer is working");     // Способ 1
   
        } , 2000);*/
/*
        setTimeout( my_func , 2000);

        function my_func (){                             // Способ 2
            console.log("Timer is working");
        } */

        
        // Урок 14 Создание объектов. Встроенные функции

        // Работа с датой
 /*
        date = new Date ();
        console.log(date.getFullYear());   // год
        console.log(date.getMonth() +1);  // месяц
        console.log(date.getDate() );   // день
        console.log(date.getHours() );  //  час
        console.log(date.getMinutes() ); //  минуты
        console.log(date.getSeconds() ); //  секунды 
        

        date.setHours(23);         // установка соего времени
        date.setMinutes(23);

        console.log("Время" + date.getHours() + ":" + date.getMinutes()); 
        */


        // Специальные функции для массивов
/*
        arr = [5, 90, 6, 7, 0, 8, -33, 9];
        stroka = arr.reverse().join(", ");
        //console.log(arr.join(", ")); // преобразование массива в строку
        //console.log(arr.sort()); // сортирует массив по возрастанию
       // console.log(arr.reverse()); // переворачивает массив порядок идёт с право на лево
      // console.log(arr.reverse().join(", ")); // функции можно объединять
      console.log(stroka.split(", ")); // разбивает строку */

      // Создание класса и объекта
/*
      class Person{
        constructor(name, age, happiness){
            this.name = name;
            this.age = age;                               // Создание класса
            this.happiness = happiness;
        }
         info () {
            console.log("Человек" + this.name + "Возраст:" + this.age);  // Внутри класса можно создать функцию
        }
    }

     alex = new Person( "Alex", 45, true );    // Создание объекта
     bob = new Person("Bob", 25, false);
     alex.info();
      // console.log(alex.name);
      // console.log(bob.age);
 */



