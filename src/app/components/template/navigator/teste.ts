class Teste{

 nome:string;

constructor(nome:string){
this.nome = nome;
}

hello(): string {
    return "Olá" + this.nome;
}

}

var test = new Teste("Fred");
alert (test.hello());


