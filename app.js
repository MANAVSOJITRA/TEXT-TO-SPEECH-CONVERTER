let textarea = document.querySelector("textarea");
let button = document.querySelector("button");
let speak = true;

const texttospeech = () => {
  let text = textarea.value;
  const synth = window.speechSynthesis;
  if (!synth.speaking && text) {
    const utternace = new SpeechSynthesisUtterance(text);
    synth.speak(utternace);
  }
  if (text.length > 30) {
    if (synth.speaking && speak) {
      button.innerText = "PAUSE";
      synth.resume();
      speak = false;
    } else {
      button.innerText = "RESUME";
      speak = true;
      synth.pause();
    }
  } else if (text.length > 0) {
    button.innerText = "SPEAKING";
    speak = false;
  }
  setInterval(() => {
    if (!synth.speaking && !speak) {
      button.innerText = "CONVERTE TO SPEECH";
      speak = true;
    }
  });
};
button.addEventListener("click", texttospeech);