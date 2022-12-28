import "./App.css";
import { useState } from "react";
import { Translator } from "./services/translator";
import { LanguageProvider } from "./providers/languageProvider";
import { TextToSpeechService } from "./services/textToSpeechService";
import axios from 'axios';




function App() {
// Consts
// Consts answers
  const [answer, setAnswer] = useState('');
  const [questionId, setQuestionId] = useState('');
  const handleChange = (event) => {setAnswer(event.target.value);}
  const questionIds = {'Question 1': 1,'Question 2': 2,'Question 3': 3,'Question 4': 4,'Question 5': 5,'Question 6': 6,'Question 7': 7,'Question 8': 8,'Question 9': 9,'Question 10': 10,'Question 11': 11,'Question 12': 12,'Question 13': 13,'Question 14': 14,'Question 15': 15,'Question 16': 16,'Question 17': 17,'Question 18': 18,'Question 19': 19,'Question 20': 20,};
  const [answer1, setAnswer1] = useState('');const [answer2, setAnswer2] = useState(''); const [answer3, setAnswer3] = useState(''); const [answer4, setAnswer4] = useState(''); const [answer5, setAnswer5] = useState(''); const [answer6, setAnswer6] = useState(''); const [answer7, setAnswer7] = useState('');const [answer8, setAnswer8] = useState('');const [answer9, setAnswer9] = useState('');
  const [answer10, setAnswer10] = useState('');const [answer11, setAnswer11] = useState('');const [answer12, setAnswer12] = useState('');const [answer13, setAnswer13] = useState('');const [answer14, setAnswer14] = useState('');const [answer15, setAnswer15] = useState('');

  // Consts notification
  const [success1, setSuccess1] = useState(false); const [success2, setSuccess2] = useState(false); const [success3, setSuccess3] = useState(false); const [success4, setSuccess4] = useState(false); const [success5, setSuccess5] = useState(false); const [success6, setSuccess6] = useState(false); const [success7, setSuccess7] = useState(false); const [success8, setSuccess8] = useState(false); const [success9, setSuccess9] = useState(false);
  const [success10, setSuccess10] = useState(false); const [success11, setSuccess11] = useState(false); const [success12, setSuccess12] = useState(false); const [success13, setSuccess13] = useState(false); const [success14, setSuccess14] = useState(false); const [success15, setSuccess15] = useState(false); const [success16, setSuccess16] = useState(false); const [success17, setSuccess17] = useState(false); const [success18, setSuccess18] = useState(false); const [success19, setSuccess19] = useState(false);const [success20, setSuccess20] = useState(false);



  const handleSubmit = (question, answer) => {
    const questionId = questionIds[question];
    axios.post('http://localhost:3001/api/answers', {
      question,
      answer,
      questionId,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.error(error);
    });if (question === 'Question 1') {
      setSuccess1(true);}if (question === 'Question 2') {setSuccess2(true); }if (question === 'Question 3') {setSuccess3(true);}if (question === 'Question 4') {setSuccess4(true); } if (question === 'Question 5') {   setSuccess5(true); }if (question === 'Question 6') {setSuccess6(true);}if (question === 'Question 7') { setSuccess7(true); } if (question === 'Question 8') { setSuccess8(true); }  if (question === 'Question 9') {   setSuccess9(true); } if (question === 'Question 10') {   setSuccess10(true); } if (question === 'Question 11') {   setSuccess11(true); } if (question === 'Question 12') {   setSuccess12(true); } if (question === 'Question 13') {   setSuccess13(true);}
    if (question === 'Question 14') {
      setSuccess14(true);}if (question === 'Question 15') { setSuccess15(true); } if (question === 'Question 16') {   setSuccess16(true); } if (question === 'Question 17') {   setSuccess17(true); } if (question === 'Question 18') {   setSuccess18(true); }if (question === 'Question 19') { setSuccess19(true);}if (question === 'Question 20') { setSuccess20(true); }
  }

// Keys
  const key = "52e7688fe389462cb78bc868b79af366";
  const region = "westeurope";

  // STT module
  const processResults = (translatedResult) => {
    console.log(translatedResult);

    if (translatedResult.question === 1) {
      setquestion1stt(translatedResult.original);
    }
    if (translatedResult.question === 2) {
      setquestion2stt(translatedResult.languages.languages.fr);
    }
    if (translatedResult.question === 3) {
      setquestion3stt(translatedResult.languages.languages.ja);
    }
    if (translatedResult.question === 4) {
      setquestion4stt(translatedResult.languages.languages.tr);
    }
    if (translatedResult.question === 5) {
      setquestion5stt(translatedResult.languages.languages.es);
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

  // TTS Questions
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
                  value={answer1}
                  onChange={event => setAnswer1(event.target.value)}
                  />
              </div>
              <div className="row mt-2">
                <button className="btn btn-success w-25" onClick={() => handleSubmit('Question 1', answer1)} >Indienen</button>
              </div>

              {success1 && (
                <div className="alert alert-success mt-2" role="alert">
                  Antwoord is succesvol verzonden!
                </div>
              )}
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
                  placeholder="Vul je antwoord hier in!"
                  value={answer2}
                  onChange={event => setAnswer2(event.target.value)}
                />
              </div>
              <div className="row mt-2">
                <button className="btn btn-success w-25" onClick={() => handleSubmit('Question 2', answer2)} >Indienen</button>
              </div>
              {success2 && (
                <div className="alert alert-success mt-2" role="alert">
                  Antwoord is succesvol verzonden!
                </div>
              )}
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
                  placeholder="Vul je antwoord hier in!"
                  value={answer3}
                  onChange={event => setAnswer3(event.target.value)}
                />
              </div>
              <div className="row mt-2">
                <button className="btn btn-success w-25" onClick={() => handleSubmit('Question 3', answer3)}>Indienen</button>
              </div>
              {success3 && (
                <div className="alert alert-success mt-2" role="alert">
                  Antwoord is succesvol verzonden!
                </div>
              )}
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
                  placeholder="Vul je antwoord hier in!"
                  value={answer4}
                  onChange={event => setAnswer4(event.target.value)}
                />
              </div>
              <div className="row mt-2">
                <button className="btn btn-success w-25" onClick={() => handleSubmit('Question 4', answer4)}>Indienen</button>
              </div>
              {success4 && (
                <div className="alert alert-success mt-2" role="alert">
                  Antwoord is succesvol verzonden!
                </div>
              )}
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
                  placeholder="Vul je antwoord hier in!"
                  value={answer5}
                  onChange={event => setAnswer5(event.target.value)}
                />
              </div>
              <div className="row mt-2">
                <button className="btn btn-success w-25" onClick={() => handleSubmit('Question 5', answer5)}>Indienen</button>
              </div>
              {success5 && (
                <div className="alert alert-success mt-2" role="alert">
                  Antwoord is succesvol verzonden!
                </div>
              )}
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
                  placeholder="Type de tekst hier over!"
                  value={answer6}
                  onChange={event => setAnswer6(event.target.value)}
                />
              </div>
              <div className="row mt-2">
                <button className="btn btn-success w-25" onClick={() => handleSubmit('Question 6', answer6)}>Indienen</button>
              </div>
              {success6 && (
                <div className="alert alert-success mt-2" role="alert">
                  Antwoord is succesvol verzonden!
                </div>
              )}
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
                  placeholder="Vul je antwoord hier in!"
                  value={answer7}
                  onChange={event => setAnswer7(event.target.value)}
                />
              </div>
              <div className="row mt-2">
                <button className="btn btn-success w-25" onClick={() => handleSubmit('Question 7', answer7)}>Indienen</button>
              </div>
              {success7 && (
                <div className="alert alert-success mt-2" role="alert">
                  Antwoord is succesvol verzonden!
                </div>
              )}
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
                  placeholder="Vul je antwoord hier in!"
                  value={answer8}
                  onChange={event => setAnswer8(event.target.value)}
                />
              </div>
              <div className="row mt-2">
                <button className="btn btn-success w-25" onClick={() => handleSubmit('Question 8', answer8)}>Indienen</button>
              </div>
              {success8 && (
                <div className="alert alert-success mt-2" role="alert">
                  Antwoord is succesvol verzonden!
                </div>
              )}
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
                  placeholder="Vul je antwoord hier in!"
                  value={answer9}
                  onChange={event => setAnswer9(event.target.value)}
                />
              </div>
              <div className="row mt-2">
                <button className="btn btn-success w-25" onClick={() => handleSubmit('Question 9', answer9)}>Indienen</button>
              </div>
              {success9 && (
                <div className="alert alert-success mt-2" role="alert">
                  Antwoord is succesvol verzonden!
                </div>
              )}
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
                  placeholder="Vul je antwoord hier in!"
                  value={answer10}
                  onChange={event => setAnswer10(event.target.value)}
                />
              </div>
              <div className="row mt-2">
                <button className="btn btn-success w-25" onClick={() => handleSubmit('Question 10', answer10)}>Indienen</button>
              </div>
              {success10 && (
                <div className="alert alert-success mt-2" role="alert">
                  Antwoord is succesvol verzonden!
                </div>
              )}
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
                  placeholder="Vul je antwoord hier in!"
                  value={answer11}
                  onChange={event => setAnswer11(event.target.value)}
                />
              </div>
              <div className="row mt-2">
                <button className="btn btn-success w-25" onClick={() => handleSubmit('Question 11', answer11)}>Indienen</button>
              </div>
              {success11 && (
                <div className="alert alert-success mt-2" role="alert">
                  Antwoord is succesvol verzonden!
                </div>
              )}
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
                  placeholder="Vul je antwoord hier in!"
                  value={answer12}
                  onChange={event => setAnswer12(event.target.value)}
                />
              </div>
              <div className="row mt-2">
                <button className="btn btn-success w-25" onClick={() => handleSubmit('Question 12', answer12)}>Indienen</button>
              </div>
              {success12 && (
                <div className="alert alert-success mt-2" role="alert">
                  Antwoord is succesvol verzonden!
                </div>
              )}
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
                  placeholder="Vul je antwoord hier in!"
                  value={answer13}
                  onChange={event => setAnswer13(event.target.value)}
                />
              </div>
              <div className="row mt-2">
                <button className="btn btn-success w-25" onClick={() => handleSubmit('Question 13', answer13)}>Indienen</button>
              </div>
              {success13 && (
                <div className="alert alert-success mt-2" role="alert">
                  Antwoord is succesvol verzonden!
                </div>
              )}
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
                  placeholder="Vul je antwoord hier in!"
                  value={answer14}
                  onChange={event => setAnswer14(event.target.value)}
                />
              </div>
              <div className="row mt-2">
                <button className="btn btn-success w-25" onClick={() => handleSubmit('Question 14', answer14)}>Indienen</button>
              </div>
              {success14 && (
                <div className="alert alert-success mt-2" role="alert">
                  Antwoord is succesvol verzonden!
                </div>
              )}
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
                  placeholder="Vul je antwoord hier in!"
                  value={answer15}
                  onChange={event => setAnswer15(event.target.value)}
                />
              </div>
              <div className="row mt-2">
                <button className="btn btn-success w-25" onClick={() => handleSubmit('Question 15', answer15)}>Indienen</button>
              </div>
              {success15 && (
                <div className="alert alert-success mt-2" role="alert">
                  Antwoord is succesvol verzonden!
                </div>
              )}
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
                <button className="btn btn-success w-25" onClick={() => handleSubmit('Question 16', question1stt)}>Indienen</button>
              </div>
              {success16 && (
                <div className="alert alert-success mt-2" role="alert">
                  Antwoord is succesvol verzonden!
                </div>
              )}
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
                <button className="btn btn-success w-25" onClick={() => handleSubmit('Question 17', question2stt)}>Indienen</button>
              </div>
              {success17 && (
                <div className="alert alert-success mt-2" role="alert">
                  Antwoord is succesvol verzonden!
                </div>
              )}
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
                <button className="btn btn-success w-25" onClick={() => handleSubmit('Question 18', question3stt)}>Indienen</button>
              </div>
              {success18 && (
                <div className="alert alert-success mt-2" role="alert">
                  Antwoord is succesvol verzonden!
                </div>
              )}
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
                <button className="btn btn-success w-25" onClick={() => handleSubmit('Question 19', question4stt)}>Indienen</button>
              </div>
              {success19 && (
                <div className="alert alert-success mt-2" role="alert">
                  Antwoord is succesvol verzonden!
                </div>
              )}
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
                <button className="btn btn-success w-25" onClick={() => handleSubmit('Question 20', question5stt)}>Indienen</button>
              </div>
              {success20 && (
                <div className="alert alert-success mt-2" role="alert">
                  Antwoord is succesvol verzonden!
                </div>
              )}
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
