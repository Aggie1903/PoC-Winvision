import { TranslatedResult } from "../models/translatedResult";
import { Translations } from "../models/translations";
import { AudioConfig, SpeechTranslationConfig, TranslationRecognizer, ResultReason } from 'microsoft-cognitiveservices-speech-sdk'

export class Translator {
    recognizer;
    callback;

    constructor(callback) {
        this.callback = callback;
    }

    start(options) {
        if (this.recognizer) {
            return;
        }

        const audioConfig = AudioConfig.fromDefaultMicrophoneInput();
        const speechConfig = SpeechTranslationConfig.fromSubscription(options.key, options.region);

        speechConfig.speechRecognitionLanguage = options.fromLanguage;

        for (const lang of options.toLanguages) {
            speechConfig.addTargetLanguage(lang);
        }

        this.recognizer = new TranslationRecognizer(speechConfig, audioConfig);

        this.recognizer.recognizing = (s, e) => {
            const result = e.result;
            const reason = ResultReason[result.reason];
            if (reason !== "TranslatingSpeech" && reason !== "TranslatedSpeech") {
                return;
            }

            const captions = new Translations(result.offset);

            captions.languages[this.getLanguageCode(options.fromLanguage)] = result.text;
            for (const lang of options.toLanguages) {
                const langCode = this.getLanguageCode(lang);
                const caption = result.translations.get(langCode);
                captions.languages[langCode] = caption;
            }

            this.callback(new TranslatedResult(result.text, captions));
        };

        this.recognizer.startContinuousRecognitionAsync();
    }

    stop() {
        if (!this.recognizer) {
            return;
        }

        this.recognizer.stopContinuousRecognitionAsync();
        this.recognizer = undefined;
    }

    getLanguageCode(lang) {
        return lang.substring(0, 2);
    }
}
