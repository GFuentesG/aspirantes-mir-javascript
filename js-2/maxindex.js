function maxIndex(arreglo){
    let maximo;    // = 0 en caso uno quiera inicializar con 0
    let indice = -1;
    for(let i=0; i< arreglo.length; i ++){ 
        if (maximo > arreglo[i]) {
          
        } else {
            maximo = arreglo[i];
            indice = i;  
        }
    
    }
        return indice;
    }

    
console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1