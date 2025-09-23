import { auth } from "@/lib/firebase";
import { Link, router } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { ImageBackground } from "react-native";
import { StyleSheet } from "react-native";


export default function Login() {

    const [email,setEmail] = useState("")
    const [senha,setSenha] = useState("")

    async function Logar () {
      if (!email) {
            alert("Insira seu email! Por favor.");
            return
        }
        try {
            await signInWithEmailAndPassword (auth,email,senha)
        router.replace("/menu")
    } catch (error) {
        window.alert(error)
    }
}
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
        
        <Text className="text-2xl font-bold text-white">ENTRE NA SUA CONTA!</Text>
        <Link
          href="/register"
          className="text-white font-bold  text-center mt-3"
        >
          Não tem conta? CADASTRE-SE AQUI!
        </Link>

        
        <TextInput
          className="w-72 p-3 border  text-white mt-8"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}

        />
        
        <TextInput
          className="w-72 p-3 border text-white mt-8"
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />

       

        <TouchableOpacity
          className="px-6 py-3 rounded-full shadow-md mt-12 bg-white"
          onPress={Logar}
        >
          <Text className="text-black font-bold ">Logar</Text>
        </TouchableOpacity>

        <Link
          href="/ForgotPass"
          className="text-white font-bold mt-8 text-center"
        >
          Esqueceu sua senha? Clique aqui
        </Link>

        
      
      </View>
    </ImageBackground>
  );
}
