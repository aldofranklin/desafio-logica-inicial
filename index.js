let nome = "Aldo";
let XP = 2000;

switch (true) {
  case XP < 1000:
    console.log("Ferro");
    break;

  case XP >= 1000 && XP < 2001:
    console.log("Bronze");
    break;

  case XP >= 2001 && XP < 5001:
    console.log("Prata");
    break;

  case XP >= 5001 && XP < 7001:
    console.log("Ouro");
    break;

  case XP >= 7001 && XP < 8001:
    console.log("Platina");
    break;

  default:
    console.log("Imortal"); // ou o que você quiser para XP >= 8001
    break;
}

console.log(`O herói ${nome} tem ${XP} de XP.`);
