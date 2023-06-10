//Menu Mobile

function mostraMenu(){
    if (a==0){
        document.getElementById("menu-mobile").style.display="none";
        document.querySelector(".icon__mobile").src="assets/imgs/menu.png"
        return a=1;
    }
    else{
        document.getElementById("menu-mobile").style.display="flex";
        document.querySelector(".icon__mobile").src="assets/imgs/cancel.png"
        return a=0;
    }
}


//Parte dos interesses
var a,b,c,d,e;

    b='A tecnologia atual é a ferramenta mais poderosa que a humanidade já teve em suas mãos. Isso é fascinante, mas ao mesmo tempo assustador. Por isso, meu objetivo é usá-la de modo que torne a vida das pessoas melhor!',
    c='Nos tempos vagos sou artista: faço desde pinturas até esculturas e desenhos! Aí vai uma de minhas obras, inspirada na pintura "Towering Peaks", de Bob Ross.',
    d='Gosto muito da cultura japonesa, isso inclui animes, mangás, jogos, dentre outros! Meu mangá favorito é Berserk e meu anime favorito é Mob Psycho 100!',
    e='Amo a natureza, amo estar perto dela. Tenho minha hortinha e até crio galinhas! Meus animais favoritos são os sapos e répteis em geral!'

function mostraTexto(){
    if (a==0){
        document.getElementById("caixa_de_texto").style.display="none";
        return a=1;
    }
    else{
        document.getElementById("caixa_de_texto").style.display="flex";
        return a=0;
    }

}

function colocaTexto(letra){
    if (letra == c){
        document.getElementById("pintura").style.display="inline-block"
    }
    else{
        document.getElementById("pintura").style.display="none"
    }
    document.getElementById("texto").innerHTML = letra
}

//teste muito doido do github
