function calculadora(){
    const operacao = prompt('escolha uma operação: \n 1 - soma \n 2 - subtração \n 3 - Multiplicacao \n 4 - Divisão Real \n 5 - Divisão Inteira \n 6 - Potenciação');

    let n1 = Number(prompt('Insira o primeiro valor'));
    let n2 = Number(prompt('Insira o segundo valor:'));
    let resultado;

    function soma(){
        resultado = n1 + n2;
        //utilizando string processada
        alert(`${n1} + ${n2} = ${resultado}`);
    }

    function subtracao(){
        resultado = n1 - n2;
        //utilizando string processada
        alert(`${n1} - ${n2} = ${resultado}`);
    }

    function multiplicacao(){
        resultado = n1 * n2;
        //utilizando string processada
        alert(`${n1} * ${n2} = ${resultado}`);
    }

    function divisaoreal(){
        resultado = n1 / n2;
        //utilizando string processada
        alert(`${n1} / ${n2} = ${resultado}`);

    }

    function divisaoInteira(){
        resultado = n1 % n2;
        //utilizando string processada
        alert(`O resto da divisao de ${n1} e ${n2} é igual a ${resultado}`);
    }

    function potenciacao(){
        resultado = n1 ** n2;
        //utilizando string processada
        alert(`${n1} ** ${n2} = ${resultado}`);
    }



    if(operacao ==1){
        soma();
    }
    else if (operacao ==2){
        subtracao();    
    } else if(operacao == 3){
        multiplicacao();

    }else if (operacao ==4){
        divisaoreal();
    } else if(operacao == 5){
        divisaoInteira();
    } else if(operacao ==6){
        potenciacao();
    }
}






calculadora();
