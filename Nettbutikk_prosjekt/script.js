const produkter = [
{
    id: 1,
    navn:"s26",
    pris:9999,
    bilde:"img/mobil/s26.png"
},
{
    id: 2,
    navn:"s26_ultra",
    pris:13999,
    bilde:"img/mobil/s26_ultra.png"
},
{
    id: 3,
    navn:"iphone_17",
    pris:10999,
    bilde:"img/mobil/iphone_17.png"
},
{
    id: 4,
    navn:"iphone_17_pro_max",
    pris:14999,
    bilde:"img/mobil/iphone_17_pro_max.png"
},
{
    id: 5,
    navn:"a57",
    pris:4999,
    bilde:"img/mobil/a57.png"
}
];
let handlekurv = [];

const knapper = document.querySelectorAll(".kjopKnapp");
knapper.forEach(knapp => {

    knapp.addEventListener("click", () => {
        let id = Number(knapp.dataset.id);

        let valgtProdukt = produkter.find(produkt => produkt.id === id);
        
        
        handlekurv.push(valgtProdukt)
        
        document.getElementById("antallKurv").textContent =
        handlekurv.length;

        console.log(handlekurv);
        

    });

});
