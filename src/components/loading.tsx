// / View -> funciona como uma <div> /
// ActivityIndicator -> geralmente usado para indicar que algo está sendo carregado ou processado 
import { View, ActivityIndicator} from "react-native";
// importação de cores do tailwind
import colors from "tailwindcss/colors"

// componente para caso a Home não carregue
// Resumindo, este componente Loading é usado para renderizar um indicador de atividade em uma tela de carregamento
export function Loading(){
    return(
        <View className="bg-slate-900 items-center justify-center flex-1">
            {/* Estamos definindo a cor do indicador de atividade como branco */}
            <ActivityIndicator color={colors.white}/>
        </View>
    )
} 