const images = [
    {
        url: 'https://s2.glbimg.com/QXX_Getjucv4Vh1RyZmIgjQ862Q=/127x0:1138x570/1080x608/smart/filters:max_age(3600)/https://i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/o/L/sKBqrmQVAHZJWFGOYAdA/8440838.jpg',
        link: '',
        title: 'Isolamento está ajudando a evitar o contágio em SP, diz estudo',
        desc: 'Aluno de 56 anos morre com coronavírus, diz USP'
    },
    {
        url: 'https://s2.glbimg.com/n7x1QyhZ3hD5IRaAV-xI5y8cjXg=/72x19:918x495/540x304/smart/filters:max_age(3600)/https://i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/f/D/GC75FeRQCwDShQzVlhsg/atila1.jpg',
        link: '',
        title: 'Sair do isolamento agora é querer voltar a mundo que não existe mais, diz virologista brasileiro',
        desc: 'Plano de Contigência foi adicionado para atração. Sete tripulantes já foram desembarcados'
    },
    {
        url: 'https://s2.glbimg.com/GRMA1i3HdYqA5unPR0nmAYKBOQE=/0x149:2241x1410/810x456/smart/filters:max_age(3600)/https://i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/L/4/B7sARNSpulkG219BdLgw/2020-03-18t193928z-1917639340-rc2jmf9yr2kl-rtrmadp-3-health-coronavirus-bolsonaro.jpg',
        link: '',
        title: "Guedes diz que 'fomos atingidos por um meteoro' e que pretende rolar dívida dos municípios",
        desc: 'Para pagar os R$ 600, Tesouro diz que é melhor incluir informais só com autodeclaração e checar depois'
    },
]
var page = 0;

const btnLeft = document.querySelector('.image-selector-arrow-left');
const btnRight = document.querySelector('.image-selector-arrow-right');
const imageArea = document.querySelector('.image-selector-image');
const imageTitle = document.getElementById('image-title');
const imageDesc = document.getElementById('image-desc');
var imageTimeout = setTimeout(nextPage, 5000);
var x1 = 0;
var x2 = 0;


btnLeft.addEventListener('click', prevPage);
btnRight.addEventListener('click', nextPage);
imageArea.addEventListener('touchstart', dragStart);
imageArea.addEventListener('touchend', dragEnd);


function nextPage() {
    if (page == images.length - 1) {
        page = 0;
    }
    else {
        page++;
    }
    showImage();
}

function prevPage() {
    if (page == 0) {
        page = images.length - 1; 
    }
    else {
        page--;
    }
    showImage();
}

function showImage() {
    clearTimeout(imageTimeout)
    imageTimeout = setTimeout(nextPage, 5000)

    imageTitle.innerHTML = images[page].title;
    imageDesc.innerHTML = images[page].desc;
    imageArea.style.backgroundImage="url('" + images[page].url + "')";
}

function dragStart(e) {
    x1 = e.changedTouches[0].screenX;
}
function dragEnd(e) {
    x2 = e.changedTouches[0].screenX;



    if (x1 - x2 > 100) {
        nextPage()
    }
    else if (x1 - x2 < -100) {
        prevPage()
    }
    x1 = 0;
    x2 = 0;
}

showImage();