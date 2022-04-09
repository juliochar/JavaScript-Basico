function validaArray(arr,num){
    try{
        if(!arr && !num) throw new ReferenceError("Envie os parametros");

        if(typeof arr !== 'object') throw TypeError("O array precisa ser do tipo object");

        if(typeof num !== 'number') throw TypeError("O num precisa ser do tipo number");

        if(arr.length !== num) throw new RangeError('Tamanho invalido!');

    }
    catch(e){
        //usando intanceof
        if (e instanceof ReferenceError){
            console.log("Este erro é um referenceError");
            console.log(e.message);
            //console.log(e.stack);
        } else if (e instanceof TypeError){
            console.log("Este erro é um TypeError");
            console.log(e.message);
            //console.log(e.stack);

        }else if (e instanceof RangeError){
            console.log("Este erro é um RangeError");
            console.log(e.message);
            //console.log(e.stack);

        } else {
            console.log("Tipo de erro não esperado:" + e);
        }



    }


}

//console.log(validaArray());

//console.log(validaArray(2,2));

//console.log(validaArray([],'a'));

//console.log(validaArray([],5));






