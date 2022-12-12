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