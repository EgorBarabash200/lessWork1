// Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100.

let res = 0;

for(let i = 1 ; i  <= 100 ; i++){
    if(i % 2 != 0){
        res += i;
    }
}
console.log(res)