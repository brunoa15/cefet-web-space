// Faça o exercício dos parágrafos aqui
// Este arquivo ainda não está incluído no arquivo HTML

function btclick(idBotao, idParagrafo) {
    var sinal = document.getElementById(idBotao).textContent;

    if(sinal === '+') {
        document.getElementById(idBotao).textContent = '-';
        document.getElementById(idParagrafo).classList.add("expandido");
    }

    else{
        document.getElementById(idBotao).textContent = '+';
        document.getElementById(idParagrafo).classList.remove("expandido");
    }
}