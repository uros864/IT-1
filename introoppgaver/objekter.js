/*let produkt = {
    navn: "Tastatur",
    pris: 599,
    antall: 3,
    rabatt: 0.2
};
let lagerverdi = produkt.pris * produkt.antall;
let rabattpris = produkt.pris- produkt.pris * produkt.rabatt;
console.log("Tastatur koster", produkt.pris, "kr.");
if (produkt.antall > 0) {
    console.log("På lager");
    console.log("Vi har", produkt.antall,"på lager.");
    console.log("Lagerverdi: ", lagerverdi);
} else {
    console.log("Utsolgt");
}
console.log("Rabattpris",rabattpris );

let produkt = {
    navn: "Tastatur",
    pris: 599,
    antall: 3,
    rabatt: 0.2
};
function visProdukt(produkt) {
    console.log(produkt.navn , " - " , produkt.pris , " kr");
    if (produkt.antall > 0) {
        console.log("På lager");
        console.log("Vi har", produkt.antall,"på lager.");
    } else {
        console.log("Utsolgt");
};
}
visProdukt(produkt);

let spill = {
    navn: "RocketLeague",
    pris: 0,
    tema: "sport",
    multiplayer: true

}
function visSpill(){
    console.log("Spill:", spill.navn);
    if(spill.pris > 0){
        console.log("Spillet koster", spill.pris, "kr");
    }
    else{
        console.log(spill.navn,"er gratis");
    }
    console.log("Tema:",spill.tema);
    if (spill.multiplayer){
        console.log(spill.navn, "er et multiplayer spill.");
    }
    else{
        console.log(spill.navn, "Er et singlepalyer spill.");
    }
}
visSpill()


let elever = [
    { navn: "Ali", poeng: 67 },
    { navn: "Nora", poeng: 89 },
    { navn: "Sofie", poeng: 42 },
    { navn: "Karlo", poeng: 9 },
    { navn: "Persen", poeng: 99 },
];
let sum = 0;
let bestatt = 0;
let x = 0;
let besteElev = elever[0];
let versteElev = elever[0]

for (let elev of elever) {
    sum += elev.poeng
    x += 1
    if(elev.poeng>=60){
        console.log(elev.navn,"fikk",elev.poeng,"poeng - bestått");
        bestatt += 1;
    }
    else{
        console.log(elev.navn,"fikk",elev.poeng,"poeng - ikke bestått");        
    }
    if (elev.poeng>besteElev.poeng){
        besteElev = elever[x-1]
    }
    if (elev.poeng<versteElev.poeng){
        versteElev = elever[x-1]
    }
}
let snitt = sum/x
console.log();
console.log("Gejnomsnitt poengsumm:", snitt);
console.log("Beste elev:",besteElev.navn,"med",besteElev.poeng,"poeng");
console.log("verste elev:",versteElev.navn,"med",versteElev.poeng,"poeng");
console.log(bestatt,"elever besto");

*/
let produkter = [
    {
        navn: "Tastatur",
        pris: 599,
        antall: 4
    },
    {
        navn: "Mus",
        pris: 299,
        antall: 8
    },
    {
        navn: "Skjerm",
        pris: 2499,
        antall: 2
    }
];
for (let produkt of produkter){
    if (produkt.lager>0){
        console.log(produkt.navn,"-",produkt.pris,"kr -",produkt.antall,"på lager");

    }
    else{
        console.log(produkt.navn,"-",produkt.pris,"kr -",produkt.antall,"på lager");
    }

    
}