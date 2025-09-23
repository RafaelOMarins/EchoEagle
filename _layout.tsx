import { Drawer } from "expo-router/drawer";
import "../../global.css";

export default function RootLayout() {
  return (
    <Drawer
  screenOptions={{
    headerShown: true,
    drawerActiveTintColor: "blue",
    drawerInactiveTintColor: "gray",
    sceneStyle: {backgroundColor: "#121212"}
  }}
>
  <Drawer.Screen
    name="index"
    options={{ title: "Menu" }}
  />

  <Drawer.Screen
    name="sound"
    options={{ title: "Sons" }}
  />

  <Drawer.Screen 
    name="talking"
    options={{ title: "Conversa" }}
  />

  <Drawer.Screen 
    name="config"
    options={{ title: "Configuração" }}
  />
</Drawer>

      
      
      

  );
}