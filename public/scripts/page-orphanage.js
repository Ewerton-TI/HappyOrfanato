const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWhelZoom: false,
    zoomControl: false,
}   

//get values from html
const lat = document.querySelector('span[data-lat').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

//Create Map
const mymap = L.map('mapid', options).setView([lat,lng], 15);

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mymap);

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize:[58,68],
    iconAnchor: [29,72],
    popupAnchor: [178, 5]
})

/*//create popup overlay
const popup = L.popup({m
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das meninas <a href="/orphanage?id=1" class="choose-orphanage"> <img src="/images/arrow-white.svg"> </a>')
*/
//Create and add marker
L.marker([lat, lng], {icon} )
    .addTo(mymap)
    /*.bindPopup(popup)*/

/*Image gallery*/

function selectImage(event){
    const button = event.currentTarget /* Captura os cliques nos botões*/

    /*Remover todas as classes .active*/
    const buttons = document.querySelectorAll(".images button") /*Seleciona todos os botões dentro da classe image*/
    buttons.forEach(removeActiveClass)/*Percorre cada button e remove a class active*/

    function removeActiveClass(button){/*Recebe como argumento na função o que deve percorrer no caso o button*/
    button.classList.remove("active") /*Pega a lista de buttons e remove a que estiver com a class active*/
    }

    //selecionar a image clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    //atualizar o container de imagem
    imageContainer.src = image.src

    //adicionar a classe .active para esse botão
    button.classList.add('active')
}