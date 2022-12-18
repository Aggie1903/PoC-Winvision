import "./App.css";
import { useState } from "react";
import { Translator } from "./services/translator";
import { LanguageProvider } from "./providers/languageProvider";
import { TextToSpeechService } from "./services/textToSpeechService";

function App() {
  // Required
  const key = "52e7688fe389462cb78bc868b79af366";
  const region = "westeurope";

  const processResults = (translatedResult) => {
    console.log(translatedResult);

    if (translatedResult.question === 1) {
      setquestion1stt(translatedResult.original);
    }
    if (translatedResult.question === 2) {
      setquestion2stt(translatedResult.original);
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
  const [inputValue, setInputValue] = useState("");
  const [pageState, setpageState] = useState(0);

  const [sttResults, setsttResults] = useState({});

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
          <header
            className="u-clearfix u-custom-color-2 u-header u-header"
            id="sec-776e"
          >
            <div className="u-clearfix u-sheet u-sheet-1">
              <h2 className="u-subtitle u-text u-text-default u-text-1">
                Winvision User Test
              </h2>
            </div>
          </header>
          <section
            className="u-align-center u-clearfix u-section-1"
            id="carousel_a017"
          >
            <div className="u-clearfix u-sheet u-valign-middle-sm u-valign-middle-xs u-sheet-1">
              <div className="u-clearfix u-gutter-24 u-layout-wrap u-layout-wrap-1">
                <div className="u-gutter-0 u-layout">
                  <div className="u-layout-row">
                    <div className="u-container-style u-layout-cell u-size-60 u-layout-cell-1">
                      <div className="u-container-layout u-container-layout-1">
                        <button
                          className="btn1 btn btn-danger btn-lg"
                          onClick={() => setpageState(1)}
                        >
                          Versie 1
                        </button>
                        <button
                          className="btn2 btn btn-danger btn-lg"
                          onClick={() => setpageState(2)}
                        >
                          Versie 2
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>

      {/* Versie 1 */}
      <>
        <div className={pageState === 1 ? "" : "d-none"}>
          <div>
            <link rel="stylesheet" href="Timer.css" />
            <header
              className="u-clearfix u-custom-color-2 u-header u-header"
              id="sec-776e"
            >
              <div className="u-clearfix u-sheet u-sheet-1">
                <h2 className="u-subtitle u-text u-text-default u-text-1">
                  Winvision User Test
                </h2>
              </div>
            </header>
            <div>
              <section className="u-clearfix u-section-1" id="sec-e8aa">
                <div className="u-clearfix u-sheet u-sheet-1">
                  <h2 className="u-subtitle u-text u-text-default u-text-1">
                    Versie 1
                  </h2>
                  <h5 className="u-text u-text-2">
                    Vind het antwoord in de tekst hiernaast en klik daarna op
                    indienen.
                  </h5>
                  <div className="u-container-style u-custom-color-3 u-group u-group-1">
                    <div className="u-container-layout u-container-layout-1">
                      <h3 className="u-text u-text-default u-text-3">
                        Opdracht 1
                      </h3>
                      <p className="u-large-text u-text u-text-default u-text-variant u-text-4">
                        Hoje eu estava andando pela cidade e encontrei duas
                        pessoas. Um tinha cem euros e o outro tinha vinte euros.
                        Essas pessoas adoráveis ​foram tão generosas que me
                        deram todo o dinheiro. Quantos euros recebi?
                      </p>

                      <button
                        onClick={() => {
                          startListening(1);
                        }}
                      >
                        Start STT
                      </button>
                      <button onClick={() => stopListening()}>Stop STT</button>
                    </div>
                  </div>
                  <div className="u-form u-form-1">
                    <form
                      action="https://forms.nicepagesrv.com/Form/Process"
                      className="u-clearfix u-form-horizontal u-form-spacing-15 u-inner-form"
                      style={{ padding: "10px" }}
                      source="email"
                    >
                      <div className="u-form-group u-form-name u-label-none">
                        <textarea
                          placeholder="Vul hier je antwoord in!"
                          id="name-558c"
                          name="opdracht1"
                          className="u-custom-color-3 u-input u-input-rectangle u-input-1"
                          required="required"
                          defaultValue={""}
                          value={question1stt}
                        />
                      </div>
                      <div className="u-form-group u-form-submit u-label-none">
                        <a
                          href="#"
                          className="u-border-none u-btn u-btn-submit u-button-style u-custom-color-4 u-hover-palette-1-dark-1 u-btn-1"
                        >
                          Indienen
                          <br />
                        </a>
                        <input
                          type="submit"
                          defaultValue="submit"
                          className="u-form-control-hidden"
                        />
                      </div>
                      <div className="u-form-send-message u-form-send-success">
                        Thank you! Your message has been sent.
                      </div>
                      <div className="u-form-send-error u-form-send-message">
                        Unable to send your message. Please fix errors then try
                        again.
                      </div>
                      <input
                        type="hidden"
                        defaultValue
                        name="recaptchaResponse"
                      />
                      <input
                        type="hidden"
                        name="formServices"
                        defaultValue="06eadc4982f1076fd07b2d553d5e56b6"
                      />
                    </form>
                  </div>
                  <h5 className="u-text u-text-5">
                    Vind het antwoord in de tekst hiernaast en klik daarna op
                    indienen.
                  </h5>
                  <div className="u-container-style u-custom-color-3 u-group u-group-2">
                    <div className="u-container-layout u-container-layout-2">
                      <h3 className="u-text u-text-default u-text-6">
                        Opdracht 2
                      </h3>
                      <p className="u-large-text u-text u-text-default u-text-variant u-text-7">
                        Je suis musicien et j'ai gagné cinquante euros hier. Et
                        aujourd'hui j'en ai fait cent. Combien d'euros ai-je
                        gagné ?
                      </p>
                    </div>
                  </div>
                  <div className="u-form u-form-2">
                    <form
                      action="https://forms.nicepagesrv.com/Form/Process"
                      className="u-clearfix u-form-horizontal u-form-spacing-15 u-inner-form"
                      style={{ padding: "15px" }}
                      source="email"
                    >
                      <div className="u-form-group u-form-name u-label-none">
                        <label htmlFor="name-558c" className="u-label">
                          Name
                        </label>
                        <textarea
                          placeholder="Vul hier je antwoord in!"
                          id="name-558c"
                          name="opdracht2"
                          className="u-custom-color-3 u-input u-input-rectangle u-input-1"
                          required="required"
                          defaultValue={""}
                        />
                      </div>
                      <div className="u-form-group u-form-submit u-label-none">
                        <a
                          href="#"
                          className="u-border-none u-btn u-btn-submit u-button-style u-custom-color-4 u-hover-palette-1-dark-1 u-btn-2"
                        >
                          Indienen
                          <br />
                        </a>
                        <input
                          type="submit"
                          defaultValue="submit"
                          className="u-form-control-hidden"
                        />
                      </div>
                      <div className="u-form-send-message u-form-send-success">
                        Thank you! Your message has been sent.
                      </div>
                      <div className="u-form-send-error u-form-send-message">
                        Unable to send your message. Please fix errors then try
                        again.
                      </div>
                      <input
                        type="hidden"
                        defaultValue
                        name="recaptchaResponse"
                      />
                      <input
                        type="hidden"
                        name="formServices"
                        defaultValue="06eadc4982f1076fd07b2d553d5e56b6"
                      />
                    </form>
                  </div>
                </div>
              </section>
              <br></br>
              <br></br>
              <br></br>

              <section
                className="u-align-center u-clearfix u-section-2"
                id="sec-3495"
              >
                <div className="u-clearfix u-sheet u-sheet-1">
                  <h5 className="u-text u-text-1">
                    Vind het antwoord in de tekst hiernaast en klik daarna op
                    indienen.
                  </h5>
                  <div className="u-container-style u-custom-color-3 u-group u-group-1">
                    <div className="u-container-layout u-container-layout-1">
                      <h3 className="u-text u-text-default u-text-2">
                        Opdracht 3
                      </h3>
                      <p className="u-large-text u-text u-text-default u-text-variant u-text-3">
                        Το στεγαστικό μου αυτό το μήνα είναι τετρακόσια ευρώ.
                        Πόσο είναι για μένα μια δίμηνη υποθήκη;
                      </p>
                    </div>
                  </div>
                  <div className="u-form u-form-1">
                    <form
                      action="https://forms.nicepagesrv.com/Form/Process"
                      className="u-clearfix u-form-horizontal u-form-spacing-15 u-inner-form"
                      style={{ padding: "15px" }}
                      source="email"
                    >
                      <div className="u-form-group u-form-name u-label-none">
                        <label htmlFor="name-558c" className="u-label">
                          Name
                        </label>
                        <textarea
                          placeholder="Vul hier je antwoord in!"
                          id="name-558c"
                          name="opdracht3"
                          className="u-custom-color-3 u-input u-input-rectangle u-input-1"
                          required="required"
                          defaultValue={""}
                        />
                      </div>
                      <div className="u-form-group u-form-submit u-label-none">
                        <a
                          href="#"
                          className="u-border-none u-btn u-btn-submit u-button-style u-custom-color-4 u-hover-palette-1-dark-1 u-btn-1"
                        >
                          Indienen
                          <br />
                        </a>
                        <input
                          type="submit"
                          defaultValue="submit"
                          className="u-form-control-hidden"
                        />
                      </div>
                      <div className="u-form-send-message u-form-send-success">
                        Thank you! Your message has been sent.
                      </div>
                      <div className="u-form-send-error u-form-send-message">
                        Unable to send your message. Please fix errors then try
                        again.
                      </div>
                      <input
                        type="hidden"
                        defaultValue
                        name="recaptchaResponse"
                      />
                      <input
                        type="hidden"
                        name="formServices"
                        defaultValue="06eadc4982f1076fd07b2d553d5e56b6"
                      />
                    </form>
                  </div>

                  <h5 className="u-text u-text-4">
                    Vind het antwoord in de tekst hiernaast en klik daarna op
                    indienen.
                  </h5>
                  <div className="u-container-style u-custom-color-3 u-group u-group-2">
                    <div className="u-container-layout u-container-layout-2">
                      <h3 className="u-text u-text-default u-text-5">
                        Opdracht 4
                      </h3>
                      <p className="u-large-text u-text u-text-default u-text-variant u-text-6">
                        Bugün kız arkadaşımla müzeye gideceğim. bir biletin
                        fiyatı elli. Biletleri ödüyorum. Bu bana ne kadara mal
                        olacak?
                      </p>
                    </div>
                  </div>
                  <div className="u-form u-form-2">
                    <form
                      action="https://forms.nicepagesrv.com/Form/Process"
                      className="u-clearfix u-form-horizontal u-form-spacing-15 u-inner-form"
                      style={{ padding: "15px" }}
                      source="email"
                    >
                      <div className="u-form-group u-form-name u-label-none">
                        <label htmlFor="name-558c" className="u-label">
                          Name
                        </label>
                        <textarea
                          placeholder="Vul hier je antwoord in!"
                          id="name-558c"
                          name="opdracht4"
                          className="u-custom-color-3 u-input u-input-rectangle u-input-1"
                          required="required"
                          defaultValue={""}
                        />
                      </div>
                      <div className="u-form-group u-form-submit u-label-none">
                        <a
                          href="#"
                          className="u-border-none u-btn u-btn-submit u-button-style u-custom-color-4 u-hover-palette-1-dark-1 u-btn-2"
                        >
                          Indienen
                          <br />
                        </a>
                        <input
                          type="submit"
                          defaultValue="submit"
                          className="u-form-control-hidden"
                        />
                      </div>
                      <div className="u-form-send-message u-form-send-success">
                        Thank you! Your message has been sent.
                      </div>
                      <div className="u-form-send-error u-form-send-message">
                        Unable to send your message. Please fix errors then try
                        again.
                      </div>
                      <input
                        type="hidden"
                        defaultValue
                        name="recaptchaResponse"
                      />
                      <input
                        type="hidden"
                        name="formServices"
                        defaultValue="06eadc4982f1076fd07b2d553d5e56b6"
                      />
                    </form>
                  </div>
                  <div className="u-container-style u-custom-color-3 u-group u-group-3">
                    <div className="u-container-layout u-container-layout-3">
                      <h3 className="u-text u-text-default u-text-7">
                        Opdracht 5
                      </h3>
                      <p className="u-large-text u-text u-text-default u-text-variant u-text-8">
                        Hoje eu estava andando pela cidade e encontrei duas
                        pessoas. Um tinha dez euros e o outro também tinha dez
                        euros. Essas pessoas adoráveis ​​foram tão generosas que
                        me deram todo o dinheiro. Quantos euros recebi?
                      </p>
                    </div>
                  </div>
                  <div className="u-form u-form-3">
                    <form
                      action="https://forms.nicepagesrv.com/Form/Process"
                      className="u-clearfix u-form-horizontal u-form-spacing-15 u-inner-form"
                      style={{ padding: "15px" }}
                      source="email"
                    >
                      <div className="u-form-group u-form-name u-label-none">
                        <label htmlFor="name-558c" className="u-label">
                          Name
                        </label>
                        <textarea
                          placeholder="Vul hier je antwoord in!"
                          id="name-558c"
                          name="opdracht5"
                          className="u-custom-color-3 u-input u-input-rectangle u-input-1"
                          required="required"
                          defaultValue={""}
                        />
                      </div>
                      <div className="u-form-group u-form-submit u-label-none">
                        <a
                          href="#"
                          className="u-border-none u-btn u-btn-submit u-button-style u-custom-color-4 u-hover-palette-1-dark-1 u-btn-3"
                        >
                          Indienen
                          <br />
                        </a>
                        <input
                          type="submit"
                          defaultValue="submit"
                          className="u-form-control-hidden"
                        />
                      </div>
                      <div className="u-form-send-message u-form-send-success">
                        Thank you! Your message has been sent.
                      </div>
                      <div className="u-form-send-error u-form-send-message">
                        Unable to send your message. Please fix errors then try
                        again.
                      </div>
                      <input
                        type="hidden"
                        defaultValue
                        name="recaptchaResponse"
                      />
                      <input
                        type="hidden"
                        name="formServices"
                        defaultValue="06eadc4982f1076fd07b2d553d5e56b6"
                      />
                    </form>
                  </div>
                  <h5 className="u-text u-text-9">
                    Vind het antwoord in de tekst hiernaast en
                    <span style={{ fontWeight: 700 }}>klik </span>daarna op
                    indienen.
                  </h5>
                  <div className="u-container-style u-custom-color-3 u-group u-group-4">
                    <div className="u-container-layout u-container-layout-4">
                      <h3 className="u-text u-text-default u-text-10">
                        Opdracht 6
                      </h3>
                      <div className="u-form u-form-4">
                        <form
                          action="https://forms.nicepagesrv.com/Form/Process"
                          className="u-clearfix u-form-horizontal u-form-spacing-15 u-inner-form"
                          style={{ width: 500, height: 150 }}
                          source="email"
                        >
                          <div className="u-form-group u-form-message u-label-none">
                            <label htmlFor="name-558c" className="u-label">
                              Name
                            </label>
                            <textarea
                              placeholder="Typ de tekst hier over!"
                              id="name-558c"
                              name="opdracht6"
                              className="u-input u-input-rectangle u-white u-input-4"
                              style={{ width: 150, height: 140 }}
                              required="required"
                              defaultValue={""}
                            />
                          </div>
                          <div className="u-form-group u-form-submit u-label-none">
                            <a
                              href="#"
                              className="u-border-none u-btn u-btn-submit u-button-style u-custom-color-4 u-hover-palette-1-dark-1 u-btn-4"
                            >
                              Indienen
                              <br />
                            </a>
                            <input
                              type="submit"
                              defaultValue="submit"
                              className="u-form-control-hidden"
                            />
                          </div>
                          <div className="u-form-send-message u-form-send-success">
                            Thank you! Your message has been sent.
                          </div>
                          <div className="u-form-send-error u-form-send-message">
                            Unable to send your message. Please fix errors then
                            try again.
                          </div>
                          <input
                            type="hidden"
                            defaultValue
                            name="recaptchaResponse"
                          />
                          <input
                            type="hidden"
                            name="formServices"
                            defaultValue="06eadc4982f1076fd07b2d553d5e56b6"
                          />
                        </form>
                      </div>
                    </div>
                  </div>
                  <h5 className="u-text u-text-11">
                    Zorg dat de tekst die je op het A4-tje hebt gekregen in het
                    vak links komt te staan en klik op ‘Indienen'
                  </h5>
                  <div className="u-container-style u-custom-color-3 u-group u-group-5">
                    <div className="u-container-layout u-container-layout-5">
                      <h3 className="u-text u-text-default u-text-12">
                        Opdracht 7
                      </h3>
                      <p className="u-large-text u-text u-text-default u-text-variant u-text-13">
                        Vanavond zal het ook in Limburg overgaan op lichte
                        regen, net als in de rest van het land. Vannacht zou het
                        overwegend droog moeten worden, al zullen de
                        kustprovincies rekening moeten houden met wat motregen.
                        In het zuidoosten kan mist ontstaan.
                      </p>
                    </div>
                  </div>
                  <div className="u-form u-form-5">
                    <form
                      action="https://forms.nicepagesrv.com/Form/Process"
                      className="u-clearfix u-form-horizontal u-form-spacing-15 u-inner-form"
                      style={{ padding: "15px" }}
                      source="email"
                    >
                      <div className="u-form-group u-form-name u-label-none">
                        <label htmlFor="name-558c" className="u-label">
                          Name
                        </label>
                        <textarea
                          placeholder="Vul hier je antwoord in!"
                          id="name-558c"
                          name="opdracht7"
                          className="u-custom-color-3 u-input u-input-rectangle u-input-1"
                          required="required"
                          defaultValue={""}
                        />
                      </div>
                      <div className="u-form-group u-form-submit u-label-none">
                        <a
                          href="#"
                          className="u-border-none u-btn u-btn-submit u-button-style u-custom-color-4 u-hover-palette-1-dark-1 u-btn-5"
                        >
                          Indienen
                          <br />
                        </a>
                        <input
                          type="submit"
                          defaultValue="submit"
                          className="u-form-control-hidden"
                        />
                      </div>
                      <div className="u-form-send-message u-form-send-success">
                        Thank you! Your message has been sent.
                      </div>
                      <div className="u-form-send-error u-form-send-message">
                        Unable to send your message. Please fix errors then try
                        again.
                      </div>
                      <input
                        type="hidden"
                        defaultValue
                        name="recaptchaResponse"
                      />
                      <input
                        type="hidden"
                        name="formServices"
                        defaultValue="06eadc4982f1076fd07b2d553d5e56b6"
                      />
                    </form>
                  </div>
                  <h5 className="u-text u-text-14">
                    Vertaal de tekst hier links naar het Turks en voer de
                    vertaalde tekst hieronder in. Klik vervolgens op 'indienen'.
                  </h5>
                  <div className="u-container-style u-custom-color-3 u-group u-group-6">
                    <div className="u-container-layout u-container-layout-6">
                      <h3 className="u-text u-text-default u-text-15">
                        Opdracht 8
                      </h3>
                      <p className="u-large-text u-text u-text-default u-text-variant u-text-16">
                        Het&nbsp;WK 2022&nbsp;in Qatar wordt het 22e WK voetbal
                        ooit en het eerste kampioenschap in het Midden-Oosten.
                        Dit is de meest volledige website over het FIFA
                        Wereldkampioenschap voetbal 2022 in Qatar.
                      </p>
                    </div>
                  </div>
                  <h5 className="u-text u-text-17">
                    Vertaal de tekst hier links naar het Turks en voer de
                    vertaalde tekst hieronder in. Klik vervolgens op 'indienen'.
                  </h5>
                  <div className="u-form u-form-6">
                    <form
                      action="https://forms.nicepagesrv.com/Form/Process"
                      className="u-clearfix u-form-horizontal u-form-spacing-15 u-inner-form"
                      style={{ padding: "15px" }}
                      source="email"
                    >
                      <div className="u-form-group u-form-name u-label-none">
                        <label htmlFor="name-558c" className="u-label">
                          Name
                        </label>
                        <textarea
                          placeholder="Vul hier je antwoord in!"
                          id="name-558c"
                          name="opdracht8"
                          className="u-custom-color-3 u-input u-input-rectangle u-input-1"
                          required="required"
                          defaultValue={""}
                        />
                      </div>
                      <div className="u-form-group u-form-submit u-label-none">
                        <a
                          href="#"
                          className="u-border-none u-btn u-btn-submit u-button-style u-custom-color-4 u-hover-palette-1-dark-1 u-btn-6"
                        >
                          Indienen
                          <br />
                        </a>
                        <input
                          type="submit"
                          defaultValue="submit"
                          className="u-form-control-hidden"
                        />
                      </div>
                      <div className="u-form-send-message u-form-send-success">
                        Thank you! Your message has been sent.
                      </div>
                      <div className="u-form-send-error u-form-send-message">
                        Unable to send your message. Please fix errors then try
                        again.
                      </div>
                      <input
                        type="hidden"
                        defaultValue
                        name="recaptchaResponse"
                      />
                      <input
                        type="hidden"
                        name="formServices"
                        defaultValue="06eadc4982f1076fd07b2d553d5e56b6"
                      />
                    </form>
                  </div>
                  <div className="u-container-style u-custom-color-3 u-group u-group-7">
                    <div className="u-container-layout u-container-layout-7">
                      <h3 className="u-text u-text-default u-text-18">
                        Opdracht 9
                      </h3>
                      <p className="u-large-text u-text u-text-default u-text-variant u-text-19">
                        Aan het WK nemen 32 landen deel, namelijk gastland Qatar
                        en 31 landen die zich kwalificeren via de voorronden.
                        Deze landen worden in groepen geplaatst voor het
                        eindtoernooi in Qatar.
                      </p>
                    </div>
                  </div>
                  <h5 className="u-text u-text-20">
                    Vertaal de tekst hier links naar het Roemeens en voer de
                    vertaalde tekst hieronder in. Klik vervolgens op 'indienen'.
                  </h5>
                  <div className="u-form u-form-7">
                    <form
                      action="https://forms.nicepagesrv.com/Form/Process"
                      className="u-clearfix u-form-horizontal u-form-spacing-15 u-inner-form"
                      style={{ padding: "15px" }}
                      source="email"
                    >
                      <div className="u-form-group u-form-name u-label-none">
                        <label htmlFor="name-558c" className="u-label">
                          Name
                        </label>
                        <textarea
                          placeholder="Vul hier je antwoord in!"
                          id="name-558c"
                          name="opdracht9"
                          className="u-custom-color-3 u-input u-input-rectangle u-input-1"
                          required="required"
                          defaultValue={""}
                        />
                      </div>
                      <div className="u-form-group u-form-submit u-label-none">
                        <a
                          href="#"
                          className="u-border-none u-btn u-btn-submit u-button-style u-custom-color-4 u-hover-palette-1-dark-1 u-btn-7"
                        >
                          Indienen
                          <br />
                        </a>
                        <input
                          type="submit"
                          defaultValue="submit"
                          className="u-form-control-hidden"
                        />
                      </div>
                      <div className="u-form-send-message u-form-send-success">
                        Thank you! Your message has been sent.
                      </div>
                      <div className="u-form-send-error u-form-send-message">
                        Unable to send your message. Please fix errors then try
                        again.
                      </div>
                      <input
                        type="hidden"
                        defaultValue
                        name="recaptchaResponse"
                      />
                      <input
                        type="hidden"
                        name="formServices"
                        defaultValue="06eadc4982f1076fd07b2d553d5e56b6"
                      />
                    </form>
                  </div>
                  <div className="u-container-style u-custom-color-3 u-group u-group-8">
                    <div className="u-container-layout u-container-layout-8">
                      <h3 className="u-text u-text-default u-text-21">
                        Opdracht 10
                      </h3>
                      <p className="u-large-text u-text u-text-default u-text-variant u-text-22">
                        Vandaag ga ik met mijn vriendin naar het museum. Een
                        kaartje kost vijftig. Ik betaal voor het kaartje.
                        Hoeveel gaat mij dit kosten?
                      </p>
                    </div>
                  </div>
                  <h5 className="u-text u-text-23">
                    Vertaal de tekst hier links naar het Spaans en voer de
                    vertaalde tekst hieronder in. Klik vervolgens op 'indienen'.
                  </h5>
                  <div className="u-form u-form-8">
                    <form
                      action="https://forms.nicepagesrv.com/Form/Process"
                      className="u-clearfix u-form-horizontal u-form-spacing-15 u-inner-form"
                      style={{ padding: "15px" }}
                      source="email"
                    >
                      <div className="u-form-group u-form-name u-label-none">
                        <label htmlFor="name-558c" className="u-label">
                          Name
                        </label>
                        <textarea
                          placeholder="Vul hier je antwoord in!"
                          id="name-558c"
                          name="opdracht10"
                          className="u-custom-color-3 u-input u-input-rectangle u-input-1"
                          required="required"
                          defaultValue={""}
                        />
                      </div>
                      <div className="u-form-group u-form-submit u-label-none">
                        <a
                          href="#"
                          className="u-border-none u-btn u-btn-submit u-button-style u-custom-color-4 u-hover-palette-1-dark-1 u-btn-8"
                        >
                          Indienen
                          <br />
                        </a>
                        <input
                          type="submit"
                          defaultValue="submit"
                          className="u-form-control-hidden"
                        />
                      </div>
                      <div className="u-form-send-message u-form-send-success">
                        Thank you! Your message has been sent.
                      </div>
                      <div className="u-form-send-error u-form-send-message">
                        Unable to send your message. Please fix errors then try
                        again.
                      </div>
                      <input
                        type="hidden"
                        defaultValue
                        name="recaptchaResponse"
                      />
                      <input
                        type="hidden"
                        name="formServices"
                        defaultValue="06eadc4982f1076fd07b2d553d5e56b6"
                      />
                    </form>
                  </div>
                </div>
              </section>
              <section className="u-clearfix u-section-3" id="sec-fa9a">
                <div className="u-clearfix u-sheet u-sheet-1">
                  <button
                    className="btn btn-primary"
                    onClick={() => setpageState(0)}
                  >
                    Home
                  </button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </>

      {/* Versie 2 */}
      <>
        <div className={pageState === 2 ? "" : "d-none"}>
          <link rel="stylesheet" href="Timer.css" />
          <header
            className="u-clearfix u-custom-color-2 u-header u-header"
            id="sec-776e"
          >
            {/* Opdracht 1 */}
            <div className="u-clearfix u-sheet u-sheet-1">
              <h2 className="u-subtitle u-text u-text-default u-text-1">
                Winvision User Test
              </h2>
            </div>
          </header>
          <section className="u-clearfix u-section-1" id="sec-7317">
            <div className="u-clearfix u-sheet u-sheet-1">
              <h2 className="u-subtitle u-text u-text-default u-text-1">
                Versie 2
              </h2>
              <h5 className="u-text u-text-2">
                Vind het antwoord in de tekst hiernaast en klik daarna op
                indienen.
              </h5>
              <div className="u-container-style u-custom-color-3 u-group u-group-1">
                <div className="u-container-layout u-container-layout-1">
                  <h3 className="u-text u-text-default u-text-3">Opdracht 1</h3>
                  <p className="u-large-text u-text u-text-default u-text-variant u-text-4">
                    Hoje eu estava andando pela cidade e encontrei duas pessoas.
                    Uma tinha cinco saquinhos de balas e a outra vinte. Essas
                    pessoas adoráveis ​​foram tão generosas que me deram todos
                    os sacos de doces. Quantos sacos de doces recebi?
                  </p>
                  <button
                    className="btn btn-warning"
                    onClick={() => startTextToSpeech(question1)}
                  >
                    T.T.S.
                  </button>
                  {/* <button onClick={() => {
                    startListening(1);
                  }}>Start STT</button>
                  <button onClick={() => stopListening()}>Stop STT</button> */}
                </div>
              </div>
              <div className="u-form u-form-1">
                <form
                  action="https://forms.nicepagesrv.com/Form/Process"
                  className="u-clearfix u-form-horizontal u-form-spacing-15 u-inner-form"
                  style={{ padding: "15px" }}
                  source="email"
                >
                  <div className="u-form-group u-form-message u-label-none">
                    <label htmlFor="name-558c" className="u-label">
                      Name
                    </label>
                    <textarea
                      placeholder="Vul hier je antwoord in!"
                      id="name-558c"
                      name="opdracht1.v2"
                      className="u-custom-color-3 u-input u-input-rectangle u-input-1"
                      required="required"
                      defaultValue={""}
                      // value={question1stt}
                    />
                  </div>
                  <div className="u-form-group u-form-submit u-label-none">
                    <a
                      href="#"
                      className="u-border-none u-btn u-btn-submit u-button-style u-custom-color-4 u-hover-palette-1-dark-1 u-btn-1"
                    >
                      Indienen
                      <br />
                    </a>
                    <input
                      type="submit"
                      defaultValue="submit"
                      className="u-form-control-hidden"
                    />
                  </div>
                  <div className="u-form-send-message u-form-send-success">
                    Dankjewel! Je antwoord is verstuurd.
                  </div>
                  <div className="u-form-send-error u-form-send-message">
                    Mislukt!
                  </div>
                  <input type="hidden" defaultValue name="recaptchaResponse" />
                  <input
                    type="hidden"
                    name="formServices"
                    defaultValue="06eadc4982f1076fd07b2d553d5e56b6"
                  />
                </form>
              </div>

              {/* Opdracht 2 */}
              <h5 className="u-text u-text-5">
                Vind het antwoord in de tekst hiernaast en klik daarna op
                indienen.
              </h5>
              <div className="u-container-style u-custom-color-3 u-group u-group-2">
                <div className="u-container-layout u-container-layout-2">
                  <h3 className="u-text u-text-default u-text-6">Opdracht 2</h3>
                  <p className="u-large-text u-text u-text-default u-text-variant u-text-7">
                    Je suis musicien et j'ai gagné dix euros hier. Et
                    aujourd'hui j'en ai fait cent. Combien d'euros ai-je gagné ?
                  </p>
                  <button
                    className="btn btn-warning"
                    onClick={() => startTextToSpeech(question2)}
                  >
                    T.T.S.
                  </button>
                </div>
              </div>
              <div className="u-form u-form-2">
                <form
                  action="https://forms.nicepagesrv.com/Form/Process"
                  className="u-clearfix u-form-horizontal u-form-spacing-15 u-inner-form"
                  style={{ padding: "15px" }}
                  source="email"
                >
                  <div className="u-form-group u-form-message u-label-none">
                    <label htmlFor="name-558c" className="u-label">
                      Name
                    </label>
                    <textarea
                      placeholder="Vul hier je antwoord in!"
                      id="name-558c"
                      name="opdracht2.v2"
                      className="u-custom-color-3 u-input u-input-rectangle u-input-2"
                      required="required"
                      defaultValue={""}
                    />
                  </div>
                  <div className="u-form-group u-form-submit u-label-none">
                    <a
                      href="#"
                      className="u-border-none u-btn u-btn-submit u-button-style u-custom-color-4 u-hover-palette-1-dark-1 u-btn-2"
                    >
                      Indienen
                      <br />
                    </a>
                    <input
                      type="submit"
                      defaultValue="submit"
                      className="u-form-control-hidden"
                    />
                  </div>
                  <div className="u-form-send-message u-form-send-success">
                    Dankjewel! Je antwoord is verstuurd.
                  </div>
                  <div className="u-form-send-error u-form-send-message">
                    Mislukt!
                  </div>
                  <input type="hidden" defaultValue name="recaptchaResponse" />
                  <input
                    type="hidden"
                    name="formServices"
                    defaultValue="06eadc4982f1076fd07b2d553d5e56b6"
                  />
                </form>
              </div>
            </div>
          </section>
          <br></br>
          <br></br>
          <br></br>
          {/* Opdracht 3 */}
          <section
            className="u-align-center u-clearfix u-section-2"
            id="sec-3dbf"
          >
            <div className="u-clearfix u-sheet u-sheet-1">
              <h5 className="u-text u-text-1">
                Vind het antwoord in de tekst hiernaast en klik daarna op
                indienen.
              </h5>
              <div className="u-container-style u-custom-color-3 u-group u-group-1">
                <div className="u-container-layout u-container-layout-1">
                  <h3 className="u-text u-text-default u-text-2">Opdracht 3</h3>
                  <p className="u-large-text u-text u-text-default u-text-variant u-text-3">
                    Το στεγαστικό μου αυτό το μήνα είναι πενήντα ευρώ. Πόσο θα
                    μου κοστίσει μια δίμηνη υποθήκη;
                  </p>
                  <button
                    className="btn btn-warning"
                    onClick={() => startTextToSpeech(question3)}
                  >
                    T.T.S.
                  </button>
                </div>
              </div>
              <div className="u-form u-form-1">
                <form
                  action="https://forms.nicepagesrv.com/Form/Process"
                  className="u-clearfix u-form-horizontal u-form-spacing-15 u-inner-form"
                  style={{ padding: "15px" }}
                  source="email"
                >
                  <div className="u-form-group u-form-message u-label-none">
                    <label htmlFor="name-558c" className="u-label">
                      Name
                    </label>
                    <textarea
                      placeholder="Vul hier je antwoord in!"
                      id="name-558c"
                      name="opdracht3.v2"
                      className="u-custom-color-3 u-input u-input-rectangle u-input-1"
                      required="required"
                      defaultValue={""}
                    />
                  </div>
                  <div className="u-form-group u-form-submit u-label-none">
                    <a
                      href="#"
                      className="u-border-none u-btn u-btn-submit u-button-style u-custom-color-4 u-hover-palette-1-dark-1 u-btn-1"
                    >
                      Indienen
                      <br />
                    </a>
                    <input
                      type="submit"
                      defaultValue="submit"
                      className="u-form-control-hidden"
                    />
                  </div>
                  <div className="u-form-send-message u-form-send-success">
                    Dankjewel! Je antwoord is verstuurd.
                  </div>
                  <div className="u-form-send-error u-form-send-message">
                    Mislukt!
                  </div>
                  <input type="hidden" defaultValue name="recaptchaResponse" />
                  <input
                    type="hidden"
                    name="formServices"
                    defaultValue="06eadc4982f1076fd07b2d553d5e56b6"
                  />
                </form>
              </div>

              {/* Opdracht 4 */}
              <h5 className="u-text u-text-4">
                Vind het antwoord in de tekst hiernaast en klik daarna op
                indienen.
              </h5>
              <div className="u-container-style u-custom-color-3 u-group u-group-2">
                <div className="u-container-layout u-container-layout-2">
                  <h3 className="u-text u-text-default u-text-5">Opdracht 4</h3>
                  <p className="u-large-text u-text u-text-default u-text-variant u-text-6">
                    Bugün kız arkadaşımla müzeye gideceğim. Bir biletin fiyatı
                    yirmi avro. Biletleri ödüyorum. Bu bana ne kadara mal
                    olacak?
                  </p>
                  <button
                    className="btn btn-warning"
                    onClick={() => startTextToSpeech(question4)}
                  >
                    T.T.S.
                  </button>
                </div>
              </div>
              <div className="u-form u-form-2">
                <form
                  action="https://forms.nicepagesrv.com/Form/Process"
                  className="u-clearfix u-form-horizontal u-form-spacing-15 u-inner-form"
                  style={{ padding: "15px" }}
                  source="email"
                >
                  <div className="u-form-group u-form-message u-label-none">
                    <label htmlFor="name-558c" className="u-label">
                      Name
                    </label>
                    <textarea
                      placeholder="Vul hier je antwoord in!"
                      id="name-558c"
                      name="opdracht4.v2"
                      className="u-custom-color-3 u-input u-input-rectangle u-input-2"
                      required="required"
                      defaultValue={""}
                    />
                  </div>
                  <div className="u-form-group u-form-submit u-label-none">
                    <a
                      href="#"
                      className="u-border-none u-btn u-btn-submit u-button-style u-custom-color-4 u-hover-palette-1-dark-1 u-btn-2"
                    >
                      Indienen
                      <br />
                    </a>
                    <input
                      type="submit"
                      defaultValue="submit"
                      className="u-form-control-hidden"
                    />
                  </div>
                  <div className="u-form-send-message u-form-send-success">
                    Dankjewel! Je antwoord is verstuurd.
                  </div>
                  <div className="u-form-send-error u-form-send-message">
                    Mislukt!
                  </div>
                  <input type="hidden" defaultValue name="recaptchaResponse" />
                  <input
                    type="hidden"
                    name="formServices"
                    defaultValue="06eadc4982f1076fd07b2d553d5e56b6"
                  />
                </form>
              </div>

              {/* Opdracht 5 */}
              <div className="u-container-style u-custom-color-3 u-group u-group-3">
                <div className="u-container-layout u-container-layout-3">
                  <h3 className="u-text u-text-default u-text-7">Opdracht 5</h3>
                  <p className="u-large-text u-text u-text-default u-text-variant u-text-8">
                    Bugün yetmiş avroya alışveriş yaptım ve yirmi avroya yedim.
                    Bugün ne kadar harcadım?.
                  </p>
                  <button
                    className="btn btn-warning"
                    onClick={() => startTextToSpeech(question5)}
                  >
                    T.T.S.
                  </button>
                </div>
              </div>
              <div className="u-form u-form-3">
                <form
                  action="https://forms.nicepagesrv.com/Form/Process"
                  className="u-clearfix u-form-horizontal u-form-spacing-15 u-inner-form"
                  style={{ padding: "15px" }}
                  source="email"
                >
                  <div className="u-form-group u-form-message u-label-none">
                    <label htmlFor="name-558c" className="u-label">
                      Name
                    </label>
                    <textarea
                      placeholder="Vul hier je antwoord in!"
                      id="name-558c"
                      name="opdracht5.v2"
                      className="u-custom-color-3 u-input u-input-rectangle u-input-3"
                      required="required"
                      defaultValue={""}
                    />
                  </div>
                  <div className="u-form-group u-form-submit u-label-none">
                    <a
                      href="#"
                      className="u-border-none u-btn u-btn-submit u-button-style u-custom-color-4 u-hover-palette-1-dark-1 u-btn-3"
                    >
                      Indienen
                      <br />
                    </a>
                    <input
                      type="submit"
                      defaultValue="submit"
                      className="u-form-control-hidden"
                    />
                  </div>
                  <div className="u-form-send-message u-form-send-success">
                    Dankjewel! Je antwoord is verstuurd.
                  </div>
                  <div className="u-form-send-error u-form-send-message">
                    Mislukt!
                  </div>
                  <input type="hidden" defaultValue name="recaptchaResponse" />
                  <input
                    type="hidden"
                    name="formServices"
                    defaultValue="06eadc4982f1076fd07b2d553d5e56b6"
                  />
                </form>
              </div>

              {/* Opdracht 6 */}
              <h5 className="u-text u-text-9">
                Vind het antwoord in de tekst hiernaast en
                <span style={{ fontWeight: 700 }}>klik </span>daarna op
                indienen.
              </h5>
              <div className="u-container-style u-custom-color-3 u-group u-group-4">
                <div className="u-container-layout u-container-layout-4">
                  <h3 className="u-text u-text-default u-text-10">
                    Opdracht 6
                  </h3>
                  <br></br>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      startListening(1);
                    }}
                  >
                    Start S.T.T.
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => stopListening()}
                  >
                    Stop S.T.T.
                  </button>
                  <div className="u-form u-form-4">
                    <form
                      action="https://forms.nicepagesrv.com/Form/Process"
                      className="u-clearfix u-form-horizontal u-form-spacing-15 u-inner-form"
                      style={{ width: 500, height: 150 }}
                      source="email"
                    >
                      <div className="u-form-group u-form-message u-label-none">
                        <label htmlFor="name-558c" className="u-label">
                          Name
                        </label>
                        <textarea
                          placeholder="Typ de tekst hier over!"
                          id="name-558c"
                          name="opdracht6.v2"
                          className="u-input u-input-rectangle u-white u-input-4"
                          style={{ width: 150, height: 140 }}
                          required="required"
                          rows={1}
                          defaultValue={""}
                          value={question1stt}
                        />
                      </div>
                      <div className="u-form-group u-form-submit u-label-none">
                        <a
                          href="#"
                          className="u-border-none u-btn u-btn-submit u-button-style u-custom-color-4 u-hover-palette-1-dark-1 u-btn-4"
                        >
                          Indienen
                          <br />
                        </a>
                        <input
                          type="submit"
                          defaultValue="submit"
                          className="u-form-control-hidden"
                        />
                      </div>
                      <div className="u-form-send-message u-form-send-success">
                        Dankjewel! Je antwoord is verstuurd.
                      </div>
                      <div className="u-form-send-error u-form-send-message">
                        Unable to send your message. Please fix errors then try
                        again.
                      </div>
                      <input
                        type="hidden"
                        defaultValue
                        name="recaptchaResponse"
                      />
                      <input
                        type="hidden"
                        name="formServices"
                        defaultValue="06eadc4982f1076fd07b2d553d5e56b6"
                      />
                    </form>
                  </div>
                </div>
              </div>

              {/* Opdracht 7 */}
              <h5 className="u-text u-text-11">
                Zorg dat de tekst die je op het A4-tje hebt gekregen in het vak
                links komt te staan en klik op ‘Indienen'
              </h5>
              <div className="u-container-style u-custom-color-3 u-group u-group-5">
                <div className="u-container-layout u-container-layout-5">
                  <h3 className="u-text u-text-default u-text-12">
                    Opdracht 7
                  </h3>
                  <p className="u-large-text u-text u-text-default u-text-variant u-text-13">
                    Vanavond zal het ook in Limburg overgaan op lichte regen,
                    net als in de rest van het land. Vannacht zou het overwegend
                    droog moeten worden, al zullen de kustprovincies rekening
                    moeten houden met wat motregen. In het zuidoosten kan mist
                    ontstaan.
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      startListening(2);
                    }}
                  >
                    Start S.T.T.
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => stopListening()}
                  >
                    Stop S.T.T.
                  </button>
                </div>
              </div>
              <div className="u-form u-form-5">
                <form
                  action="https://forms.nicepagesrv.com/Form/Process"
                  className="u-clearfix u-form-horizontal u-form-spacing-15 u-inner-form"
                  style={{ padding: "15px" }}
                  source="email"
                >
                  <div className="u-form-group u-form-message u-label-none">
                    <label htmlFor="name-558c" className="u-label">
                      Name
                    </label>
                    <textarea
                      placeholder="Vul hier je antwoord in!"
                      id="name-558c"
                      name="opdracht7.v2"
                      className="u-custom-color-3 u-input u-input-rectangle u-input-5"
                      required="required"
                      defaultValue={""}
                      value={question2stt}
                    />
                  </div>
                  <div className="u-form-group u-form-submit u-label-none">
                    <a
                      href="#"
                      className="u-border-none u-btn u-btn-submit u-button-style u-custom-color-4 u-hover-palette-1-dark-1 u-btn-5"
                    >
                      Indienen
                      <br />
                    </a>
                    <input
                      type="submit"
                      defaultValue="submit"
                      className="u-form-control-hidden"
                    />
                  </div>
                  <div className="u-form-send-message u-form-send-success">
                    Dankjewel! Je antwoord is verstuurd.
                  </div>
                  <div className="u-form-send-error u-form-send-message">
                    Unable to send your message. Please fix errors then try
                    again.
                  </div>
                  <input type="hidden" defaultValue name="recaptchaResponse" />
                  <input
                    type="hidden"
                    name="formServices"
                    defaultValue="06eadc4982f1076fd07b2d553d5e56b6"
                  />
                </form>
              </div>
              <h5 className="u-text u-text-14">
                Vertaal de tekst hier links naar het Frans en voer de vertaalde
                tekst hieronder in. Klik vervolgens op 'indienen'.
              </h5>

              {/* Opdracht 8 */}
              <div className="u-container-style u-custom-color-3 u-group u-group-6">
                <div className="u-container-layout u-container-layout-6">
                  <h3 className="u-text u-text-default u-text-15">
                    Opdracht 8
                  </h3>
                  <p className="u-large-text u-text u-text-default u-text-variant u-text-16">
                    Het&nbsp;WK 2022&nbsp;in Qatar wordt het 22e WK voetbal ooit
                    en het eerste kampioenschap in het Midden-Oosten. Dit is de
                    meest volledige website over het FIFA Wereldkampioenschap
                    voetbal 2022 in Qatar.
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      startListening(3);
                    }}
                  >
                    Start S.T.T.
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => stopListening()}
                  >
                    Stop S.T.T.
                  </button>
                </div>
              </div>
              <h5 className="u-text u-text-17">
                Vertaal de tekst hier links naar het Italiaans en voer de
                vertaalde tekst hieronder in. Klik vervolgens op 'indienen'.
              </h5>
              <div className="u-form u-form-6">
                <form
                  action="https://forms.nicepagesrv.com/Form/Process"
                  className="u-clearfix u-form-horizontal u-form-spacing-15 u-inner-form"
                  style={{ padding: "15px" }}
                  source="email"
                >
                  <div className="u-form-group u-form-message u-label-none">
                    <label htmlFor="name-558c" className="u-label">
                      Name
                    </label>
                    <textarea
                      placeholder="Vul hier je antwoord in!"
                      id="name-558c"
                      name="opdracht8.v2"
                      className="u-custom-color-3 u-input u-input-rectangle u-input-6"
                      required="required"
                      defaultValue={""}
                      value={question3stt}
                    />
                  </div>
                  <div className="u-form-group u-form-submit u-label-none">
                    <a
                      href="#"
                      className="u-border-none u-btn u-btn-submit u-button-style u-custom-color-4 u-hover-palette-1-dark-1 u-btn-6"
                    >
                      Indienen
                      <br />
                    </a>
                    <input
                      type="submit"
                      defaultValue="submit"
                      className="u-form-control-hidden"
                    />
                  </div>
                  <div className="u-form-send-message u-form-send-success">
                    Dankjewel! Je antwoord is verstuurd.
                  </div>
                  <div className="u-form-send-error u-form-send-message">
                    Unable to send your message. Please fix errors then try
                    again.
                  </div>
                  <input type="hidden" defaultValue name="recaptchaResponse" />
                  <input
                    type="hidden"
                    name="formServices"
                    defaultValue="06eadc4982f1076fd07b2d553d5e56b6"
                  />
                </form>
              </div>

              {/* Opdracht 9 */}
              <div className="u-container-style u-custom-color-3 u-group u-group-7">
                <div className="u-container-layout u-container-layout-7">
                  <h3 className="u-text u-text-default u-text-18">
                    Opdracht 9
                  </h3>
                  <p className="u-large-text u-text u-text-default u-text-variant u-text-19">
                    Aan het WK nemen 32 landen deel, namelijk gastland Qatar en
                    31 landen die zich kwalificeren via de voorronden. Deze
                    landen worden in groepen geplaatst voor het eindtoernooi in
                    Qatar.
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      startListening(4);
                    }}
                  >
                    Start S.T.T.
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => stopListening()}
                  >
                    Stop S.T.T.
                  </button>
                </div>
              </div>
              <h5 className="u-text u-text-20">
                Vertaal de tekst hier links naar het Turks en voer de vertaalde
                tekst hieronder in. Klik vervolgens op 'indienen'.
              </h5>
              <div className="u-form u-form-7">
                <form
                  action="https://forms.nicepagesrv.com/Form/Process"
                  className="u-clearfix u-form-horizontal u-form-spacing-15 u-inner-form"
                  style={{ padding: "15px" }}
                  source="email"
                >
                  <div className="u-form-group u-form-message u-label-none">
                    <label htmlFor="name-558c" className="u-label">
                      Name
                    </label>
                    <textarea
                      placeholder="Vul hier je antwoord in!"
                      id="name-558c"
                      name="opdracht9.v2"
                      className="u-custom-color-3 u-input u-input-rectangle u-input-7"
                      required="required"
                      defaultValue={""}
                      value={question4stt}
                    />
                  </div>
                  <div className="u-form-group u-form-submit u-label-none">
                    <a
                      href="#"
                      className="u-border-none u-btn u-btn-submit u-button-style u-custom-color-4 u-hover-palette-1-dark-1 u-btn-7"
                    >
                      Indienen
                      <br />
                    </a>
                    <input
                      type="submit"
                      defaultValue="submit"
                      className="u-form-control-hidden"
                    />
                  </div>
                  <div className="u-form-send-message u-form-send-success">
                    Thank you! Your message has been sent.
                  </div>
                  <div className="u-form-send-error u-form-send-message">
                    Unable to send your message. Please fix errors then try
                    again.
                  </div>
                  <input type="hidden" defaultValue name="recaptchaResponse" />
                  <input
                    type="hidden"
                    name="formServices"
                    defaultValue="06eadc4982f1076fd07b2d553d5e56b6"
                  />
                </form>
              </div>

              {/* Opdracht 10 */}
              <div className="u-container-style u-custom-color-3 u-group u-group-8">
                <div className="u-container-layout u-container-layout-8">
                  <h3 className="u-text u-text-default u-text-21">
                    Opdracht 10
                  </h3>
                  <p className="u-large-text u-text u-text-default u-text-variant u-text-22">
                    Vandaag ga ik met mijn vriendin naar het museum. Een kaartje
                    kost vijftig. Ik betaal voor het kaartje. Hoeveel gaat mij
                    dit kosten?
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      startListening(5);
                    }}
                  >
                    Start S.T.T.
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => stopListening()}
                  >
                    Stop S.T.T.
                  </button>
                </div>
              </div>
              <h5 className="u-text u-text-23">
                Vertaal de tekst hier links naar het Portugees en voer de
                vertaalde tekst hieronder in. Klik vervolgens op 'indienen'.
              </h5>
              <div className="u-form u-form-8">
                <form
                  action="https://forms.nicepagesrv.com/Form/Process"
                  className="u-clearfix u-form-horizontal u-form-spacing-15 u-inner-form"
                  style={{ padding: "15px" }}
                  source="email"
                >
                  <div className="u-form-group u-form-message u-label-none">
                    <label htmlFor="name-558c" className="u-label">
                      Name
                    </label>
                    <textarea
                      placeholder="Vul hier je antwoord in!"
                      id="name-558c"
                      name="opdracht10.v2"
                      className="u-custom-color-3 u-input u-input-rectangle u-input-8"
                      required="required"
                      defaultValue={""}
                      value={question5stt}
                    />
                  </div>
                  <div className="u-form-group u-form-submit u-label-none">
                    <a
                      href="#"
                      className="u-border-none u-btn u-btn-submit u-button-style u-custom-color-4 u-hover-palette-1-dark-1 u-btn-8"
                    >
                      Indienen
                      <br />
                    </a>
                    <input
                      type="submit"
                      defaultValue="submit"
                      className="u-form-control-hidden"
                    />
                  </div>
                  <div className="u-form-send-message u-form-send-success">
                    Dankjewel! Je antwoord is verstuurd.
                  </div>
                  <div className="u-form-send-error u-form-send-message">
                    Unable to send your message. Please fix errors then try
                    again.
                  </div>
                  <input type="hidden" defaultValue name="recaptchaResponse" />
                  <input
                    type="hidden"
                    name="formServices"
                    defaultValue="06eadc4982f1076fd07b2d553d5e56b6"
                  />
                </form>
              </div>
            </div>
          </section>
          <br></br>
          <br></br>
          <br></br> <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <section className="u-clearfix u-section-3" id="sec-8f35">
            <div className="u-clearfix u-sheet u-sheet-1">
              <button
                className="btn btn-primary"
                onClick={() => setpageState(0)}
              >
                Home
              </button>
            </div>
          </section>
          <span
            style={{
              height: "64px",
              width: "64px",
              marginLeft: "0px",
              marginRight: "auto",
              marginTop: "0px",
              backgroundImage: "none",
              right: "20px",
              bottom: "20px",
              padding: "15px",
            }}
            className="u-back-to-top u-icon u-icon-circle u-opacity u-opacity-85 u-palette-1-base"
            data-href="#"
          >
            <svg
              className="u-svg-link"
              preserveAspectRatio="xMidYMin slice"
              viewBox="0 0 551.13 551.13"
            >
              <use
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xlinkHref="#svg-1d98"
              />
            </svg>
            <svg
              className="u-svg-content"
              enableBackground="new 0 0 551.13 551.13"
              viewBox="0 0 551.13 551.13"
              xmlns="http://www.w3.org/2000/svg"
              id="svg-1d98"
            >
              <path d="m275.565 189.451 223.897 223.897h51.668l-275.565-275.565-275.565 275.565h51.668z" />
            </svg>
          </span>
        </div>
      </>
    </div>
  );
}

export default App;
