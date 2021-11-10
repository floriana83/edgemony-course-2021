function superCalculator(numbers) {
    try {
        if (numbers.length === 1) throw `Nessun parametro passato alla funzione`
        if (numbers.length === 0) throw `Hai passato un solo valore`

    const sum = () => numbers.reduce((acc, num) => acc + num);
    const sub = () => numbers.reduce((acc, num) => acc - num);
    const mult = () => numbers.reduce((acc, num) => acc * num);
    const div = () => numbers.reduce((acc, num) => acc / num);
    const pow = () => numbers.reduce((acc, num) => (acc[num] = Math.pow(num,2), acc), {});
    // const pow = () => numbers.map(num => num * num);
    const sqrt = () => numbers.reduce((acc, num) => (acc[num] =  Math.sqrt (num), acc), {});
    // const sqrt = () => numbers.map(num => Math.sqrt (num));

    return {
      sum: sum(),
      sub: sub(),
      mult: mult(),
      div: div(),
      pow: pow(),
      sqrt: sqrt()
    }
  } catch (err) {
    console.log(err);
  } finally {
    console.log("Hai fatto la tua scelta.");
  } 
}