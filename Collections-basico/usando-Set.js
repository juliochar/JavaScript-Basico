const meuArray = [30,30,40,5,223,2049,3034,5];

function valoresUnicos(arr){
    const mySet = new Set(arr);


    //usando tecnica spread q transforma o elemento em uma Array automatica passando como parametro
    return [...mySet];
}


console.log(valoresUnicos(meuArray));

