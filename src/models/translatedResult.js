export class TranslatedResult {
    original;
    languages;
    question;

    constructor(original, languages, question) {
        this.original = original;
        this.languages = languages;
        this.question = question;
    }
}
