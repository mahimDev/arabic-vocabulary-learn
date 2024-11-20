const pronounceWord = (word) => {
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = "ar-AE"; // Arabic language
  window.speechSynthesis.speak(utterance);
  console.log("Speech");
};

// function pronounceWord(word) {
//   const utterance = new SpeechSynthesisUtterance(word);
//   utterance.lang = "ja-JP"; // Japanese
//   window.speechSynthesis.speak(utterance);
// }

const synth = window.speechSynthesis;
const speechHandler = (resultText) => {
  const utterThis = new SpeechSynthesisUtterance(resultText);
  utterThis.lang = "ar-AE";
  synth.speak(utterThis);
};

export default speechHandler;

// utterThis.lang = 'ar-AE';
