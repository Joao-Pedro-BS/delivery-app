// importação de componentes padrões
import { Image, View, Text, TouchableOpacity } from "react-native";
// icones
import { Feather } from '@expo/vector-icons';
// cores
import  colors from 'tailwindcss/colors'
// Tipagem
type HeaderProps={
    title: string;
    carQuantityItens?: number;
}

// componente Header, é o nosso cabeçalho
export function Header({title, carQuantityItens=0}: HeaderProps){
    return(
        <View className="flex-row items-center border-b border-slate-50 pb-2 mx-5">
            <View className="flex-1">
                <Image source={require('@/assets/logo.png')} className="h-6 w-32" />
                <Text className="text-white  text-2xl font-bold  pt-2" >{title}</Text>
            </View>

            {carQuantityItens > 0 && (
                <TouchableOpacity className="relative">
                    <View className="bg-lime-200 w-7 h-12 rounded-full items-center justify-end p-1">
                        <Text>{carQuantityItens}</Text>
                        <Feather name="shopping-bag" color={colors.black} size={20} />  
                    </View>
                </TouchableOpacity>
            )}
        </View>
    )
}