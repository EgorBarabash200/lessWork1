/* Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:
 1, если значение больше нуля,
-1, если значение меньше нуля,
0, если значение равно нулю.
Предполагается, что пользователь вводит только числа. */

let number = 1; // Там +promt должен был быть
if(number > 0){
    console.log(1);
}  else if(number < 0){
    console.log(-1);
} else if(number === 0){
    console.log(0);
} else{
    console.log("Введите число");
}