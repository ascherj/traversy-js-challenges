function diceGameSimulation(numSimulations) {
  const results = [];
  for (let i = 0; i < numSimulations; i++) {
    const win = [7, 11];
    const lose = [2, 3, 12];

    const obj = {};
    const dice1Result = Math.ceil(Math.random() * 6);
    const dice2Result = Math.ceil(Math.random() * 6);

    obj.dice1 = dice1Result;
    obj.dice2 = dice2Result;
    obj.sum = dice1Result + dice2Result;
    obj.result = win.includes(obj.sum) ? 'win' : lose.includes(obj.sum) ? 'lose' : 'roll again';
    results.push(obj);
  }
  return results;
}

module.exports = diceGameSimulation;
