// salvo in una constante il bottone per fare il calcolo
const calcola = document.getElementById('calcola');

//quando l'utente clicca sul bottone calcola sarà avviato questa funzione
calcola.addEventListener('click',
    function () {

        // salviamo il valore dell'input name
        const nome = document.getElementById('name').value;
        console.log(nome);

        // salviamo il valore dell'input km
        const kmDaPercorrere = document.getElementById('km').value;
        console.log(kmDaPercorrere);

        // salviamo il valore della select fascia eta
        const fasciaEta = document.getElementById('eta-utente').value;
        console.log(fasciaEta);

        // dati per il calcolo del biglietto
        const prezzoKm = 0.21;
        console.log('prezzo al km', prezzoKm);
        let costoBiglietto = prezzoKm * kmDaPercorrere;
        console.log('costo base biglietto', costoBiglietto);

        // una variabile il cui valore verrà sovrascritto.
        let offerta = 'Biglietto Standard';

        //calcoliamo il costo e l'offerta applicata
        if (fasciaEta == 'under18') {
            // 20% sconto
            costoBiglietto -= (costoBiglietto * 20 / 100);
            offerta = 'Sconto under 18';

        } else if (fasciaEta == 'over65') {
            // 40% sconto
            costoBiglietto -= (costoBiglietto * 40 / 100);
            offerta = 'Sconto over 65';
        }

        // lasciamo solo due decimali
        costoBiglietto = costoBiglietto.toFixed(2);

        //generiamo un numero random per la carrozza, per il codice cp
        const numCarrozza = Math.floor(Math.random() * 20) + 1; //num da 1 a 20
        const codiceCp = Math.floor(Math.random() * (100000 - 90000)) ; //num compreso tra 1 a 100000 escluso

        // stampiamo i dati dell'utente nel biglietto
        document.getElementById('nome-passeggero').innerHTML = nome;
        document.getElementById('offerta-applicata').innerHTML = offerta;
        document.getElementById('carrozza').innerHTML = numCarrozza;
        document.getElementById('codice-cp').innerHTML = codiceCp;
        document.getElementById('costo').innerHTML = costoBiglietto + '€';
        document.getElementById('biglietto-utente').className = 'ticket';
    }
);

// salviamo in una variabile il nostro bottone annulla
const bottoneAnnulla = document.getElementById('annulla');

//impostiamo un evento click sul bottone annulla per resettare il nostro biglietto
bottoneAnnulla.addEventListener('click',
    function () {
        //nascondiamo il biglietto
        document.getElementById('biglietto-utente').className = 'd-none';

        // svuotiamo gli input
        document.getElementById('nome').value = '';
        document.getElementById('km').value = '';
        document.getElementById('fascia-eta').value = '';

        // svuotiamo gli altri elementi
        document.getElementById('nome-passeggero').innerHTML = '';
        document.getElementById('offerta-applicata').innerHTML = '';
        document.getElementById('carrozza').innerHTML = '';
        document.getElementById('codice-cp').innerHTML.innerHTML = '';
        document.getElementById('costo').innerHTML = '';
    }
);
