import "./App.css";
import { useState } from "react";
import { Translator } from "./services/translator";
import { LanguageProvider } from "./providers/languageProvider";
import { TextToSpeechService } from "./services/textToSpeechService";
import axios from 'axios';



function App() {
  // Required
  const [answer, setAnswer] = useState('');
  const [notification, setNotification] = useState('');
  const handleChange = (event) => {
    setAnswer(event.target.value);
  }

  const handleSubmit = () => {
    axios.post('http://localhost:3000/api/answers', {
      answer: answer
    })
    .then(() => {
      setNotification('Data sent successfully!');
      setTimeout(() => {
        setNotification('');
      }, 3000);
    })
    .catch((error) => {
      setNotification('An error occurred: ' + error.message);
      setTimeout(() => {
        setNotification('');
      }, 3000);
    });
  }


  const key = "52e7688fe389462cb78bc868b79af366";
  const region = "westeurope";
  const processResults = (translatedResult) => {
    console.log(translatedResult);

    if (translatedResult.question === 1) {
      setquestion1stt(translatedResult.original);
    }
    if (translatedResult.question === 2) {
      setquestion2stt(translatedResult.languages.languages.fr);
    }
    if (translatedResult.question === 3) {
      setquestion3stt(translatedResult.original);
    }
    if (translatedResult.question === 4) {
      setquestion4stt(translatedResult.original);
    }
    if (translatedResult.question === 5) {
      setquestion5stt(translatedResult.original);
    }
  };

  const [translator] = useState(new Translator(processResults));
  const [question1stt, setquestion1stt] = useState("");
  const [question2stt, setquestion2stt] = useState("");
  const [question3stt, setquestion3stt] = useState("");
  const [question4stt, setquestion4stt] = useState("");
  const [question5stt, setquestion5stt] = useState("");
  const [languageProvider] = useState(new LanguageProvider());
  const [textToSpeechService] = useState(new TextToSpeechService());
  const [pageState, setpageState] = useState(0);
  const startListening = (question) => {
    translator.start({
      question: question,
      key: key,
      region: region,
      fromLanguage: languageProvider.currentFromLanguage,
      toLanguages: languageProvider.toLanguages.LanguageCodes,
    });
  };
  const stopListening = () => {
    translator.stop();
  };
  const startTextToSpeech = (text) => {
    textToSpeechService.start(
      {
        key: key,
        region: region,
      },
      text
      
    );
  };

  // ALL Questions
  const question1 =
    "Vandaag liep ik door de stad en ontmoette ik twee mensen. De één had vijf zakken snoep en de ander twintig. Deze lieve mensen waren zo gul dat ze me alle snoepzakjes gaven. Hoeveel zakken snoep heb ik gekregen?";
  const question2 =
    "Ik ben een muzikant en ik heb gisteren tien euro verdiend. En vandaag heb ik honderd euro verdiend. Hoeveel euro heb ik in totaal verdiend?";
  const question3 =
    "Mijn hypotheek deze maand is vijftig euro. Hoeveel kost een hypotheek van twee maanden mij?";
  const question4 =
    "Ik ga vandaag met mijn vriendin naar het museum. De prijs van een kaartje is twintig euro. Ik betaal voor alle kaartjes. Hoeveel gaat mij dit kosten?";
  const question5 =
    "Vandaag heb ik voor zeventig euro gewinkeld en voor twintig euro gegeten. Hoeveel heb ik vandaag uitgegeven?";


    
  // View UI
  return (
    <div className="App">
      {/* Home Page */}
      <>
        <div className={pageState === 0 ? "" : "d-none"}>
          <nav
            className="navbar navbar-light"
            style={{ backgroundColor: "rgba(202,5,56,255)" }}
          >
            <span className="navbar-brand mb-0 h1 text-white w-75 p-3">
              Winvision User Test
            </span>
          </nav>

          <div className="u-container-layout u-container-layout-1">
            <button className="btn1 btn btn-danger btn-lg" style={{position:"relative", left:"40%", top:"40vh" }} onClick={() => setpageState(1)} > Versie 1</button>

            <button className="btn2 btn btn-danger btn-lg" style={{position:"relative", left:"50%", top:"40vh" }} onClick={() => setpageState(2)}> Versie 2</button>
          </div>
        </div>
      </>

      {/* Versie 1 */}
      <>
        <div className={pageState === 1 ? "" : "d-none"}>
          <nav
            className="navbar navbar-light"
            style={{ backgroundColor: "rgba(202,5,56,255)" }}
          >
            <span className="navbar-brand mb-0 h1 text-white w-75 p-3">
              Winvision User Test Versie 1
            </span>
          </nav>

          {/* Question 1 */}
          <div className="container m-3 p-3">
            <div
              className="row mb-4 p-4"
              style={{ backgroundColor: "rgba(234,241,238,255)", width: "75%" }}
            >
              <div className="row d-flex justify-content-start">
                <h4 className="pe-0">Opdracht 1</h4>
                <h5>
                  Vind het antwoord in de tekst hieronder en klik daarna op
                  indienen.
                </h5>
              </div>

              <div className="row">
                <p>
                  Hoje eu estava andando pela cidade e encontrei duas pessoas.
                  Um tinha cem euros e o outro tinha vinte euros. Essas pessoas
                  adoráveis ​foram tão generosas que me deram todo o dinheiro.
                  Quantos euros recebi?
                </p>
              </div>
              
              <div className="row mt-2">
                <textarea
                  className="form-control"
                  rows={3}
                  placeholder="Vul je antwoord hier in!"
                  value={answer}
                  onChange={handleChange}
                />
              </div>
              <div className="row mt-2">
                <button className="btn btn-success w-25" onClick={handleSubmit} >Indienen</button>
              </div>
              
            </div>

            {/* Question 2 */}
            <div
              className="row mb-4 p-4"
              style={{ backgroundColor: "rgba(234,241,238,255)", width: "75%" }}
            >
              <div className="row d-flex justify-content-start">
                <h4 className="pe-0">Opdracht 2</h4>
                <h5>
                  Vind het antwoord in de tekst hieronder en klik daarna op
                  indienen.
                </h5>
              </div>

              <div className="row">
                <p>
                  Je suis musicien et j'ai gagné cinquante euros hier. Et
                  aujourd'hui j'en ai fait cent. Combien d'euros ai-je gagné ?
                </p>
              </div>
              <div className="row mt-2">
                <textarea
                  className="form-control"
                  rows={3}
                  defaultValue={""}
                  placeholder="Vul je antwoord hier in!"
                />
              </div>
              <div className="row mt-2">
                <button className="btn btn-success w-25">Indienen</button>
              </div>
            </div>

            {/* Question 3 */}
            <div
              className="row mb-4 p-4"
              style={{ backgroundColor: "rgba(234,241,238,255)", width: "75%" }}
            >
              <div className="row d-flex justify-content-start">
                <h4 className="pe-0">Opdracht 3</h4>
                <h5>
                  Vind het antwoord in de tekst hieronder en klik daarna op
                  indienen.
                </h5>
              </div>

              <div className="row">
                <p>
                  Το στεγαστικό μου αυτό το μήνα είναι τετρακόσια ευρώ. Πόσο
                  είναι για μένα μια δίμηνη υποθήκη;
                </p>
              </div>
              <div className="row mt-2">
                <textarea
                  className="form-control"
                  rows={3}
                  defaultValue={""}
                  placeholder="Vul je antwoord hier in!"
                />
              </div>
              <div className="row mt-2">
                <button className="btn btn-success w-25">Indienen</button>
              </div>
            </div>

            {/* Question 4 */}
            <div
              className="row mb-4 p-4"
              style={{ backgroundColor: "rgba(234,241,238,255)", width: "75%" }}
            >
              <div className="row d-flex justify-content-start">
                <h4 className="pe-0">Opdracht 4</h4>
                <h5>
                  Vind het antwoord in de tekst hieronder en klik daarna op
                  indienen.
                </h5>
              </div>

              <div className="row">
                <p>
                  Bugün kız arkadaşımla müzeye gideceğim. bir biletin fiyatı
                  elli. Biletleri ödüyorum. Bu bana ne kadara mal olacak?
                </p>
              </div>

              <div className="row mt-2">
                <textarea
                  className="form-control"
                  rows={3}
                  defaultValue={""}
                  placeholder="Vul je antwoord hier in!"
                />
              </div>
              <div className="row mt-2">
                <button className="btn btn-success w-25">Indienen</button>
              </div>
            </div>

            {/* Question 5 */}
            <div
              className="row mb-4 p-4"
              style={{ backgroundColor: "rgba(234,241,238,255)", width: "75%" }}
            >
              <div className="row d-flex justify-content-start">
                <h4 className="pe-0">Opdracht 5</h4>
                <h5>
                  Vind het antwoord in de tekst hieronder en klik daarna op
                  indienen.
                </h5>
              </div>

              <div className="row">
                <p>
                  Hoje eu estava andando pela cidade e encontrei duas pessoas.
                  Um tinha dez euros e o outro também tinha dez euros. Essas
                  pessoas adoráveis ​​foram tão generosas que me deram todo o
                  dinheiro. Quantos euros recebi?
                </p>
              </div>

              <div className="row mt-2">
                <textarea
                  className="form-control"
                  rows={3}
                  defaultValue={""}
                  placeholder="Vul je antwoord hier in!"
                />
              </div>
              <div className="row mt-2">
                <button className="btn btn-success w-25">Indienen</button>
              </div>
            </div>

            {/* Question 6 */}
            <div
              className="row mb-4 p-4"
              style={{ backgroundColor: "rgba(234,241,238,255)", width: "75%" }}
            >
              <div className="row d-flex justify-content-start">
                <h4 className="pe-0">Opdracht 6</h4>
                <h5>
                  Zorg dat de tekst die je op het A4-tje hebt gekregen in het
                  vak Hieronder komt te staan en klik op "Indienen"
                </h5>
              </div>

              <div className="row mt-2">
                <textarea
                  className="form-control"
                  style={{height: "15vh"}}
                  rows={3}
                  defaultValue={""}
                  placeholder="Type de tekst hier over!"
                />
              </div>
              <div className="row mt-2">
                <button className="btn btn-success w-25">Indienen</button>
              </div>
            </div>

            {/* Question 7 */}
            <div
              className="row mb-4 p-4"
              style={{ backgroundColor: "rgba(234,241,238,255)", width: "75%" }}
            >
              <div className="row d-flex justify-content-start">
                <h4 className="pe-0">Opdracht 7</h4>
                <h5>
                  Vertaal de tekst naar het Turks en voer de vertaalde tekst
                  hieronder in. Klik vervolgens op 'indienen'.
                </h5>
              </div>

              <div className="row">
                <p>
                  Vanavond zal het ook in Limburg overgaan op lichte regen, net
                  als in de rest van het land.
                </p>
              </div>

              <div className="row mt-2">
                <textarea
                  className="form-control"
                  rows={3}
                  defaultValue={""}
                  placeholder="Vul je antwoord hier in!"
                />
              </div>
              <div className="row mt-2">
                <button className="btn btn-success w-25">Indienen</button>
              </div>
            </div>

            {/* Question 8 */}
            <div
              className="row mb-4 p-4"
              style={{ backgroundColor: "rgba(234,241,238,255)", width: "75%" }}
            >
              <div className="row d-flex justify-content-start">
                <h4 className="pe-0">Opdracht 8</h4>
                <h5>
                  Vertaal de tekst naar het Turks en voer de vertaalde tekst
                  hieronder in. Klik vervolgens op 'indienen'.
                </h5>
              </div>

              <div className="row">
                <p>
                  Het&nbsp;WK 2022&nbsp;in Qatar wordt het 22e WK voetbal ooit
                  en het eerste kampioenschap in het Midden-Oosten..
                </p>
              </div>

              <div className="row mt-2">
                <textarea
                  className="form-control"
                  rows={3}
                  defaultValue={""}
                  placeholder="Vul je antwoord hier in!"
                />
              </div>
              <div className="row mt-2">
                <button className="btn btn-success w-25">Indienen</button>
              </div>
            </div>

            {/* Question 9 */}
            <div
              className="row mb-4 p-4"
              style={{ backgroundColor: "rgba(234,241,238,255)", width: "75%" }}
            >
              <div className="row d-flex justify-content-start">
                <h4 className="pe-0">Opdracht 9</h4>
                <h5>
                  Vertaal de tekst naar het Roemeens en voer de vertaalde tekst
                  hieronder in. Klik vervolgens op 'indienen'.
                </h5>
              </div>

              <div className="row">
                <p>Mijn naam is Ahmetcan en ik ben 21 jaar oud.</p>
              </div>

              <div className="row mt-2">
                <textarea
                  className="form-control"
                  rows={3}
                  defaultValue={""}
                  placeholder="Vul je antwoord hier in!"
                />
              </div>
              <div className="row mt-2">
                <button className="btn btn-success w-25">Indienen</button>
              </div>
            </div>

            {/* Question 10 */}
            <div
              className="row mb-4 p-4"
              style={{ backgroundColor: "rgba(234,241,238,255)", width: "75%" }}
            >
              <div className="row d-flex justify-content-start">
                <h4 className="pe-0">Opdracht 10</h4>
                <h5>
                  Vertaal de tekst naar het Spaans en voer de vertaalde tekst
                  hieronder in. Klik vervolgens op 'indienen'.
                </h5>
              </div>

              <div className="row">
                <p>Vandaag ga ik met mijn vriendin naar het museum.</p>
              </div>

              <div className="row mt-2">
                <textarea
                  className="form-control"
                  rows={3}
                  defaultValue={""}
                  placeholder="Vul je antwoord hier in!"
                />
              </div>
              <div className="row mt-2">
                <button className="btn btn-success w-25">Indienen</button>
              </div>
            </div>

            <div className="row mt-2">
              <button className="btn btn-primary" style={{width: "6%", position: "fixed", bottom:"20px", right:"16px"}} onClick={() => setpageState(0)}>Home</button>
            </div>

            {/* End of container */}
          </div>
          {/* End of Version 1 */}
        </div>
      </>

      {/* Versie 2 */}
      <>
        <div className={pageState === 2 ? "" : "d-none"}>
          <nav
            className="navbar navbar-light"
            style={{ backgroundColor: "rgba(202,5,56,255)" }}
          >
            <span className="navbar-brand mb-0 h1 text-white w-75 p-3">
              Winvision User Test Versie 2
            </span>
          </nav>

          {/* Question 1 */}
          <div className="container m-3 p-3">
            <div
              className="row mb-4 p-4"
              style={{ backgroundColor: "rgba(234,241,238,255)", width: "75%" }}
            >
              <div className="row d-flex justify-content-start">
                <h4 className="pe-0">Opdracht 1</h4>
                <h5>
                  Vind het antwoord in de tekst hieronder en klik daarna op
                  indienen.
                </h5>
              </div>

              <div className="row">
                <p>
                  Hoje eu estava andando pela cidade e encontrei duas pessoas.
                  Uma tinha cinco saquinhos de balas e a outra vinte. Essas
                  pessoas adoráveis ​​foram tão generosas que me deram todos os
                  sacos de doces. Quantos sacos de doces recebi?
                </p>
              </div>
              <div className="row mt-2">
                <button
                  className="btn btn-warning w-25"
                  onClick={() => startTextToSpeech(question1)}
                >
                  T.T.S
                </button>
              </div>
              <div className="row mt-2">
                <textarea
                  className="form-control"
                  rows={3}
                  defaultValue={""}
                  placeholder="Vul je antwoord hier in!"
                />
              </div>
              <div className="row mt-2">
                <button className="btn btn-success w-25">Indienen</button>
              </div>
            </div>

            {/* Question 2 */}
            <div
              className="row mb-4 p-4"
              style={{ backgroundColor: "rgba(234,241,238,255)", width: "75%" }}
            >
              <div className="row d-flex justify-content-start">
                <h4 className="pe-0">Opdracht 2</h4>
                <h5>
                  Vind het antwoord in de tekst hieronder en klik daarna op
                  indienen.
                </h5>
              </div>

              <div className="row">
                <p>
                  Je suis musicien et j'ai gagné dix euros hier. Et aujourd'hui
                  j'en ai fait cent. Combien d'euros ai-je gagné ?
                </p>
              </div>
              <div className="row mt-2">
                <button
                  className="btn btn-warning w-25"
                  onClick={() => startTextToSpeech(question2)}
                >
                  T.T.S
                </button>
              </div>
              <div className="row mt-2">
                <textarea
                  className="form-control"
                  rows={3}
                  defaultValue={""}
                  placeholder="Vul je antwoord hier in!"
                />
              </div>
              <div className="row mt-2">
                <button className="btn btn-success w-25">Indienen</button>
              </div>
            </div>

            {/* Question 3 */}
            <div
              className="row mb-4 p-4"
              style={{ backgroundColor: "rgba(234,241,238,255)", width: "75%" }}
            >
              <div className="row d-flex justify-content-start">
                <h4 className="pe-0">Opdracht 3</h4>
                <h5>
                  Vind het antwoord in de tekst hieronder en klik daarna op
                  indienen.
                </h5>
              </div>

              <div className="row">
                <p>
                  Το στεγαστικό μου αυτό το μήνα είναι πενήντα ευρώ. Πόσο θα μου
                  κοστίσει μια δίμηνη υποθήκη;
                </p>
              </div>
              <div className="row mt-2">
                <button
                  className="btn btn-warning w-25"
                  onClick={() => startTextToSpeech(question3)}
                >
                  T.T.S
                </button>
              </div>
              <div className="row mt-2">
                <textarea
                  className="form-control"
                  rows={3}
                  defaultValue={""}
                  placeholder="Vul je antwoord hier in!"
                />
              </div>
              <div className="row mt-2">
                <button className="btn btn-success w-25">Indienen</button>
              </div>
            </div>

            {/* Question 4 */}
            <div
              className="row mb-4 p-4"
              style={{ backgroundColor: "rgba(234,241,238,255)", width: "75%" }}
            >
              <div className="row d-flex justify-content-start">
                <h4 className="pe-0">Opdracht 4</h4>
                <h5>
                  Vind het antwoord in de tekst hieronder en klik daarna op
                  indienen.
                </h5>
              </div>

              <div className="row">
                <p>
                  Bugün kız arkadaşımla müzeye gideceğim. Bir biletin fiyatı
                  yirmi avro. Biletleri ödüyorum. Bu bana ne kadara mal olacak?
                </p>
              </div>
              <div className="row mt-2">
                <button
                  className="btn btn-warning w-25"
                  onClick={() => startTextToSpeech(question4)}
                >
                  T.T.S
                </button>
              </div>
              <div className="row mt-2">
                <textarea
                  className="form-control"
                  rows={3}
                  defaultValue={""}
                  placeholder="Vul je antwoord hier in!"
                />
              </div>
              <div className="row mt-2">
                <button className="btn btn-success w-25">Indienen</button>
              </div>
            </div>

            {/* Question 5 */}
            <div
              className="row mb-4 p-4"
              style={{ backgroundColor: "rgba(234,241,238,255)", width: "75%" }}
            >
              <div className="row d-flex justify-content-start">
                <h4 className="pe-0">Opdracht 5</h4>
                <h5>
                  Vind het antwoord in de tekst hieronder en klik daarna op
                  indienen.
                </h5>
              </div>

              <div className="row">
                <p>
                  Bugün yetmiş avroya alışveriş yaptım ve yirmi avroya yedim.
                  Bugün ne kadar harcadım?.
                </p>
              </div>
              <div className="row mt-2">
                <button
                  className="btn btn-warning w-25"
                  onClick={() => startTextToSpeech(question5)}
                >
                  T.T.S
                </button>
              </div>
              <div className="row mt-2">
                <textarea
                  className="form-control"
                  rows={3}
                  defaultValue={""}
                  placeholder="Vul je antwoord hier in!"
                />
              </div>
              <div className="row mt-2">
                <button className="btn btn-success w-25">Indienen</button>
              </div>
            </div>

            {/* Question 6 */}
            <div
              className="row mb-4 p-4"
              style={{ backgroundColor: "rgba(234,241,238,255)", width: "75%" }}
            >
              <div className="row d-flex justify-content-start">
                <h4 className="pe-0">Opdracht 6</h4>
                <h5>
                  Zorg dat de tekst die je op het A4-tje hebt gekregen in het
                  vak Hieronder komt te staan en klik op "Indienen"
                </h5>
              </div>
              <div className="row mt-3">
                <button className="btn btn-primary" style={{width:"25%"}} onClick={() => {startListening(1);}}>Start S.T.T.</button>
                <br></br>
                <button className="btn btn-danger" style={{width:"25%"}} onClick={() => stopListening()}>Stop S.T.T.</button>
              </div>
              <div className="row mt-2">
                <textarea
                  className="form-control"
                  style={{height: "15vh"}}
                  rows={3}
                  placeholder="Type de tekst hier over!"
                  value={question1stt}
                />
              </div>
              <div className="row mt-2">
                <button className="btn btn-success w-25">Indienen</button>
              </div>
            </div>

            {/* Question 7 */}
            <div
              className="row mb-4 p-4"
              style={{ backgroundColor: "rgba(234,241,238,255)", width: "75%" }}
            >
              <div className="row d-flex justify-content-start">
                <h4 className="pe-0">Opdracht 7</h4>
                <h5>
                  Vertaal de tekst naar het Frans en voer de vertaalde tekst
                  hieronder in. Klik vervolgens op 'indienen'.
                </h5>
              </div>

              <div className="row">
                <p>Vanavond gaat het ook regenen in Limburg.</p>
              </div>

              <div className="row mt-3">
                <button className="btn btn-primary" style={{width:"25%"}} onClick={() => {startListening(2);}}>Start S.T.T.</button>
                <br></br>
                <button className="btn btn-danger" style={{width:"25%"}} onClick={() => stopListening()}>Stop S.T.T.</button>
              </div>
              <div className="row mt-2">
                <textarea
                  className="form-control"
                  rows={3}
                  placeholder="Type de tekst hier over!"
                  value={question2stt}
                />
              </div>
              <div className="row mt-2">
                <button className="btn btn-success w-25">Indienen</button>
              </div>
            </div>

            {/* Question 8 */}
            <div
              className="row mb-4 p-4"
              style={{ backgroundColor: "rgba(234,241,238,255)", width: "75%" }}
            >
              <div className="row d-flex justify-content-start">
                <h4 className="pe-0">Opdracht 8</h4>
                <h5>
                  Vertaal de tekst naar het Japans en voer de vertaalde tekst
                  hieronder in. Klik vervolgens op 'indienen'.
                </h5>
              </div>

              <div className="row">
                <p>Hallo, mijn naam is Frank.</p>
              </div>

              <div className="row mt-3">
                <button className="btn btn-primary" style={{width:"25%"}} onClick={() => {startListening(3);}}>Start S.T.T.</button>
                <br></br>
                <button className="btn btn-danger" style={{width:"25%"}} onClick={() => stopListening()}>Stop S.T.T.</button>
              </div>
              <div className="row mt-2">
                <textarea
                  className="form-control"
                  rows={3}
                  placeholder="Type de tekst hier over!"
                  value={question3stt}
                />
              </div>
              <div className="row mt-2">
                <button className="btn btn-success w-25">Indienen</button>
              </div>
            </div>

            {/* Question 9 */}
            <div
              className="row mb-4 p-4"
              style={{ backgroundColor: "rgba(234,241,238,255)", width: "75%" }}
            >
              <div className="row d-flex justify-content-start">
                <h4 className="pe-0">Opdracht 9</h4>
                <h5>
                  Vertaal de tekst naar het Turks en voer de vertaalde tekst
                  hieronder in. Klik vervolgens op 'indienen'.
                </h5>
              </div>

              <div className="row">
                <p>
                  Aan het Wereldkampioenschap nemen 32 landen deel, namelijk
                  gastland Qatar en 31 andere landen.
                </p>
              </div>

              <div className="row mt-3">
                <button className="btn btn-primary" style={{width:"25%"}} onClick={() => {startListening(4);}}>Start S.T.T.</button>
                <br></br>
                <button className="btn btn-danger" style={{width:"25%"}} onClick={() => stopListening()}>Stop S.T.T.</button>
              </div>
              <div className="row mt-2">
                <textarea
                  className="form-control"
                  rows={3}
                  placeholder="Type de tekst hier over!"
                  value={question4stt}
                />
              </div>
              <div className="row mt-2">
                <button className="btn btn-success w-25">Indienen</button>
              </div>
            </div>

            {/* Question 10 */}
            <div
              className="row mb-4 p-4"
              style={{ backgroundColor: "rgba(234,241,238,255)", width: "75%" }}
            >
              <div className="row d-flex justify-content-start">
                <h4 className="pe-0">Opdracht 10</h4>
                <h5>
                  Vertaal de tekst naar het Spaans en voer de vertaalde tekst
                  hieronder in. Klik vervolgens op 'indienen'.
                </h5>
              </div>

              <div className="row">
                <p>
                  Vandaag ga ik met mijn vriendin naar het museum om naar
                  oorlogschepen te kijken.
                </p>
              </div>

              <div className="row mt-3">
                <button className="btn btn-primary" style={{width:"25%"}} onClick={() => {startListening(5);}}>Start S.T.T.</button>
                <br></br>
                <button className="btn btn-danger" style={{width:"25%"}} onClick={() => stopListening()}>Stop S.T.T.</button>
              </div>
              <div className="row mt-2">
                <textarea
                  className="form-control"
                  rows={3}
                  placeholder="Type de tekst hier over!"
                  value={question5stt}
                />
              </div>
              <div className="row mt-2">
                <button className="btn btn-success w-25">Indienen</button>
              </div>
            </div>

            <div className="row mt-2">
              <button className="btn btn-primary" style={{width: "6%", position: "fixed", bottom:"20px", right:"16px"}} onClick={() => setpageState(0)}>Home</button>
            </div>
            {/* End of container */}
          </div>
          {/* End of Version 2 */}
        </div>
      </>

      {/* End of App */}
    </div>
    
  );
}


export default App;
