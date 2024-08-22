"use client";

import { useEffect } from "react";

const GoogleTranslate: React.FC = () => {
  useEffect(() => {
    const googleTranslateScript = document.createElement("script");
    googleTranslateScript.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(googleTranslateScript);

    if (typeof window !== "undefined") {
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          { pageLanguage: "en" },
          "google_translate_element"
        );
      };
    }
  }, []);

  return <div id="google_translate_element" className="mt-4"></div>;
};

export default GoogleTranslate;
