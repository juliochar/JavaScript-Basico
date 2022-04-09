function verificaPalindromo(string){
    if(!string) return "string inexistente";

    return string.split("").reverse().join("") === string;
}

console.log(verificaPalindromo("ovo"));
console.log(verificaPalindromo("roma"));
console.log(verificaPalindromo("gato"));
console.log(verificaPalindromo());


//verificando via FOR metade do vetor
function verificapalindromo2(string){
    if(!string) return 'string inexistente';

    for(let i=0; i<string.length/2; i++){
        if(string[i] !== string[string.length -1 -i]){
            return false;
        }
        
    }
    return true;
}

console.log("---------------------------------");
console.log("palindromo 2: ");
console.log(verificapalindromo2("abba"));
console.log(verificapalindromo2("roma"));
console.log(verificapalindromo2("gato"));
console.log(verificapalindromo2());