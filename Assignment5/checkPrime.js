'use strict';
function checkPrime(number){
  
    if (number===1)
    {
      return false;
    }
    else
    {
      for(var i = 2; i < number; i++)
      {
        if(number % i === 0)
        {
          return false;
        }
      }
      return true;
    }
  }
console.log(checkPrime(11));