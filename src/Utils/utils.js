const pronounceWord = (word) => {
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = "ar-SA"; // Arabic language
  window.speechSynthesis.speak(utterance);
};

const synth = window.speechSynthesis;
const speechHandler = (resultText) => {
  const utterThis = new SpeechSynthesisUtterance(resultText);
  utterThis.lang = "en-US";
  synth.speak(utterThis);
};

export { pronounceWord, speechHandler };

// utterThis.lang = 'ar-AE';
// utterThis.lang = 'ar-SA';
// utterThis.lang = 'ar';
