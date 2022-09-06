
let idade = prompt ("Digite sua idade: ")
let ensinoMedio = confirm ("Você terminou o ensino médio? ")
let cursandoFaculdade = confirm ("Você está cursando alguma faculdade? ")

if (idade >= 18) {
    console.log (`Você já é maior de idade.`)
} else {
    console.log (`Você ainda é menor de idade.`)	
}

if (ensinoMedio === true) {
    console.log (`Você já terminou de cursar o ensino médio.`)
} else {
    console.log (`Você ainda não terminou o ensino médio.`)	
}

if (cursandoFaculdade === false) {
    console.log (`Você ainda não ingressou em uma faculdade.`)
} else {
    console.log (`Você já está cursando uma faculdade.`)	
}



