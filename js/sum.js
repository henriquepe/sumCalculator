  //buscando no documento o elemento botao com classe ".result"
  var buttonResult = document.querySelector('.result');

  //criando funcao que sera executada apos 'click' sobre o elemento button
  buttonResult.addEventListener('click',function() 
  {
    //buscando o <p> 'result' na DOM
    var inputResult = document.querySelector('.sumResult');

    //resetando o input do resultado antes de incluir o novo valor.
    inputResult.textContent = "";


    /*primeiro valor do input
    busquei o primeiro valor a ser digitado na DOM*/
    var firstNumber = document.querySelector('.firstValue');
    //busquei o valor digitado no campo e passei para float
    var firstNumberValue = parseFloat(firstNumber.value);

    //segundo valor do input
    //busquei o segundo valor a ser digitado na DOM
    var secondNumber = document.querySelector('.secondValue');
    //busquei o valor digitado no campo e passei para float
    var secondNumberValue = parseFloat(secondNumber.value);
    
    //realizei a soma dos dois valores digitados 
    var sumResult = (firstNumberValue + secondNumberValue);


    //verifica se o valor nao eh um numero ou vazio.
    if(isNaN(sumResult)){
      //se nao for um numero, faca:
      alert("Favor digite valores escalares...");
    }
    //se for um numero, faca:
    else{
      /*criando um elemento texto com o valor do resultado do processamento
      acima*/ 
      var inputResultText = document.createTextNode(sumResult);
      /*fazendo o elemento paragrafo <p> adotar o elemento texto
      criado*/
      inputResult.appendChild(inputResultText);
    }

    
  
    //exbibindo o elemento texto tambem no console...
    console.log(inputResultText);

    //resetando os valores dos inputs.
    firstNumber.value = "";
    secondNumber.value = "";
  })

  
  

















