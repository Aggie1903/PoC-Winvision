export class Language {
  code;
  name;
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }
}

export class Languages {
  languages;
  constructor(languages) {
    this.languages = languages;
  }

  get LanguageCodes() {
    return this.languages.map((l) => l.code);
  }

  get LanguageCodesShort() {
    return this.languages.map((l) => l.code.substring(0, 2));
  }
}

export class LanguageProvider {
  currentFromLanguageBF = "";
  currentToLanguageBF = "";

  get currentToLanguage() {
    if (!this.currentToLanguageBF) {
      this.currentToLanguageBF = "nl-NL";
    }
    return this.currentToLanguageBF;
  }

  set currentToLanguage(value) {
    this.currentToLanguageBF = value;
  }

  get currentToLanguageShort() {
    return this.currentToLanguage.substring(0, 2);
  }

  get currentFromLanguage() {
    if (!this.currentFromLanguageBF) {
      this.currentFromLanguageBF = "nl-NL";
    }
    return this.currentFromLanguageBF;
  }

  set currentFromLanguage(value) {
    this.currentFromLanguageBF = value;
  }

  get toLanguages() {
    return new Languages([
      new Language("nl-NL", "Netherlands"),
      new Language("fr-FR", "France"),
      new Language("es-ES", "Spanish"),
      new Language("ja-JP", "Japanese"),
      new Language("tr-TR", "Turkish"),
    ]);
  }

  get fromLanguages() {
    return new Languages([
      new Language("nl-NL", "Netherlands"),
      new Language("fr-FR", "France"),
      new Language("es-ES", "Spanish"),
      new Language("ja-JP", "Japanese"),
      new Language("tr-TR", "Turkish"),
    ]);
  }
}
