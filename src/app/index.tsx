// função usada para a mudança de estados de um componente
import { useState } from "react"
// View -> funciona como uma <div> / FlatList -> renderiza listas 
import {View, FlatList} from "react-native"
// componente Header -> cabeçalho da nossa página
import { Header } from "@/components/header"
// variável que armazena os tipos de lanche
import { CATEGORIES } from "@/utils/data/products"
// representa os botões de categoria na tela
import { CategoryBtn } from "@/components/category-btn"


// função da Home Page
export default function Home(){
    // estamos utilizando o hook useState para criar um estado chamado category e uma função setCategory
    // para atualizar esse estado. Inicializamos category com o primeiro item de CATEGORIES
    const [category, setCategory] = useState(CATEGORIES[0])
    // recebe uma categoria selecionada como argumento
    function handleCategorySelected(selectedCategory:string){
        // registrando no console a categoria atual
        console.log(category)
        // atualizando o estado category com a categoria selecionada
        setCategory(selectedCategory)
    }
    // toda função retorna a visualização dos componentes
    return(
        // container principal
        <View className="pt-5 pl-5">
            {/* componente heaader */}
            <Header title="Cardápio" carQuantityItens={1}/>
            {/* renderiza os botões de categoria horizontalmente. */}
            <FlatList
            // sao as categorias
            data={CATEGORIES}
            // extrair uma chave única de cada item na lista. 
            // Esta chave é importante para o React Native renderizar eficientemente a lista, 
            // identificando cada item de forma única.
            keyExtractor={(item) => item}
            // renderizar cada item da lista como um CategoryBtn
            renderItem={({item}) => 
            <CategoryBtn 
            // recebe o título do item atual na lista
            title={item} 
            // Se o item atual for igual à categoria selecionada, ele está selecionado.
            isSelected={item === category} 
            // chama a função e passa o item como argumento quando o botão é pressionado.
            onPress={() => handleCategorySelected(item)}/>}
            // define a orientação da lista como horizontal
            horizontal
            // estilo do componente
            className="mt-5"
            // a barra de rolagem horizontal não será exibida
            showsHorizontalScrollIndicator={false}
            // Estamos definindo o estilo do contêiner de conteúdo da FlatList
            contentContainerStyle={{gap: 12, paddingHorizontal: 20}}
            />
       
        </View>
        
    )
}