class Jogo {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    if (this.tipo === "mago") {
      this.ataque = "magia";
    } else if (this.tipo === "guerreiro") {
      this.ataque = "espada";
    } else if (this.tipo === "monge") {
      this.ataque = "artes marciais";
    } else if (this.tipo === "ninja") {
      this.ataque = "shuriken";
    } else {
      this.ataque = "ataque desconhecido";
    }

    console.log(`O ${this.tipo} atacou usando ${this.ataque}`);
  }
}

let teste = new Jogo("Aldo", 52, "monge");
teste.atacar();


