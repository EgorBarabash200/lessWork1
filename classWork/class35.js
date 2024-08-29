/* Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

ucFirst("вася") == "Вася"; */

function ucFirst(str) {
    a = str[0].toUpperCase();
    return a + str.slice(1);
}

console.log(ucFirst("вася"));