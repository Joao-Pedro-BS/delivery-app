// SafeAreaView é uma View que se comporta de maneira dinâmica em relação ao sistema operacional
// especialmente em dispositivos com "notch" ou "barra de status"
import { SafeAreaView} from "react-native";
// Slot vai carregar todo o conteúdo do meu arquivo index.tsx
import { Slot } from "expo-router";
// Fontes que serão utilizdas
import {useFonts,Roboto_400Regular, Roboto_500Medium, Roboto_700Bold_Italic,Roboto_700Bold} from "@expo-google-fonts/roboto";
// componente Loading
import { Loading } from "@/components/loading";

// Nosso layout
export default function Layout(){
    // atribuindo uma função para carregar as fontes
    const [fontsLoaded] = useFonts({
        Roboto_400Regular, 
        Roboto_500Medium, 
        Roboto_700Bold_Italic,
        Roboto_700Bold
    })
    // aviso se as fontes não carregarem
    if(!fontsLoaded){
        return <Loading/>
    }
    // retorna o index dentro de uma safeareaview
    return(
        <SafeAreaView className="bg-slate-900 flex-1">
            <Slot/>
        </SafeAreaView>
    )
}