import dict from '../data/dictionary.js';


/**
 * Takes in text and converts from Morse Code to English.
 * @param {'string'} text is expected to valid checked prior to input.
 * @returns a string of Morse Code converted from input.
 */
export const morseToEng = (text) => {
  // Split into words
  const wordsM = text.trim().split("/");

  // Split into letters
  const lettersM = wordsM.map((word) => word.split(" "));
 
  // Lookup each morse character
  const translated = lettersM.map(w => 
    w.map(letter => 
     Object.keys(dict).find(key => dict[key] === letter)
    ));

  // Return translated result each character with out a space, and join words with a space
  return translated.map(word => word.join("")).join(" ");
  };


/**
 * Takes in text and converts fromEnglish to Morse Code.
 * @param {String} text is expected to valid checked prior to input.
 * @returns a string in English converted from input.
 */
export const engToMorse = (text) => {
    // Split into words
    const wordsE = text.trim().toUpperCase().split("");
    
    // Match letters to Morse Code equiv
    const translated = wordsE.map(item => {
      return dict[item] ? dict[item] : '/';
    }).join(" ");

    return translated;
};


/**
 * Function to check valid input and call appropriate functions based on input type.
 * @param {String} text text input by user.
 * @param {*} output location translated text will output to.
 * @param {*} regex RegEx to check Morse Code.
 */
export const translate = (text, output, regex) => {
  if (typeof(text) !== 'string') {
    output.value = "Incorrect input. Please input a string";
    throw new Error('invalid inputs')
  } 

  if (text.match(regex)) {
    output.value = morseToEng(text);
  } else {
    output.value = engToMorse(text);
  };
};
