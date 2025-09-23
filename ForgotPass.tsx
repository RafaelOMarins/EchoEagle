import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { Text } from "react-native";
import { View } from "react-native";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { ImageBackground } from "react-native";
import { StyleSheet } from "react-native";
import { Image } from "react-native";
export default function ForgotPass () {
    const [email, setEmail] = useState("");

    const handlePasswordReset = async () => {
        if (!email) {
            alert("Insira seu email! Por favor.");
            return
        }

        try {
            await sendPasswordResetEmail(auth, email);
            alert("Enviamos um link para recuperação da senha, via este email!");
            router.replace("/")
        } catch (error) {
            console.error(error);
            alert("Falha ao enviar email. Por favor verifique se o email inserido está correto!")
        }
    };

    return (
        <ImageBackground
              source={require("../assets/images/ÁguiaCareca02.jpg")}
              className="flex-1 items-center justify-center"
              resizeMode="center"
            >

            <View style={{
            ...StyleSheet.absoluteFillObject, 
            backgroundColor: "rgba(0,0,0,0.7)",
            }} />


        <View className="flex-1 justify-center items-center ">

            <Image 
                    source={require("../assets/images/EchoEagle-removebg-preview.png")}
                    resizeMode="cover"
                    style = {{ width: 200, height: 200}}
                    />

            <Text className="text-white text-2xl">RECUPERE SUA SENHA!</Text>

            <TextInput 
            className="w-72 p-3 border  text-black mt-8"
            placeholder="Digite seu email"
            placeholderTextColor="#ccc"
            value={email}
            onChangeText={setEmail} 
        />

            <TouchableOpacity
            className="px-6 py-3 rounded-full shadow-md mt-12 bg-white"
            onPress={handlePasswordReset}>

             <Text className="text-black">Enviar link</Text>
               </TouchableOpacity>
            

            
        </View>
        </ImageBackground>
    )
}

