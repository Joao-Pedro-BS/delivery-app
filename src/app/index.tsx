// função usada para a mudança de estados de um componente
import { useState } from "react"
// View -> funciona como uma <div> / FlatList -> renderiza listas 
import {View, FlatList} from "react-native"
// componente Header -> cabeçalho da nossa página
import { Header } from "@/components/header"
// variável que armazena os tipos de lanche
import { CATEGORIES } from "@/utils/data/products"
// 
import { CategoryBtn } from "@/components/category-btn"




// função da Home Page
export default function Home(){
    const [category, setCategory] = useState(CATEGORIES[0])

    function handleCategorySelected(selectedCategory:string){
        console.log(category)
        setCategory(selectedCategory)
    }
    // toda função retorna a visualização dos componentes
    return(
        <View className="pt-5 pl-5">
            <Header title="Cardápio" carQuantityItens={1}/>
            
            <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item}
            renderItem={({item}) => 
            <CategoryBtn 
            title={item} 
            isSelected={item === category} 
            onPress={() => handleCategorySelected(item)}/>}
            horizontal
            className="mt-5"
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{gap: 12, paddingHorizontal: 20}}
            />
       
        </View>
        
    )
}