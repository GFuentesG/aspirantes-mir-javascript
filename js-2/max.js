function max(arreglo){
    let maximo;    // = 0 en caso uno quiera inicializar con 0
    for(let i=0; i< arreglo.length; i ++){ 
        if (maximo > arreglo[i]) {
            
        } else {
            maximo = arreglo[i];
        }
    
    }
        return maximo;
    }
console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined

