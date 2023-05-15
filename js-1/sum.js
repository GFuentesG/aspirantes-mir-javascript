function sum(numero){
    let total = 0;
    for (let i = 0; i <= numero; i++) {
        total = total + i;
    }
    return total;
}

console.log(sum(4)) // 1 + 2 + 3 + 4 = 10
console.log(sum(10)) // 55
console.log(sum(15)) // 120