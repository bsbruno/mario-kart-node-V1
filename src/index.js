import { Player, rollDice, playRaceEngine } from "./gameCore.js";

const player1 = new Player("mario", 4, 3, 3, 0);
const player2 = new Player("luigi", 3, 4, 4, 0);

const roll = rollDice();

(async function main() {
  console.log(` 😀😀 start run whit a ${player1.name} e ${player2.name} `);

  await playRaceEngine(player1, player2);
})();
