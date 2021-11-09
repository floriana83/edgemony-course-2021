/////////////////// primo esercizio calcolatrice semplice


function calculator(numbers) {
  function sum() {
    let sumTotal = 0;
    for (num of numbers) sumTotal += num;
    return sumTotal;
  } 

  function sub() {
    let subTotal = numbers[0];
    for (num of numbers) subTotal -= num;
    return subTotal + numbers[0]; // senza aggiungere numbers [0] l'operazione darebbe: a-b-a con una ripetizione del primo numero, motivo per il quale per annullare l'operazione "doppia" aggiungiamo nuovamente il numero sottratto.
  };

  function mult() {
    let multTotal = numbers[0];
    for (num of numbers) multTotal *= num;
    return multTotal / numbers[0];// senza aggiungere numbers [0] l'operazione darebbe: a*b*a con una ripetizione del primo numero, motivo per il quale per annullare l'operazione "doppia" dividiamo nuovamente il numero inserito.
  }
  // oppure moltiplico per 1 dal momento che ogni numero moltiplicato 1 da di nuovo se stesso.

  // function mult() {
  //   let multTotal = 1;
  //   for (num of numbers) multTotal *= num;
  //   return multTotal;
  // }

  function div() {
    let divTotal = numbers[0];
    for (num of numbers) divTotal /= num;
    return divTotal * numbers[0];// senza aggiungere numbers [0] l'operazione darebbe: a/b/a con una ripetizione del primo numero, motivo per il quale per annullare l'operazione "doppia" moltiplichiamo nuovamente il numero inserito.
  }


  return {
    sum: sum(),
    sub: sub(),
    mult: mult(),
    div: div(),

  };

}


