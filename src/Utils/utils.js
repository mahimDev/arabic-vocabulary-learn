const pronounceWord = (word) => {
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = "ar-EG"; // Arabic language
  window.speechSynthesis.speak(utterance);
  console.log("Speech");
};

export default pronounceWord;
