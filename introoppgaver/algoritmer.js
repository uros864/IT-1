/*let tall = [2,17,9,19,5]
let sok = 17
let funnet = false
let antallSjekk = 0
for (let verdi of tall){
    antallSjekk += 1
    if (verdi==sok){
        funnet = true
        
        break;
    }
}
if  (funnet){
    console.log("fant tallet",sok);
    console.log("dett tok", antallSjekk, "sjekk.");
    
}
else{
    console.log("fant ikke tallet", sok);
}
*/
let produkter = [
    {navn: "Mus", pris:299},
    {navn:"Tastatur", pris:599},
    {navn:"Skjerm", pris:2499},
    {navn:"Webkamera",pris:749}
]
let funnet = false
let sok = "Skjerm"
for(let produkt of produkter){
    if (produkt.navn==sok){
        funnet = true
    }
}
if  (funnet){
    console.log("fant produktet",sok);
}
else{
    console.log("fant ikke produktet", sok)
}