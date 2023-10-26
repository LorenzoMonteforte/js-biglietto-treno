const chilometri = parseFloat(prompt("Quanti chilometri devi percorrere?"));
const eta = parseInt(prompt("Quanti anni hai?"));
if(!(isNaN(chilometri) == true || isNaN(eta) == true)){
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
    const prezzoContainer = document.getElementById("prezzoContainer");
    prezzoContainer.innerHTML = prezzo;
}else{
    const messaggioContainer = document.getElementById("messaggioContainer");
    messaggioContainer.innerHTML = "Errore durante l'immissione dei dati. Assicurati di inserire dei numeri."
}