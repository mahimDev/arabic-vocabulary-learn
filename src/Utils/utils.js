// const pronounceWord = (word) => {
//   const utterance = new SpeechSynthesisUtterance(word);
//   utterance.lang = "ar"; // arabic
//   window.speechSynthesis.speak(utterance);
// };

const pronounceWord = (word) => {
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = "ar-EG"; // Arabic language
  window.speechSynthesis.speak(utterance);
};

// function pronounceWord(word) {
//   const utterance = new SpeechSynthesisUtterance(word);
//   utterance.lang = "ar-EG"; // Japanese
//   window.speechSynthesis.speak(utterance);
// }
export default pronounceWord;
