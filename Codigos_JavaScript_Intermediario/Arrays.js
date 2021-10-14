/*Criando um array*/

var cursos = new Array("HTML","CSS","JavaScript","Python","Java","C#","C++");

console.log(cursos);

/*Acessando um array*/
/*Primeiro valor do array*/
console.log("Primeiro curso-> "+cursos[0]);

/*Definindo o tamanho do array antes de inserir valores*/
var dias = new Array(7);
dias[0] = "Domingo";
dias[1] = "Segunda-Feira";
dias[2] = "Terça-Feira";
dias[3] = "Quarta-Feira";
dias[4] = "Quinta-Feira";
dias[5] = "Sexta-Feira";
dias[6] = "Sábado";

console.log("Dias da Semana -> "+dias);

/*Também é possível criar arrays sem definir seu tamanho no momento da criação*/
var frutas = new Array();
frutas[0] = "Maçã";
frutas[1] = "Banana";
frutas[2] = "Abacaxi";
frutas[3] = "Abacate";
frutas[4] = "Uva";
frutas[5] = "Morango";
frutas[6] = "Manga";
frutas[7] = "Pêssego";
frutas[8] = "Ameixa";
frutas[9] = "Pera";
frutas[10] = "Melancia";
frutas[11] = "Mamão";

console.log("Frutas -> "+frutas);

/*Descobrindo a quantidade de elementos do array*/

var qtd = frutas.length;
console.log("O array frutas possui uma quantidade de "+qtd+" tipos de fruta");


/*Combinando arrays*/

var valores1 = new Array(6);
valores1[0] = 1;
valores1[1] = 2;
valores1[2] = 3;
valores1[3] = 4;
valores1[4] = 5;

var valores2 = new Array(5);
valores2[0] = 6;
valores2[1] = 7;
valores2[2] = 8;
valores2[3] = 9;
valores2[4] = 10;

var valores = valores1.concat(valores2);

valores = valores1 + valores2;
console.log("Apenas os valores do primeiro array -> "+valores1);
console.log("Apenas os valores do segundo array -> "+valores2);
console.log("Todos os valores -> "+valores);

/*Arrays associativos*/

var aluno = [];
aluno["media"] = 8.7;
aluno["nome"] = "Maria";

console.log("Parabéns! "+aluno["nome"]+" você foi aprovada com média "+aluno["media"]);