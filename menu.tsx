import { router } from "expo-router";
import { FlatList, ImageBackground, SafeAreaView, ScrollView, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";


export default function Home () {
    const data = [
        {id:1,nome:'Escutar', descricao:'aqui o echoeagle te avisa caso ocorra algum som anormal',botao:'Visite',rota:'/sound', 
            imagem:require('../../assets/images/Escutando.jpg')},
        {id:2, nome:'Conversar', descricao:'aqui o echoeagle transcreve algo que outra pessoa falar',botao:'visite',rota:'/talking', 
            imagem:require('../../assets/images/CONVERSA.jpg')}
    ]

    return (
        <SafeAreaView>
            <View className="flex-1">
            <Text className="text-center text-2xl text-white">Bem vindo(a) ao {'\n'}EchoEagle </Text>

            <FlatList 
            data={data}
            keyExtractor={(item)=> item.id.toString()}
            contentContainerStyle={{ padding:18 }}
            renderItem={({ item })=> (

                <TouchableOpacity onPress={()=> router.push(item.rota)}>
                    <View
                    className=""
                    style={{
                    
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.2,
                    shadowRadius: 4,
                    elevation: 3,
                    }}
                    >

                <ImageBackground 
                source={item.imagem}
                resizeMode="cover"
                imageClassName="w-full h-40 justify-center"
                imageStyle = {{ borderRadius: 12}}
                className="h-40 p-4 justify-end rounded-xl relative overflow-hidden"
                
                />
                    
                    
                    
                    <View 
                        className="absolute inset-0 rounded-xl"
                        style={{ backgroundColor: "rgba(47, 79, 79, 0.7)"}}
                    />

                    <Text className="text-xl font-Roboto-slab text-[#C8E6C9]">{item.nome}</Text>

                    <Text className="text-sm font-semibold mb-2 text-[rgba(255,255,255,0.9)]">{item.descricao}</Text>
                    
                   
                    </View>
                    </TouchableOpacity>

            )}

            ItemSeparatorComponent={() => <View className="h-16" />}
            />
        </View>
        </SafeAreaView>
        
    )
}