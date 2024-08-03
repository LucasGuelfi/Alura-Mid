//Toca Sons

function tocaSons(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else{
        alert("Elemento não encontrado ou seletor inválido");
    }    

}


const ListaDeTeclas = document.querySelectorAll('.tecla');

//Para Até
for (let contador = 0; contador < ListaDeTeclas.length; contador++) {//for (declaracao var ; condição para percorrer ate ; e incrementa um a cada conclusão! ){//length recebe o tamanho total da lista

    const tecla = ListaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const IdAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSons(IdAudio);
    }

    tecla.onkeydown = function (evento) {

        //console.log(evento.code);

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add("ativa");
        }

        tecla.onkeyup = function () {
            tecla.classList.remove("ativa");
        }

    }

}
