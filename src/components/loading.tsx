import { View, ActivityIndicator} from "react-native";
// importação de cores do tailwind
import colors from "tailwindcss/colors"

// componente para caso a Home não carregue
export function Loading(){
    return(
        <View className="bg-slate-900 items-center justify-center flex-1">
            <ActivityIndicator color={colors.white}/>
        </View>
    )
} 