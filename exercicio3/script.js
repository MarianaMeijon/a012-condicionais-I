
const nacionalidade = prompt("Escreva aqui uma nacionalidade: ").toLowerCase()
// const nacionalidadeM = nacionalidade.toLowerCase()

// nacionalidade.toUpperCase()

if (nacionalidade === "brasileira" || nacionalidade === "argentina") {
    console.log (nacionalidade)
} else if (nacionalidade === "uruguaia" || nacionalidade === "chilena") {
    console.log (nacionalidade)
} else if (nacionalidade === "colombiana") {
    console.log (nacionalidade)
} else {
    console.log ("Nacionalidade não encontrada.")
}
