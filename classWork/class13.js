//Что выведет код ниже?

alert( null || 2 || undefined ); // 2

// Что выведет код ниже?

alert( alert(1) || 2 || alert(3) ); // 1 затем 2

//Что выведет код ниже?

alert( 1 && null && 2 ); // null

//Что выведет код ниже?

alert( alert(1) && alert(2) ); // 1 

//Что выведет код ниже?

alert( null || 2 && 3 || 4 ); // 3