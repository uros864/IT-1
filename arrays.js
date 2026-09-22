/*let tall = [1,2,3,4,5,6,7,8,9,10]
for (let i = 1; i <= tall.length;) {
    console.log(tall[i]);
    i += 2;
}
for (let ettall of tall){
    console.log(ettall);

}
console.log(frukt[0]);

let frukt = ["eple", "banan", "kiwi"];
frukt.pop()
frukt.push("apelsin")
for (fruktet of frukt){
    console.log(fruktet);
}


let handleliste = ["melk", "brød", "ost", "egg"];
handleliste.push("smør","salami")
for (let i = 1; i <= handleliste.length;i++) {
    console.log(i,".",handleliste[i-1]);
}


let temperaturer = [12, 14, 11, 9, 15, 17, 13];
let sum = 0
let tempover13 = 0
let storst = temperaturer[0]
let minst = temperaturer[0]
for (let temperatur of temperaturer) {
    sum = sum + temperatur;
    if(temperatur > 13){
        tempover13 += 1
    }
    if(temperatur>storst){
        temperatur = storst
    }
    if(temperatur<minst){
        temperatur = storst
    }
}
let gjenomsnitt = sum/temperaturer.length
console.log("Sum:",sum);
console.log("gjennomsnittstemperatur:",gjenomsnitt);
console.log("Dager med temperatur over 13:", tempover13);
console.log("Den høyeste temperaturen var:",storst,"grader");
console.log("Den høyeste temperaturen var:",minst,"grader");
*/
let elever = ["Ali", "Nora", "Sofie", "Jonas", "Emma"];
let poenger = [67, 89, 42, 76, 95];
let bestatt = 0;
let ikkebestatt = 0;
let i = 0;
for(let poeng of poenger){

    if(poeng>=60){
        bestatt += 1
        console.log(elever[i],"fikk",poeng,"poeng - bestått");
    }
    else{
        console.log(elever[i],"fikk",poeng,"poeng - ikke bestått");        
    }
    i += 1
}