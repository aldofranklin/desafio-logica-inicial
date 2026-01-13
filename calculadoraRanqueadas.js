calculadora(1000,100)

function calculadora(numVitoria,numDerrota) {
    let resultado = numVitoria - numDerrota
        if(resultado <=10){
            nivel = "Nível Ferro"
        }
        else if (resultado <=20){
            nivel = "Nível Bronze"
        }
        else if (resultado <=50){
            nivel = "Nível Prata"
        }
        else if (resultado <=80){
            nivel = "Nível Ouro"
        }
        else if (resultado <=90){
            nivel = "Nível Diamante"
        }
        else if (resultado <=100){
            nivel = "Nível Lendário"
        }
        else{ 
            nivel = "Nível Importal"
        }
        return console.log (`O herói tem saldo de ${resultado} e está no ${nivel}.`)
}