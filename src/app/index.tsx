// importação de componentes padrões
import {View, Text} from "react-native"
// importação de fontes
import {Roboto_400Regular, Roboto_500Medium, Roboto_700Bold} from "@expo-google-fonts/roboto" 

// função da Home Page
export default function Home(){
    // toda função retorna a visualização dos componentes
    return(
        <View className="pt-5 pl-5">
            <Text className='text-white text-2xl'>João Pedro</Text>
        </View>
        
    )
}