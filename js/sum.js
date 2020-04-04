
  

  
  
  

  var buttonResult = document.querySelector('.result');


  buttonResult.addEventListener('click',function() 
  {
    //buscando o input resultado na DOM
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
      alert("Favor digite valores escalares...");
    }
    else{
      //set text content in result input 
      var inputResultText = document.createTextNode(sumResult);
      inputResult.appendChild(inputResultText);
    }

    
  
    //show result in c...
    console.log(inputResultText);

    //resetando os inputs de valores
    firstNumber.value = "";
    secondNumber.value = "";
  })

  
  

















