import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";


// Array dei linguaggi con titolo e descrizione
const linguaggi = [
  {
    id: 1,
    titolo: "HTML",
    descrizione: "HTML (HyperText Markup Language) è il linguaggio standard per creare pagine e applicazioni web. Struttura il contenuto web e fornisce elementi di base come titoli, paragrafi e immagini."
  },
  {
    id: 2,
    titolo: "CSS",
    descrizione: "CSS (Cascading Style Sheets) è un linguaggio di stile utilizzato per descrivere la presentazione di un documento scritto in HTML o XML. Controlla il layout, i colori, i caratteri e l'aspetto complessivo di una pagina web."
  },
  {
    id: 3,
    titolo: "JavaScript",
    descrizione: "JavaScript è un linguaggio di programmazione dinamico utilizzato per lo sviluppo web, che consente contenuti interattivi come grafici animati, pulsanti cliccabili e altre funzionalità dinamiche sui siti web."
  },
  {
    id: 4,
    titolo: "Node.js",
    descrizione: "Node.js è un ambiente di runtime JavaScript lato server che permette di utilizzare JavaScript anche sul backend, consentendo agli sviluppatori di usare lo stesso linguaggio sia sul client che sul server."
  },
  {
    id: 5,
    titolo: "Express",
    descrizione: "Express è un framework per applicazioni web minimalista e veloce per Node.js. Fornisce strumenti robusti per creare applicazioni web e API e semplifica la gestione delle rotte e delle richieste."
  },
  {
    id: 6,
    titolo: "ReactJS",
    descrizione: "ReactJS è una libreria JavaScript per costruire interfacce utente, in particolare applicazioni a pagina singola. Consente agli sviluppatori di creare componenti UI riutilizzabili e di gestire efficacemente lo stato dell'applicazione."
  }
];

const App = () => {
  // Stato per il linguaggio selezionato, inizialmente impostato sul primo
  const [linguaggioSelezionato, setLinguaggioSelezionato] = useState(linguaggi[0]);

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">Le varie lingue del Web</h1>

      {/* Bottoni per ogni linguaggio */}
      <div className="d-flex justify-content-center flex-wrap mb-4">
        {linguaggi.map((linguaggio) => (
          <button key={linguaggio.id} className="btn btn-warning mx-2 my-1" 
          onClick={() => setLinguaggioSelezionato(linguaggio)}>
            {linguaggio.titolo}
          </button>
        ))}
      </div>

      {/* Card per mostrare il linguaggio selezionato */}
      <div className="card text-center">
        <div className="card-header bg-dark text-white">
          <h3>{linguaggioSelezionato.titolo}</h3>
        </div>
        <div className="card-body">
          <p className="card-text">{linguaggioSelezionato.descrizione}</p>
        </div>
      </div>
    </div>
  );
};

export default App;