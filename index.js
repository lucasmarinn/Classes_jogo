class classesJogo{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    atacar(ataque){
        if (this.tipo === "mago"){
            this.ataque = "magia"
        } else if (this.tipo === "guerreiro"){
            this.ataque = "espada"
        } else if (this.tipo === "mmonge"){
            this.ataque = "artes marciais"
        } else {
            this.ataque = "shuriken"
        }
        console.log(`O tipo ${this.tipo} atacou usando ${this.ataque}`)
    }
}

let Jogador1 = new classesJogo("Luke", 19, "mago")
Jogador1.atacar()