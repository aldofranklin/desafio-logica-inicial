// Definição da classe ItemMagico
class ItemMagico {
  // Construtor recebendo todos os atributos do item mágico
  constructor(tipo, dano, resistencia) {
    this.tipo = tipo;
    this.dano = dano;
    this.resistencia = resistencia;
  }

  calcularDano() {
    return this.tipo === "arma" ? this.dano * 2 : this.dano;
  }
}

// Entrada do usuário
const tipoItem = gets();
const danoItem = parseInt(gets());
const resistenciaItem = parseInt(gets());

// Criação do objeto ItemMagico personalizado
const itemPersonalizado = new ItemMagico(tipoItem, danoItem, resistenciaItem);

// Imprime os atributos do item personalizado
print("Tipo: " + itemPersonalizado.tipo);
print("Dano: " + itemPersonalizado.dano);
print("Resistencia: " + itemPersonalizado.resistencia);

// Calcula e imprime o dano em combate
const danoTotal = itemPersonalizado.calcularDano();
print("Dano em combate: " + danoTotal);
