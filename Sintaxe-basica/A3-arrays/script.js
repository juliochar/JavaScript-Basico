//let array = ['string',1, true];
//console.log(array);

let array = ['string',1,true,['array1'],['array2'],['array3'], ['array4']];

/*
array.forEach(function(item, index){
    console.log(item, index);
});

*/
//
array.push('novo item');
//console.log(array);

//array.pop();
//console.log(array);

//array.shift(); // tira no começo do array

//array.unshift('novo no começo'); // coloca um item no começo do array
// console.log(array);

//console.log(array.indexOf(true)); //retorna a posição do elemento consultando pelo seu valor


//array.splice(0,3); //corta o array e devolve outro removendo os elementos de 0 a 3
//console.log(array);

let novoArray = array.slice(0, 3); //vai retornar um array com as posições definidas, ou seja, só retorna os itens da posição 0 até 3
console.log(novoArray);





