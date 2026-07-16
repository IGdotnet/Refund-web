//import { useState } from "react"
import { useActionState } from "react"
import { z, ZodError } from "zod"
import { Axios, AxiosError } from "axios"

import { api } from "../services/api"
import { useAuth } from "../hooks/useAuth"

import { Input } from "../components/Input"
import { Button } from "../components/Button"

const signInScheme = z.object({
    email: z.string().email({ message: "Email inválido "}),
    password: z.string().trim().min(1, { message: "Informe a senha"})
})

export function SignIn() {
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")

    //const [isLoading, setIsLoading] = useState(false)

    //No array temos o estado atual, a ação do formulário e se a requisição está pendente
    //No useActionState, o primeiro parâmetro é a função que precisa ser executada e o segundo, o conteúdo inicial do estado
    //O que retornamos dentro da Action fica dentro do state
    const [state, formAction, isLoading] = useActionState(onAction, null
        /*{email: "Igor@email.com", password: "123"}*/)

    const auth =  useAuth()


    //Recupera as informações de e-mail e senha digitados pelo usuário
    async function onAction(_: any, formData: FormData) {
        //o Action no lugar do onSubmit permite recuperar o conteúdo dos inputs sem precisar usar estados

        //Permite recuperar o conteúdo de um input pelo nome dele
        //console.log(formData.get("email"))

        //useActionState = permite acesso aos dados do formulário, ao seu estado anterior e se a solicitação está sendo feita ou não

        // await new Promise((resolve) => {
        //     setTimeout(() => {
        //         resolve("ok")
        //     }, 700)
        // })

        try {
            const data = signInScheme.parse({
                email: formData.get("email"),
                password: formData.get("password"),
            })

            const response = await api.post("/sessions", data)
            auth.save(response.data)

        } catch (error) {
            console.log(error)
            if(error instanceof ZodError){
                return { message: error.issues[0].message }
            }

            if(error instanceof AxiosError){
                return { message: error.response?.data.message }
            }

            return { message: "Não foi possível entrar" }
        }

    }

    return (
        //Agora o action chama o formAction e é ele quem dispara a função onAction
        <form action={formAction} className="w-full flex flex-col gap-4">
            <Input type="email" required legend="E-mail" placeholder="seu@email.com"
            //onChange={(e) => setEmail(e.target.value)}
            name="email"
            />

            <Input type="password" required legend="Senha" placeholder="Digite sua senha"
            //onChange={(e) => setPassword(e.target.value)}
            name="password"
            />

            <p className="text-sm text-red-600 text-center my-4 font-medium">
                {state?.message}
            </p>

            <Button type="submit" isLoading={isLoading}>Entrar</Button>

            <a href="/signup" className="text-sm font-semibold text-gray-100 mt-10 mb-4 text-center hover:text-green-800 transition ease-linear">Criar conta</a>
        </form>
    )
}