function join(array){
    let stringTemplate = "";
    for (let i=0; i < array.length; i++){

        stringTemplate = stringTemplate + array[i] + "" ;
        console.log("Dentro del for", i, array[i], stringTemplate)
    }
    return stringTemplate;
}


console.log(["Hola", "Mundo"])  // "Hola Mundo"
console.log(["Make", "It", "Real"])  // "Make It Real"
console.log([])  // ""