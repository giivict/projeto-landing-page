var SetaDireira = window.document.getElementById("seta-direita")
var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")
var SetaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita(){
    Leonardo.style = "display:none"
    Bruna.style = "display:flex" 
    SetaDireira.style = "display:none"
    SetaEsquerda.style = "display:flex; margin-top: 55px"
}

function RolarParaEsquerda(){
    Leonardo.style = "display:flex"
    Bruna.style = "display:none" 
    SetaDireira.style = "display:flex"
    SetaEsquerda.style = "display:none"
}