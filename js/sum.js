 
  //primeiro valor do input
  
  

  //segundo valor do input
  
  

  var buttonResult = document.querySelector('.result');

  buttonResult.addEventListener('click',function() 
  {
    //busquei o primeiro valor a ser digitado na DOM
    var firstNumber = document.querySelector('.firstValue');
    //busquei o valor digitado no campo e passei para float
    var firstNumberValue = parseFloat(firstNumber.value);

    //busquei o segundo valor a ser digitado na DOM
    var secondNumber = document.querySelector('.secondValue');
    //busquei o valor digitado no campo e passei para float
    var secondNumberValue = parseFloat(secondNumber.value);
    
    //realizei a soma dos dois valores digitados 
    var sumResult = (firstNumberValue + secondNumberValue);

    //busquei o input que saira o resultado
    var inputResult = document.querySelector('.sumResult');
    inputResult.setAttribute('color', 'black');
    var inputResultText = document.createTextNode(sumResult);
    inputResult.appendChild(inputResultText);
    console.log(inputResultText);


    

    

  


    alert(sumResult);
    // var inputResultText = sumResult.value;

    // inputResult.appendChild(inputResultText);
    
    
    

  })

  


















