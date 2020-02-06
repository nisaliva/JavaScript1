'use strict';

function creditCardValidator(cardNumber){

    // The cardNumber must be 16 digits,
    if(cardNumber.length !== 16){
      return 'The credit card numbers are invalid';
    }
  
    // All of the digits must be numbers
    for(let i = 0; i < cardNumber.length; i++){
      
      let currentNumber = cardNumber[i];
  
      // turn the digit from a string to an integer
      currentNumber = Number.parseInt(currentNumber);
  
      // check that the digit is a number
      if(!Number.isInteger(currentNumber)){
        return 'The credit card numbers are invalid';
      }
    }
  
    // The creditNumber must have at least two different digits (all of the digits cannot be the same)
    let obj = {};
    for(let i = 0; i < cardNumber.length; i++){
      obj[cardNumber[i]] = true;
    }
    if(Object.keys(obj).length < 2){
      return 'The credit card numbers are invalid';
    }
  
    // The final digit must be even
    if(cardNumber[cardNumber.length - 1] % 2 !== 0){
      return 'The credit card numbers are invalid';
    }
  
    // The sum of all the digits must be greater than 16
    let sum = 0;
    for(let i = 0; i < cardNumber.length; i++){
      sum += Number(cardNumber[i]);
    }
    if(sum <= 16){
      return 'The credit card numbers are invalid';
    };
  
  return 'The credit card numbers are valid';
};
  
  console.log(creditCardValidator('9567894321245700')); 
  console.log(creditCardValidator('4466783928817658')); 
  console.log(creditCardValidator('g334567899974d32')); 
  console.log(creditCardValidator('8888888888888888')); 
  console.log(creditCardValidator('3131313131313132')); 