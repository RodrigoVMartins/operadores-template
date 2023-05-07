// EXERCICIO DE FIXAÇÃO

let suaIdade = Number(prompt("Qual sua idade? "))
let idadeAmigo = Number(prompt("Qual a idade do seu ou de sua melhor amiga(o)? "))

let comparacao = suaIdade > idadeAmigo
let idadeMaior = "Sua idade é maior que a do seu amigo(a)?"
console.log(idadeMaior, comparacao);

let diferencaIdade = suaIdade - idadeAmigo
console.log("A diferença de idade entre vocês é de", diferencaIdade)
