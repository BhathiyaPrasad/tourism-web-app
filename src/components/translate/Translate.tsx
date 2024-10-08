// components/TranslationWidget.tsx

import React, { useEffect } from 'react';
import Script from 'next/script';
import Styles from './Translate.module.css';


const TranslationWidget: React.FC = () => {
  useEffect(() => {
    const gtranslateSettings: Record<string, any> = window.gtranslateSettings || {};
    gtranslateSettings["43217984"] = {
      default_language: "en",
      languages: [
        "si", "af", "sq", "am", "en", "fa", "ar", "ps", "ja", "zh-TW", "zh-CN", "ceb", "ny",
        "hy", "az", "eu", "be", "bn", "bs", "bg", "ca", "ceb", "ny", "co", "hr", "cs", "da",
        "nl", "eo", "et", "tl", "fi", "fr", "fy", "gl", "ka", "de", "el", "gu", "ht", "ha",
        "haw", "iw", "hi", "hmn", "hu", "is", "ig", "id", "ga", "it", "jw", "kn", "kk", "km",
        "ko", "ku", "ky", "lo", "la", "lv", "lt", "lb", "mk", "mg", "ms", "ml", "mt", "mi",
        "mr", "mn", "my", "ne", "no", "pl", "pt", "pa", "ro", "ru", "sm", "gd", "sr", "st",
        "sn", "sd", "si", "sk", "sl", "so", "es", "su", "sw", "sv", "tg", "ta", "te", "th",
        "tr", "uk", "ur", "uz", "vi", "cy", "xh", "yi", "yo", "zu",
      ],
      wrapper_selector: "#gt-mordadam-43217984",
      native_language_names: 1,
      flag_style: "2d",
      flag_size: 24,
      horizontal_position: "inline",
      flags_location: "flags/",
    };

    window.gtranslateSettings = gtranslateSettings;
  }, []);

  return (
    <div id="gt-mordadam-43217984" className={Styles.translate}>
      <Script
        src="/js/gt.min.js" // Make sure this path is correct and the file is available in the public directory
        strategy="afterInteractive"
        onLoad={() => {
          // You can also add additional actions once the script is loaded here if needed
        }}
        data-gt-widget-id="43217984"
      />
    </div>
  );
};

export default TranslationWidget;
