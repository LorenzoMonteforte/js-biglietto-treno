let chilometri = parseFloat(prompt("Quanti chilometri devi percorrere?"));
let eta = parseInt(prompt("Quanti anni hai?"));
let prezzo = 0.21 * chilometri;
let sconto;
if(eta < 18){
    sconto = prezzo * 20 / 100;
    prezzo = prezzo - sconto;
}else if(eta > 65){
    sconto = prezzo * 40 / 100;
    prezzo = prezzo - sconto;
}
prezzo = prezzo.toFixed(2);
let prezzoContainer = document.getElementById("prezzoContainer");
prezzoContainer.innerHTML = prezzo;