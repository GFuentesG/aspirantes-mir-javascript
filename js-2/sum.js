function sum(arreglo){
    let total = 0;
    for(let i=0; i< arreglo.length; i ++){ 
    //    console.log(arreglo[i]);
        total = total + arreglo[i];
    }
    return total; 
}


console.log(sum([1, 2, 3])) // 6
console.log(sum([10, 8, 12, 5])) // 35
console.log(sum([])) // 0