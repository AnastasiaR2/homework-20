
  let number = +prompt('Введите число от 2-х');
  let i = number;
  let primeNumber = true;

  while(i > 2){

    i--;

    if(number % i == 0){
    alert('Число составное');
    primeNumber = false;
    break;
    }

  }

  if(primeNumber){
    alert('Число простое');
  }

