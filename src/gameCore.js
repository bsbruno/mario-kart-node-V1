export class Player {
  constructor(name, speed, handling, power, points) {
    this.speed = speed;

    this.name = name;
    this.handling = handling;
    this.power = power;
    this.points = points;
  }
  get data() {
    return {
      name: this.name,
      handling: this.handling.hand,
      power: this.power,
      points: this.points,
      speed: this.speed,
    };
  }
  algomethod() {
    console.log("metodo");
  }
}

// rolagem de dadso
export async function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
  let radom = Math.random(); //0 a 1
  let result;

  switch (true) {
    case radom < 0.33:
      result = "RETA";

      break;
    case radom < 0.66:
      result = "CURVA";
      break;
    default:
      result = "CONFRONTO";
      break;
  }
  return result;
}

export async function playRaceEngine(player1, player2) {
  for (let i = 1; i <= 5; i++) {
    console.log(` Rodada ${i} entre ${player1.name} e ${player2.name}`);
    //sortea bloco
    let block = await getRandomBlock();
    console.log(`BLOCO:${block}`);
  }

  //roll
  let diceResul1 = await rollDice();
  let diceResul2 = await rollDice();

  //hability test
  let totalTestSkill1 = 0;
  let totalTestSkill2 = 0;

  if (block === "RETA") {
    totalTestSkill1 = diceResul1 + player1.speed;
    totalTestSkill2 = diceResul1 + player2.speed;
  }
  if (block === "CURVA") {
    totalTestSkill1 = diceResul1 + player1.handling;
    totalTestSkill2 = diceResul1 + player2.handling;
  }
  if (block === "CONFRONTO") {
  }
}
