function join(array){
    let stringTemplate = "";
    for (let i=0; i < array.length; i++){

        stringTemplate += array[i] + " " ;
        //console.log("Dentro del for", i, array[i], stringTemplate)
    }
    return stringTemplate;
}


console.log(join(["Hola", "Mundo"]))  // "Hola Mundo"
console.log(join(["Make", "It", "Real"]))  // "Make It Real"
console.log(join([]))  // ""