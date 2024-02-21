import { Text, Pressable, PressableProps } from "react-native";
import { clsx } from "clsx";

type CategoryProps= PressableProps & {
title: string;
isSelected?: boolean
}

export function CategoryBtn({title, isSelected, ...rest }:CategoryProps){
    return(
        <Pressable className={clsx("bg-lime-100 px-4 justify-center rounded-md h-10", isSelected && "border-4 border-slate-500")} {...rest}>
            <Text className="text-slate-900 font-bold ">{title}</Text>
        </Pressable>
    )
}