import { SpeechSynthesizer, ResultReason, SpeechConfig, AudioConfig } from "microsoft-cognitiveservices-speech-sdk";

export class TextToSpeechService {
    start(options, text) {
        // This example requires environment variables named "SPEECH_KEY" and "SPEECH_REGION"
        const speechConfig = SpeechConfig.fromSubscription(options.key, options.region);
        const audioConfig = AudioConfig.fromSpeakerOutput();

        // The language of the voice that speaks.
        speechConfig.speechSynthesisVoiceName = "en-US-JennyNeural";

        // Create the speech synthesizer.
        let synthesizer = new SpeechSynthesizer(speechConfig, audioConfig);

        // Start the synthesizer and wait for a result.
        synthesizer.speakTextAsync(
            text,
            function (result) {
                if (result.reason === ResultReason.SynthesizingAudioCompleted) {
                    console.log("synthesis finished.");
                } else {
                    console.error(
                        "Speech synthesis canceled, " +
                            result.errorDetails +
                            "\nDid you set the speech resource key and region values?"
                    );
                }
                synthesizer.close();
                synthesizer = null;
            },
            function (err) {
                console.trace("err - " + err);
                synthesizer.close();
                synthesizer = null;
            }
        );
    }
}
