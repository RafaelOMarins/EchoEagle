import { useEffect, useState } from "react";
import * as Speech from 'expo-speech';
import Voice from '@react-native-community/voice';
import { Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native";


export default function Talk () {
     const [transcribedText, setTranscribedText] = useState('');
     const [typedtext, setTypedText] = useState('')

     useEffect(() => {
      Voice.onSpeechResults = (e: any) => {
        setTranscribedText(e.value(0))
      };

      return () => {
        Voice.destroy().then(Voice.removeAllListeners);
      };
     }, []);

     const startListening = async () => {
      setTranscribedText("");
      try {
        await Voice.start('pt-br');
      } catch (e) {
        console.log(e)
      }
     }

     const speakResponse = (textToSpeak: any) => {
      Speech.speak(textToSpeak, {
        language: 'pt-br',
        rate: 1.0,
      })
     }
     
  
   return (
    <View className="flex-1 p-4">
      <View className="flex-grow justify-center p-4 rounded-lg bg-gray-100">
        <Text className="text-xl text-gray-800">{transcribedText}</Text>
      </View>

      <View className="mt-4">
        <TextInput
          className="border text-white border-gray-300 rounded-lg p-3 text-lg"
          placeholder="Digite sua resposta aqui..."
          value={typedtext}
          onChangeText={setTypedText}
        />
      </View>

     
      <View className="flex-row justify-around mt-4">
        <TouchableOpacity
          className="bg-green-500 py-3 px-6 rounded-full"
          onPress={() => {startListening}}
        >
          <Text className="text-white font-bold text-lg">Falar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-blue-500 py-3 px-6 rounded-full"
          onPress={speakResponse}
        >
          <Text className="text-white font-bold text-lg">Ouvir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
