// importação de componentes padrões
import {View, Text} from "react-native"
// componente Header
import { Header } from "@/components/header"

import { CategoryBtn } from "@/components/category-btn"

// função da Home Page
export default function Home(){
    // toda função retorna a visualização dos componentes
    return(
        <View className="pt-5 pl-5">
            <Header title="Cardápio" carQuantityItens={12}/>
            
            <View className="flex-row gap-2 mt-0">
                <CategoryBtn title="Oferta do Dia"/>
                <CategoryBtn title="Entrega Grátis" isSelected/>
                <CategoryBtn title="Perto de você"/>
            </View>
       
        </View>
        
    )
}