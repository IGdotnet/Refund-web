//npm i clsx
//npm i tailwind-merge

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

//Possível passar uma lista de classes
export function classMerge(...inputs: ClassValue[]) {
    //clsx pega os inputs como um array, unifica tudo, devolve para o twMerge, que organiza essas classes
    return twMerge(clsx(inputs))
}