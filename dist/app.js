var Aluno = /** @class */ (function () {
    function Aluno(nome) {
        this.nome = nome;
    }
    Aluno.prototype.exibir = function () { console.log("Nome: " + this.nome); };
    return Aluno;
}());
var valtanais = new Aluno("Valter Junior");
valtanais.exibir;
