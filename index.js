const pedra = document.getElementById("pedra");
const papel = document.getElementById("papel");
const tesoura = document.getElementById("tesoura");
const reiniciar = document.querySelector(".botao-reiniciar");

let pontuacaoAlexa = 0;
let pontuacaoUsuario = 0;

let suaPontuacao = document.querySelector(".pontuação__texto_destaque-sua");
let alexaPontuacao = document.querySelector(".pontuação__texto_destaque-alexa");


function escolherAleatoria(var1, var2, var3) {
    // Gera um número aleatório entre 0 e 2
    const indiceAleatorio = Math.floor(Math.random() * 3);

    // Retorna a variável correspondente ao índice gerado
    if (indiceAleatorio === 0) {
        return var1;
    } else if (indiceAleatorio === 1) {
        return var2;
    } else {
        return var3;
    }
}


function reiniciarJogo(){
    pontuacaoAlexa = 0;
    pontuacaoUsuario = 0;
    suaPontuacao.innerHTML = 0;
    alexaPontuacao.innerHTML = 0;
}


function compararJogadaPedra(){

    let alexa = escolherAleatoria("pedra","papel","tesoura");
    console.log(alexa);
    switch (alexa) {
        case "pedra":
            pontuacaoAlexa++;
            pontuacaoUsuario++;
            suaPontuacao.innerHTML = pontuacaoUsuario;
            alexaPontuacao.innerHTML = pontuacaoAlexa;
            console.log("empate");
            console.log(pontuacaoAlexa);
            console.log(pontuacaoUsuario);
            break;
        case "papel":
            pontuacaoAlexa++;
            alexaPontuacao.innerHTML = pontuacaoAlexa;
            console.log("Alexa venceu")
            break;
    
        default:
            pontuacaoUsuario++;
            suaPontuacao.innerHTML = pontuacaoUsuario;
            console.log("Você venceu!")
            break;
    }
}


function compararJogadaPapel(){
    
    let alexa = escolherAleatoria("pedra","papel","tesoura");
    console.log(alexa);
    switch (alexa) {
        case "pedra":
            pontuacaoUsuario++;
            suaPontuacao.innerHTML = pontuacaoUsuario;
            
            console.log("você venceu");
            break;
        case "papel":
            pontuacaoAlexa++;
            pontuacaoUsuario++;
            suaPontuacao.innerHTML = pontuacaoUsuario;
            alexaPontuacao.innerHTML = pontuacaoAlexa;
            console.log("empate");
            break;
    
        default:
            pontuacaoAlexa++;
            alexaPontuacao.innerHTML = pontuacaoAlexa;
            console.log("Alexa venceu!");
            break;
    }
}

function compararJogadaTesoura(){
    
    let alexa = escolherAleatoria("pedra","papel","tesoura");
    console.log(alexa);
    switch (alexa) {
        case "pedra":
            pontuacaoAlexa++;
            alexaPontuacao.innerHTML = pontuacaoAlexa;
            console.log("Alexa venceu!");
            break;
        case "papel":
            pontuacaoUsuario++;
            suaPontuacao.innerHTML = pontuacaoUsuario;
            console.log("você venceu");
            break;
    
        default:
            pontuacaoAlexa++;
            pontuacaoUsuario++;
            suaPontuacao.innerHTML = pontuacaoUsuario;
            alexaPontuacao.innerHTML = pontuacaoAlexa;
            console.log("empate");
            break;
    }
}


pedra.addEventListener("click", compararJogadaPedra);
papel.addEventListener("click", compararJogadaPapel);
tesoura.addEventListener("click", compararJogadaTesoura);
reiniciar.addEventListener("click", reiniciarJogo);