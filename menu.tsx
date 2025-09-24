import { router } from "expo-router";
import { FlatList, ImageBackground, SafeAreaView, ScrollView, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";


export default function Home () {
    const data = [
        {id:1,nome:'Escutar', descricao:'Aqui o echoeagle te avisa caso ocorra algum som anormal',botao:'Visite',rota:'/sound', 
            imagem:require('../../assets/images/empresarios-no-intervalo-do-escritorio_23-2148825904.jpg')},
        {id:2, nome:'Conversar', descricao:'Aqui o echoeagle transcreve algo que outra pessoa falar',botao:'visite',rota:'/talking', 
            imagem:require('../../assets/images/amigos-latinos-a-sair_23-2151139417.jpg')}
    ]

    return (
        <ScrollView>
        <SafeAreaView className="flex-1 ">
            <View>
                
            <Text className="mt-3 text-2xl text-white text-center">Bem vindo(a) ao {'\n'}<Text className="font-bold">EchoEagle</Text> </Text>
                
        
            <FlatList 
            data={data}
            keyExtractor={(item)=> item.id.toString()}
            contentContainerStyle={{ padding: 18 }}
            renderItem={({ item })=> (

                <TouchableOpacity onPress={()=> router.push(item.rota)}>
                    <View
                    className="mb-5 rounded-xl shadow-md"
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
                imageClassName="w-full h-40 justify-center"
                imageStyle = {{ borderRadius: 12}}
                className="h-40 p-4 justify-end rounded-xl relative overflow-hidden"
                resizeMode="center"
                
                />
                    
                    
                    
                    <View 
                        className="absolute inset-0 rounded-xl"
                        style={{ backgroundColor: "rgba(47, 79, 79, 0.7)"}}
                    />

                    <View className="p-4">
                    <Text className=" text-xl font-Roboto-slab text-[#C8E6C9]">{item.nome}</Text>

                    <Text className=" text-sm font-semibold text-[rgba(255,255,255,0.9)]">{item.descricao}</Text>
                    </View>
                    </View>
                   
                    
                    </TouchableOpacity>

            )}

            ItemSeparatorComponent={() => <View className="" />}
            />
            
        </View>
        <View className="items-center justify-end bg-white mt-10">
                <Text className="text-black">© 2025 ECHOEAGLE</Text>
            </View>
        </SafeAreaView>
        </ScrollView>
        
        
    )
}
