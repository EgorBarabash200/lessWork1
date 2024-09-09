/* Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).

Любое число из интервала min..max должно появляться с одинаковой вероятностью.

Пример работы функции:

alert( randomInteger(1, 5) ); // 1
alert( randomInteger(1, 5) ); // 3
alert( randomInteger(1, 5) ); // 5 */

function randomInteger(min, max){
    const randomNumber = String(Math.random());
    let result = null;
    for(let i = 0; i < randomNumber.length; i++ ){
        const num = Number(randomNumber[1]);
        if(num >= min && num < max && !result){
              result = num;
        }
    }
    return result;

}

console.log(randomInteger(1, 5))