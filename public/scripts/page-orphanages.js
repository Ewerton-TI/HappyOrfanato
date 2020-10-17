//Create Map
const mymap = L.map('mapid').setView([-23.5219783,-46.4139637], 15);

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mymap);

//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize:[58,68],
    iconAnchor: [29,72],
    popupAnchor: [178, 5]
})

//create popup overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das meninas <a href="orphanage-form.html" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"> </a>')

//Create and add marker
L.marker([-23.5219783,-46.4139637], {icon} )
    .addTo(mymap)
    .bindPopup(popup)