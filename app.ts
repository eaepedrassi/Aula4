class Aluno{
    constructor(public nome: string){
    }
    exibir(){console.log("Nome: "+this.nome)}

}

let valtanais = new Aluno("Valter Junior")

valtanais.exibir