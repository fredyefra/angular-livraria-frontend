var Teste = /** @class */ (function () {
    function Teste(nome) {
        this.nome = nome;
    }
    Teste.prototype.hello = function () {
        return "Olá" + this.nome;
    };
    return Teste;
}());
var test = new Teste("Fred");
alert(test.hello());
