const pedra = document.getElementById("pedra");
const papel = document.getElementById("papel");
const tesoura = document.getElementById("tesoura");

const textoVitoria = document.querySelector(".textoVitoria");

const alexaButton = document.querySelector(".pontuação__alexa-button");

const reiniciar = document.querySelector(".botao-reiniciar");



let pontuacaoAlexa = 0;
let pontuacaoUsuario = 0;

let suaPontuacao = document.querySelector(".pontuação__texto_destaque-sua");
let alexaPontuacao = document.querySelector(".pontuação__texto_destaque-alexa");

desligarAlexaButton();

function desligarAlexaButton(){
    alexaButton.style.display = "none";
    
}

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
    
    alexaButton.style.display = "none";
    if(pontuacaoAlexa>pontuacaoUsuario){
        textoVitoria.innerHTML = "Você perdeu para alexa! &#x1F61E";
    } 
    else if(pontuacaoAlexa < pontuacaoUsuario) {
        textoVitoria.innerHTML = "Você ganhou da alexa!!! &#x1F601";
    } else {
        textoVitoria.innerHTML = "Deu empate! &#x1F601";
    }

    setTimeout(() => {
        pontuacaoAlexa = 0;
        pontuacaoUsuario = 0;
        suaPontuacao.innerHTML = 0;
        alexaPontuacao.innerHTML = 0;
        textoVitoria.style.display = "none";
    }, 3000);
    
    
}

function gameAlexa(alexa){
    alexaButton.style.display = "block";

    if(alexa == "pedra"){     
        alexaButton.innerHTML = "&#x1F44A";
        alexaButton.style.backgroundColor = " #6959CD";
        
    } else if(alexa =="tesoura"){
        alexaButton.innerHTML = "&#x270C";
        alexaButton.style.backgroundColor = "#00FFFF";
    } else {
        alexaButton.innerHTML = "&#x270B";
        alexaButton.style.backgroundColor = "#00FA9A";
    }
   
}

function compararJogadaPedra(){
    textoVitoria.style.display = "block";
    let alexa = escolherAleatoria("pedra","papel","tesoura");
    gameAlexa(alexa);
    console.log(alexa);
    switch (alexa) {
        case "pedra":
            pontuacaoAlexa++;
            pontuacaoUsuario++;
            suaPontuacao.innerHTML = pontuacaoUsuario;
            alexaPontuacao.innerHTML = pontuacaoAlexa;
            textoVitoria.innerHTML = "Empatou! &#x1F611";
            textoVitoria.style.color ="#1C1C1C";
            
            
            break;
        case "papel":
            pontuacaoAlexa++;
            alexaPontuacao.innerHTML = pontuacaoAlexa;
            textoVitoria.innerHTML = "Alexa venceu! &#x1F62D";
            textoVitoria.style.color = "#800000";
            break;
    
        default:
            pontuacaoUsuario++;
            suaPontuacao.innerHTML = pontuacaoUsuario;
            textoVitoria.innerHTML = "Você venceu! &#x1F600"
            textoVitoria.style.color = "#006400";
            
            break;
    }
}


function compararJogadaPapel(){
    textoVitoria.style.display = "block";
    let alexa = escolherAleatoria("pedra","papel","tesoura");
    gameAlexa(alexa);
    console.log(alexa);
    switch (alexa) {
        case "pedra":
            pontuacaoUsuario++;
            suaPontuacao.innerHTML = pontuacaoUsuario;
            textoVitoria.innerHTML = "Você venceu! &#x1F600"
            textoVitoria.style.color = "#006400";
            
            break;
        case "papel":
            pontuacaoAlexa++;
            pontuacaoUsuario++;
            suaPontuacao.innerHTML = pontuacaoUsuario;
            alexaPontuacao.innerHTML = pontuacaoAlexa;
            textoVitoria.innerHTML = "Empatou! &#x1F611";
            textoVitoria.style.color ="#1C1C1C";
            break;
    
        default:
            pontuacaoAlexa++;
            alexaPontuacao.innerHTML = pontuacaoAlexa;
            textoVitoria.innerHTML = "Alexa venceu! &#x1F62D";
            textoVitoria.style.color = "#800000";
            break;
    }
}

function compararJogadaTesoura(){
    textoVitoria.style.display = "block";
    let alexa = escolherAleatoria("pedra","papel","tesoura");
    gameAlexa(alexa);
    console.log(alexa);
    switch (alexa) {
        case "pedra":
            pontuacaoAlexa++;
            alexaPontuacao.innerHTML = pontuacaoAlexa;
            textoVitoria.innerHTML = "Alexa venceu! &#x1F62D";
            textoVitoria.style.color = "#800000";
            break;
        case "papel":
            pontuacaoUsuario++;
            suaPontuacao.innerHTML = pontuacaoUsuario;
            textoVitoria.innerHTML = "Você venceu! &#x1F600"
            textoVitoria.style.color = "#006400";
            break;
    
        default:
            pontuacaoAlexa++;
            pontuacaoUsuario++;
            suaPontuacao.innerHTML = pontuacaoUsuario;
            alexaPontuacao.innerHTML = pontuacaoAlexa;
            textoVitoria.innerHTML = "Empatou! &#x1F611";
            textoVitoria.style.color ="#1C1C1C";

            break;
    }
}


pedra.addEventListener("click", compararJogadaPedra);
papel.addEventListener("click", compararJogadaPapel);
tesoura.addEventListener("click", compararJogadaTesoura);
reiniciar.addEventListener("click", reiniciarJogo);



