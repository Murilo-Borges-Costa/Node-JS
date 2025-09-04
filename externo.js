console.log(process.argv);
var argumentos = process.argv.splice(2)
console.log(argumentos);
var esporteEscolido = argumentos[0]
console.log("Seu esporte favorito é ", esporteEscolido);
var cantorFavorito = argumentos[1]
console.log("Seu cantor favorito é ", cantorFavorito);

"splice"
"split"