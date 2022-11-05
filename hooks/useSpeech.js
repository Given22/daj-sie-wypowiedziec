import * as Speech from "expo-speech"

export default function useSpeech(text){
  Speech.isSpeakingAsync().then((isSpeaking) => {
    if (!isSpeaking) {
      Speech.speak(text)
    }
  })
}