// conforme as instrucoes e aulas do curso ate agora
let nome = "Aldo";
let XP = 5000;

switch (true) {
  case XP < 1000:
    console.log("Nível: Ferro");
    break;

  case XP >= 1000 && XP < 2001:
    console.log("Nível: Bronze");
    break;

  case XP >= 2001 && XP < 5001:
    console.log("Nível: Prata");
    break;

  case XP >= 5001 && XP < 7001:
    console.log("Nível: Ouro");
    break;

  case XP >= 7001 && XP < 8001:
    console.log("Nível: Platina");
    break;

  default:
    console.log("Nível: Imortal"); 
    break;
}

console.log("O herói " + nome + " tem " + XP + " de XP.");

