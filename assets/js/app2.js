
  for(let i = 3; i <= 1000; i++){

    let primeNumber = true;

    let j = i;

    while(j > 2){

      j--

      if(i % j == 0){
        primeNumber = false;
      }

    }

    if(primeNumber){
      console.log(i);
    }

  }