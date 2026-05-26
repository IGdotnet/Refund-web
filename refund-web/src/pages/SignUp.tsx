import { useState } from "react"

import { Input } from "../components/Input"
import { Button } from "../components/Button"

export function SignUp() {

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    function onSubmit(e: React.FormEvent){
        e.preventDefault()
    }

    return (
         <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
            <Input required legend="Nome"
            placeholder="Seu nome"
            onChange={(e) => setNome(e.target.value)}/>

             <Input type="email" required legend="E-mail"
            placeholder="seu@email.com"
            onChange={(e) => setEmail(e.target.value)}/>

            <Input type="password" required legend="Senha" placeholder="Digite sua senha"
            onChange={(e) => setPassword(e.target.value)}/>

            <Input type="password" required legend="Confirme sua senha" placeholder="Digite sua senha"
            onChange={(e) => setPasswordConfirm(e.target.value)}/>

            <Button type="submit" isLoading={isLoading}>Cadastrar</Button>

            <a href="/" className="text-sm font-semibold text-gray-100 mt-10 mb-4 text-center hover:text-green-800 transition ease-linear">Já tenho uma conta</a>
        </form>
    )
}
