// Faça o exercício da galeria de imagens aqui
// Este arquivo ainda não está incluído no arquivo HTML

const servidorDasImagens = 'https://fegemo.github.io/cefet-web/images/';

const todasAsImagens = [
    'philae-parts.jpg',
    'philae-rosetta.jpg',
    'philae-separation.jpg',
    'philae-67-picture.jpg',
    'philae-collecting.jpg'
];

var i = 0;
var proxImg;

function imgSlider(idbtSlider) {

    if(idbtSlider === 'anterior'){
        i = (((i-1)%5)+5)%5;

        proxImg = servidorDasImagens + todasAsImagens[i];
        document.getElementById('slide').src = proxImg;

        console.log(i);
        console.log(proxImg);

    }

    if(idbtSlider === 'proximo'){
        i = (i+1)%5;
        proxImg = servidorDasImagens + todasAsImagens[i];
        document.getElementById('slide').src = proxImg;

        console.log(i);
        console.log(proxImg);

    }

}

