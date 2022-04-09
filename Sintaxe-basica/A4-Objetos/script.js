let Object = {String: 'string', number: 1, boolean: true, array: ['array'], ObjectInterno: {objectInterno: 'objeto interno'}};

console.log(Object.ObjectInterno);

//desestruturação:
/*
var string = Object.String
console.log(string);

var arrayInterno = Object.array;
console.log(arrayInterno);

*/
//desestruturação por chaves
var {String, boolean, ObjectInterno} = Object;

console.log(String, boolean, ObjectInterno);
