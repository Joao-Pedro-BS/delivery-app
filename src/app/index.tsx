// importação de componentes padrões
import {View, Text} from "react-native"
// componente Header
import { Header } from "@/components/header"

// função da Home Page
export default function Home(){
    // toda função retorna a visualização dos componentes
    return(
        <View className="pt-5 pl-5">
            <Header title="Cardápio" carQuantityItens={12}/>
        </View>
        
    )
}