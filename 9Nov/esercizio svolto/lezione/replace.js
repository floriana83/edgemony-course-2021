/////////////////// calcolatrice con replace


function minimalCalc(numbers) {
  const sum = () => numbers.reduce((acc, num) => acc + num);
  const sub = () => numbers.reduce((acc, num) => acc - num);
  const mult = () => numbers.reduce((acc, num) => acc * num);
  const div = () => numbers.reduce((acc, num) => acc / num);
  // potenza base [0] exp [1] 
  // const pow = () => numbers.map(num => Math.pow(num,numbers[1]));
 // eleva al quadrato gli elementi dell'array
  // const pow = () => numbers.map(num => Math.pow(num,2));
  // const pow = () => numbers.map(num => num * num);

  const pow = () => numbers.reduce((acc, num) => (acc[num] = Math.pow(num,2), acc), {});
  const sqrt = () => numbers.reduce((acc, num) => (acc[num] =  Math.sqrt (num), acc), {});
  // const sqrt = () => numbers.map(num => Math.sqrt (num));

  return {
    sum: sum(),
    sub: sub(),
    mult: mult(),
    div: div(),
    pow: pow(),
    sqrt: sqrt()
  };


}

