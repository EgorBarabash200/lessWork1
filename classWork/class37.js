





function extractCurrencyValue(str){
    return parseInt(str.slice(1));
}

console.log(extractCurrencyValue("$120"));