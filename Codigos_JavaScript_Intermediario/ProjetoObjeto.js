
class contato {
    constructor(nome, codigo) {
        this.nome = nome;
        this.codigo = codigo;
        this.imprima = imprima;
    }
}

function imprima(){
    console.log(this.nome+":"+this.codigo);
}

var pessoa1 = new contato("Ana","001");
var pessoa2 = new contato("Claudia","002");
var pessoa3 = new contato("Maria","003");

pessoa1.imprima();
pessoa2.imprima();
pessoa3.imprima();