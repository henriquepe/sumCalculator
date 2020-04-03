
var bodyElement = document.querySelector('body');
bodyElement.setAttribute('class', 'corpo');


var divElement = document.createElement('div');
divElement.setAttribute('class', 'firstBoxOnPage');


bodyElement.appendChild(divElement);








const numbers = [1, 2, 3, 4, 5, 6];
const plusOneNumbers = numbers.map(n => n + 1);
console.log(plusOneNumbers);