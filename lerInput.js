// readline
const readline = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
}
)
/*
readline.question("Qual sua idade", mostrarResultado(idade))
function mostrarResultado(numero){
numero = parseInt(numero)
if (numero>=18) {
    console.log("Já pode se alistar e servir ao país");
}
else{
    console.log("Vai estudar");
}
}
*/
readline.question("Qual sua idade? ", (idade) => {
    idade = parseInt(idade)
if (idade>=18) {
    console.log("Já pode se alistar e servir ao país");
}
else{
    console.log("Vai estudar");
}
readline.question("Qual sua Cidade? ", (cidade) => {
    cidade = (cidade)

    console.log("Sua cidade é: ", cidade);
})

})

readline.question("Qual sua Cidade? ", (cidade) => {
    cidade = parseInt(cidade)

    console.log("Sua cidade é: ", cidade);
})