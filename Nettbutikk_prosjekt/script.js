const produkter = [
{
    id: 1,
    navn:"Samsung S26",
    pris:9999,
    bilde:"img/mobil/s26.png"
},
{
    id: 2,
    navn:"Samsung S26 Ultra",
    pris:13999,
    bilde:"img/mobil/s26_ultra.png"
},
{
    id: 3,
    navn:"iPhone 17",
    pris:10999,
    bilde:"img/mobil/iphone_17.png"
},
{
    id: 4,
    navn:"iPhone 17 Pro Max",
    pris:14999,
    bilde:"img/mobil/iphone_17_pro_max.png"
},
{
    id: 5,
    navn:"Samsung A57",
    pris:4999,
    bilde:"img/mobil/a57.png"
},
{
    id: 6,
    navn:"Xiaomi 17 Pro Max",
    pris:12999,
    bilde:"img/mobil/xiaomi_17_pro_max.jpg"
},
{
    id: 7,
    navn:"Gaming Monitor",
    pris:2999,
    bilde:"img/gaming/monitor.png"
}
];

function visprodukter(parameter,liste ) {
    liste.innerHTML = parameter.map(produkt => `
        <div class="produkt">
            <div class="produkt_bilde">
                <img src="${produkt.bilde}" alt="${produkt.navn}">
            </div>

            <h3>${produkt.navn}</h3>
            
            <h2>${produkt.pris} kr</h2>

            <button class="kjopKnapp" data-id="${produkt.id}">
                Legg til i handlekurv
            </button>
        </div>
    `).join("");
}
let populareMobiler = document.getElementById("populareMobiler");
let gamingProdukter = document.getElementById("gamingProdukter");

let mobiler = produkter.filter(produkt => produkt.id <=6);
let gaming= produkter.filter(produkt => produkt.id > 6);

visprodukter(mobiler,populareMobiler)
visprodukter(gaming,gamingProdukter)

document.querySelectorAll(".produktListe").forEach(container => {

    container.addEventListener("wheel", function(event) {
        event.preventDefault();

        container.scrollLeft += event.deltaY*3;
    }, { passive: false });

});

let handlekurv = [];
const lukkKurv = document.getElementById("lukkKurv");
const kurvPopup = document.getElementById("kurvPopup");
const kurvKnapp = document.getElementById("kurvKnapp");
const knapper = document.querySelectorAll(".kjopKnapp");

function visHandlekurv() {

    const liste = document.getElementById("kurvListe");
    let total = 0;
    liste.innerHTML = "";

    for (let produkt of handlekurv) {
        total = total +produkt.pris;

        liste.innerHTML += `
            <p>
                ${produkt.navn} - ${produkt.pris} kr
            </p>
        `;
}
}
knapper.forEach(knapp => {
    knapp.addEventListener("click", () => {
        let id = Number(knapp.dataset.id);
        
        
        let valgtProdukt = produkter.find(produkt => produkt.id === id);
        
        
        handlekurv.push(valgtProdukt)
        
        document.getElementById("antallKurv").textContent =
        handlekurv.length;
});



    });

kurvKnapp.addEventListener("click", () => {
    visHandlekurv();
    document.getElementById("kurvPopup").style.display = "flex";

});

lukkKurv.addEventListener("click", () => {
    kurvPopup.style.display = "none";
});



