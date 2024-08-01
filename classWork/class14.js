//Что выведет код ниже?

let value = NaN;

value &&= 10; // false
value ||= 20; // false
value &&= 30; // true
value ||= 40; // true

alert(value); // 30