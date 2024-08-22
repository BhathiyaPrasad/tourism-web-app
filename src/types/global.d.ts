interface GoogleTranslate {
    TranslateElement: new (
      options: { pageLanguage: string },
      elementId: string
    ) => any;
  }
  
  interface Window {
    google: {
      translate: GoogleTranslate;
    };
    googleTranslateElementInit?: () => void;
  }
  