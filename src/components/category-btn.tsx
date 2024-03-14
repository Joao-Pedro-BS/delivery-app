// Text -> componente para exibir texto / Pressable -> é usado para criar elementos clicaveis
// PresableProps -> é um tipo de propriedades associadas a Pressable.
import { Text, Pressable, PressableProps } from "react-native";
// Essa função é usada para combinar classes de estilo condicionalmente.
import { clsx } from "clsx";

// Aqui, estamos definindo um novo tipo chamado CategoryProps, que estende PressableProps
// Isso significa que CategoryProps pode aceitar todas as propriedades de PressableProps
type CategoryProps= PressableProps & {
// propriedade que representa um titulo
title: string;
// indica se a categoria está selecionada ou nao
isSelected?: boolean
}
// Aqui, estamos definindo a função CategoryBtn e exportando-a para ser utilizada em outros arquivos.
// Usando a sintaxe de desestruturação, estamos extraindo as propriedades title, isSelected, 
// e todas as outras propriedades restantes (...rest) que podem ser passadas para Pressable.
export function CategoryBtn({title, isSelected, ...rest }:CategoryProps){
    return(
        // botao de categoria
        //  Dependendo do valor de isSelected, adicionamos ou não as classes de estilo 
        // para definir uma borda ao redor do botão
        // espalha todas as outras propriedades que podem ter sido passadas para 
        // CategoryBtn para o componente Pressable.
        <Pressable className={clsx("bg-lime-100 px-4 justify-center rounded-md h-10", 
                            isSelected && "border-4 border-slate-500")} {...rest}>
            <Text className="text-slate-900 font-bold ">{title}</Text>
        </Pressable>
    )
}