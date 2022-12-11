import "./App.css";
import { useState } from "react";
import { Translator } from "./services/translator";
import { LanguageProvider } from "./providers/languageProvider";
import { TextToSpeechService } from "./services/textToSpeechService";
import Header from "./components/Header";
import Body from "./components/Body";

function App() {
  const key = "52e7688fe389462cb78bc868b79af366";
  const region = "westeurope";

  const processResults = (translatedResult) => {
    console.log(translatedResult.original);
    setResultText(translatedResult.original);
  };

  const [resultText, setResultText] = useState("");
  const [translator] = useState(new Translator(processResults));
  const [languageProvider] = useState(new LanguageProvider());
  const [textToSpeechService] = useState(new TextToSpeechService());
  const [inputValue, setInputValue] = useState("");

  const startListening = () => {
    translator.start({
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

  return (
    <div className="App">
      <h1>Hello world</h1>

      <div className="d-inline">
        <button className="btn btn-primary" onClick={startListening}>
          Start Speech to Text
        </button>

        <button className="btn btn-danger" onClick={stopListening}>
          Stop Speech to Text
        </button>
      </div>

      <div>{resultText}</div>

      <div className="mt-5">
        <button
          className="btn btn-primary"
          onClick={() => startTextToSpeech(resultText)}
        >
          Start Text to Speech
        </button>
      </div>

      <div className="mt-5">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <button
          className="btn btn-primary"
          onClick={() => startTextToSpeech(inputValue)}
        >
          Start inputfield tts
        </button>
      </div>
      <Header />
      <Body />
    </div>
  );
}

export default App;
