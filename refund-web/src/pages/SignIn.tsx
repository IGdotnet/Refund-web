import { useState } from "react"

import { Input } from "../components/Input"
import { Button } from "../components/Button"

export function SignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)


    //Recupera as informações de e-mail e senha digitados pelo usuário
    function onSubmit(e: React.FormEvent) {
        e.preventDefault()
    }

    return (
        <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
            <Input type="email" required legend="E-mail"
            placeholder="seu@email.com"
            onChange={(e) => setEmail(e.target.value)}/>

            <Input type="password" required legend="Senha" placeholder="Digite sua senha"
            onChange={(e) => setPassword(e.target.value)}/>

            <Button type="submit" isLoading={isLoading}>Entrar</Button>

            <a href="/signup" className="text-sm font-semibold text-gray-100 mt-10 mb-4 text-center hover:text-green-800 transition ease-linear">Criar conta</a>
        </form>
    )
}