import { useContext } from 'react';
import { LanguageContext } from '../App';
import translations from '../translations';

export function useTranslations() {
  const { language } = useContext(LanguageContext);
  
  /**
   * Translates a key path into the current language
   * @param {string} keyPath - The dot-notated path to the translation (e.g., 'common.learnMore')
   * @returns {string} The translated text
   */
  const t = (keyPath) => {
    // Split the key path by dots
    const keys = keyPath.split('.');
    
    // Get the translation for the current language
    let result = translations[language];
    
    // Traverse the keys to get the nested translation
    for (const key of keys) {
      if (result && result[key] !== undefined) {
        result = result[key];
      } else {
        // If translation not found in current language, try English as fallback
        if (language !== 'en') {
          let fallback = translations['en'];
          for (const fallbackKey of keys) {
            if (fallback && fallback[fallbackKey] !== undefined) {
              fallback = fallback[fallbackKey];
            } else {
              console.warn(`Translation key not found: ${keyPath}`);
              return keyPath; // Return the key path as a last resort
            }
          }
          return fallback;
        }
        
        console.warn(`Translation key not found: ${keyPath}`);
        return keyPath; // Return the key path as a last resort
      }
    }
    
    return result;
  };
  
  return { t, language };
}
