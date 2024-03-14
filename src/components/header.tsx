// Image -> componente para exibir imagens / View -> funciona como uma <div> /
// Text -> componente para exibir texto / TouchableOpacity -> semelhante a um botão
import { Image, View, Text, TouchableOpacity } from "react-native";
// Feather -> pacote de icones do Expo
import { Feather } from '@expo/vector-icons';
// colors -> pacote de cores do Tailwind
import colors from 'tailwindcss/colors';

// definindo um novo tipo chamado "HeaderProps"
//  dentro das chaves estão os membros do tipo
type HeaderProps={
    // ao usar você deve passar um valor para "title", e deve ser do tipo string
    title: string;
    // membro opcional, você escolher se passa um valor ou não
    carQuantityItens?: number;
}

// Esta linha define a função Header e a exporta para que possa ser utilizada em outros arquivos.
// A função recebe um objeto de propriedades (props) com duas propriedades
// O : HeaderProps especifica que o objeto de props deve seguir o formato do tipo HeaderProps.
export function Header({title, carQuantityItens=0}: HeaderProps){
    return(
        // conteiner principal
        <View className="flex-row items-center border-b border-slate-50 pb-2 mx-5">
            {/* conteiner que armazena a LOGO e o Titulo */}
            <View className="flex-1">
                {/* <Image source={require('@/assets/logo.png')} className="h-6 w-32" /> */}
                <Text className="text-white  text-2xl font-bold  pt-2" >{title}</Text>
            </View>

            {/* Condicao para o botao aparecer - se a sacola tiver 1 item ou mais */}
            {carQuantityItens > 0 && (
                // botao da 'sacola de itens'
                <TouchableOpacity className="relative">
                    <View className="bg-lime-200 w-7 h-12 rounded-full items-center justify-end p-1">
                        {/* quantidade de itens na sacola */}
                        <Text>{carQuantityItens}</Text>
                        {/* icone da 'sacola de itens' */}
                        <Feather name="shopping-bag" color={colors.black} size={20} />  
                    </View>
                </TouchableOpacity> 
            )}
        </View>
    )
}